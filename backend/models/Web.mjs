import {Sequelize,DataTypes} from 'sequelize'

const {Model} = Sequelize;

class Web extends Model{
    static initialize(seq){
        Web.init(
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                unique: true
            },
            site:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            link:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            password:{
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            sequelize: seq,
            modelName: 'Web',
            tableName: 'Webs'
        });
    }
}


export {Web};
