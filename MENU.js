module.exports = (sequelize, type) => {
    return sequelize.define('MENU', {
        id: {
            field: 'M_ID',
            type: type.STRING(8),
            primaryKey: true
        },
        MT_ID: {
            type: type.STRING(8),
            allowNull: false
        },
        M_Name: {
            type: type.STRING(50),
            allowNull: false
        },
        M_Price: {
            type: type.FLOAT,
            allowNull: false
        },
        M_Img:{
            type: type.STRING
        }
    }, {
        timestamps: false
    })
}