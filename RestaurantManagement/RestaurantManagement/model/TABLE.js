module.exports = (sequelize, type) => {
    return sequelize.define('TABLE', {
        id: {
            field: 'T_ID',
            type: type.STRING(8),
            primaryKey: true
        },
        T_Position: {
            type: type.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}