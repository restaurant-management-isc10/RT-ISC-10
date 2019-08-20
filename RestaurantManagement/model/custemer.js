module.exports = (sequelize, type) => {
    return sequelize.define('Custemers', {
        id: {
            field: 'C_ID',
            type: type.INTEGER,
            primaryKey: true
        },
        nameCus: {
            type: type.STRING(8),
            allowNull: false
        }
    },{timestamps : false})
}