module.exports = (sequelize, type) => {
    return sequelize.define('BILL_DETAILS', {
        id: {
            field: 'B_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        B_ID: {
            type: type.INTEGER,
            allowNull: false
        },
        M_ID: {
            type: type.STRING(8),
            allowNull: false
        },
        BD_Count: {
            type: type.INTEGER,
        },
        BD_Price: {
            type: type.FLOAT
        }
    }, {
        timestamps: false
    })
}