module.exports = (sequelize, type) => {
    return sequelize.define('INGREDIENTS', {
        id: {
            field: 'I_ID',
            type: type.INTEGER,
            primaryKey: true
        },
        M_ID: {
            type: type.STRING(8),
            allowNull: false
        },
        MA_ID: {
            type: type.STRING(8),
            allowNull: false
        },
        I_Count: {
            type: type.FLOAT,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}