module.exports = (sequelize, type) => {
    return sequelize.define('ORDER', {
        id: {
            field: 'O_ID',
            type: type.STRING(8),
            primaryKey: true
        },
        M_ID: {
            type: type.STRING(8),
            allowNull: false
        },
        TD_ID: {
            type: type.STRING(8),
            allowNull: false
        },
        O_Count: {
            type: type.INTEGER
        }
    }, {
        timestamps: false
    })
}