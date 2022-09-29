import Sequelize from 'sequelize'
import {Op} from 'sequelize'

import {Web} from '../models/Web.mjs'

let sequelize;

async function connect(){
    let database = process.env.DATABASE;
    let user = process.env.USER;
    let password = process.env.MYSQL_PASSWORD;
    let mysql_port = process.env.MYSQL_PORT;

    sequelize = new Sequelize(database, user, password,{
        dialect: 'mysql',
        port:mysql_port,
        host:'database_service'
    });



    let retries = 10;
    while(retries) {
        try{
            await sequelize.authenticate();
            console.log('connected to database');
            break;
        }catch(err){
            console.error('unable to connect', err);
            retries -= 1;
            console.log(`retries left : ${retries}`);
            await new Promise(res => setTimeout(res, 5000));
        }
    }


    Web.initialize(sequelize);

    await sequelize.sync();

    console.log('Database is connected');

}

async function syncDatabase(){
    await sequelize.sync();
}

async function clearDatabase(){
    await sequelize.sync({force:true});
}

async function getWeb(site_name){
    let info = {link: "", password: ""};
    console.log("--> Inside db_service : getInfo");
    console.log("--> " + site_name );
    await Web.findOne({
       where:{
            site: site_name,
       }
    }).then(res=>{
        info.link = res.link;
        info.password = res.password;
    }).catch(err=>{
        info.link = "Null";
        info.password = "Void";
    });
    
    console.log("--> end of db_service : getInfo");
   return info;
}

async function createWeb(name, link, password){
    await Web.create({
        site: name,
        link: link,
        password: password,
    }).then(()=>{
        Web.sync();
    });

    console.log('created');
}

async function updateWeb(site_name, pass){
    await Web.findOne({
       where:{
            site: site_name,
       }
    }).then(info=>{
        info.password =  pass;
        info.save();
        Web.sync();
    });

    console.log('updated');
    
}

async function deleteWeb(name){
    await Web.destroy({
        where:{
            site: name
        }
    }).then(()=>{
        Web.sync();
    });
    console.log('deleted');
}

export {connect,syncDatabase,clearDatabase,getWeb,createWeb,updateWeb,deleteWeb};
