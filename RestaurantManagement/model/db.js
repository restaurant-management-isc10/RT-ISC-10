const Sequelize = require('sequelize');
const Custemermodel = require('./custemer');
const MenuModel = require('./MENU');
const MenuTypesModel = require('./MENU_TYPES');


const sequelize = new Sequelize('restaurant', 'sa', '123456', {
    dialect: 'mssql',
    host: 'localhost',
    dialectOption: {
        option: {
            instanceName: 'SQLEXPRESS'
        }
    },
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: true
});

const Custemer = Custemermodel(sequelize,Sequelize);
const Menu = MenuModel(sequelize,Sequelize);
const Menu_Types = MenuTypesModel(sequelize, Sequelize);
Menu.belongsTo(Menu_Types,{foreignKey: 'MT_ID', as: 'menuTypes'});
Menu_Types.hasMany(Menu,{foreignKey: 'MT_ID', as: 'menu'});

sequelize.sync({force : true}).then(()=>{
    console.log("create database");
});

module.exports ={
    Custemer,
    Menu,
    Menu_Types
}