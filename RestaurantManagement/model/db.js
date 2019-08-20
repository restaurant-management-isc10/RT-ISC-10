const Sequelize = require('sequelize');
const Custemermodel = require('./custemer')
const MenuModel = require('./MENU')


const sequelize = new Sequelize('quanLyUser', 'sa', '123456', {
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
})

const Custemer = Custemermodel(sequelize,Sequelize)
const Menu = MenuModel(sequelize,Sequelize)

sequelize.sync({force : true}).then(()=>{
    console.log("creat dataabase")

});
module.exports ={
    Custemer,
    Menu
}