module.exports = (sequelize, type) => {
    return sequelize.define('BILLS', {
        id: {
            field: 'B_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        E_ID: {
            type: type.STRING(8),
            allowNull: false
        },
        B_Date: {
            type: type.DATE
        },
        B_Payment :{
            type : type.FLOAT
        }

    }, {
        timestamps: false
    })
}