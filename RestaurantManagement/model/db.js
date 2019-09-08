const Sequelize = require('sequelize');
const MenuModel = require('./MENU');
const MenuTypeModel = require('./MENU_TYPES');
const EmployeesModel = require('./EMPLOYEES');
const BillsModel = require('./BILLS');
const BillDetailsModel = require('./BILL_DETAILS');
const TableModel = require('./TABLE');
const OrderModel = require('./ORDER');
const MaterialModel=require('./MATERIAL');
const Material_typeModel=require('./MATERIAL_TYPE')

const sequelize = new Sequelize('quanLyNhaHang', 'sa', '123456', {
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

const Menu = MenuModel(sequelize,Sequelize)
const MenuType = MenuTypeModel(sequelize,Sequelize)
const Employees = EmployeesModel(sequelize,Sequelize)
const Bills = BillsModel(sequelize,Sequelize)
const BillsDeatils = BillDetailsModel(sequelize,Sequelize)
const Table = TableModel(sequelize,Sequelize)
const Order = OrderModel(sequelize,Sequelize)
const MaterialType =Material_typeModel(sequelize,Sequelize)

Menu.belongsTo(MenuType,{ foreignKey: 'MT_ID', as: 'menuType'} );
MenuType.hasMany(Menu ,{foreignKey: 'MT_ID',as: 'menu' });

Bills.belongsTo(Employees,{ foreignKey :'E_ID',as:'employees'});
Employees.hasMany(Bills,{ foreignKey: 'E_ID', as: 'bill' });

Bills.hasMany(BillsDeatils,{ foreignKey: 'B_ID',as:'billD'});
BillsDeatils.belongsTo(Bills,{ foreignKey :'B_ID'});

BillsDeatils.belongsTo(Menu,{ foreignKey:'M_ID'})
Menu.hasMany(BillsDeatils,{ foreignKey :'M_ID'})

Order.belongsTo(Table,{foreignKey:"T_ID"})
Table.hasMany(Order,{foreignKey:"T_ID"})

Order.belongsTo(Menu,{foreignKey:"M_ID"})
Menu.hasMany(Order,{foreignKey:"M_ID"})

Menu
sequelize.sync({force : true}).then(()=>{
    console.log("create dataabase")

});



module.exports ={
    Menu,
    MenuType,
    Employees,
    Bills,
    BillsDeatils,
    Table,
    Material,
    MaterialType
}