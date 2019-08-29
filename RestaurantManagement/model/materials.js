module.exports = (sequelize, type) => {
    return sequelize.define('MATERIALS', {
        id: {
            field: 'MA_ID',
            type: type.STRING(8),
            primaryKey: true
        },
        MA_T_ID: {
            type: type.STRING(8),
            allowNull: false
        },
        MA_Name: {
            type: type.STRING(50),
            allowNull: false
        },
        MA_Supplier: {
            type: type.STRING(25),
            allowNull: false
        },
        MA_Unit:{
            type: type.STRING(10),
            allowNull: false
        },
        MA_Count:{
            type: type.INTERGER,
            allowNull: false
        },
        MA_Cost:{
            type: type.FLOAT,
            allowNull: false
        },
        MA_Expriation_Date:{
            type: type.DATE,
            allowNull: false
        },
        MA_Import_Date:{
            type: type.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}