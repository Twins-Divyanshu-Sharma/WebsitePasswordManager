import {createWeb, getWeb} from '../services/db_service.mjs';

const createWebController = async (req, res) => {
    let site = req.body.site;
    let link = req.body.link;
    let password = req.body.password;

    let exists_link = "";
    let exists_pass = "";

    await getWeb(site).then(info=>{
        exists_link = info.link;
        exists_pass = info.password;
    }).catch(error=>{
        console.log("Unable to create : " + error);
    });
   
    if( exists_link == "Null" && exists_pass == "Void" )
        await createWeb(site, link, password);

}

export {createWebController}
