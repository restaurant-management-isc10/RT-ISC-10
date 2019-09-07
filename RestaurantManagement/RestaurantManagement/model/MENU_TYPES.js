module.exports = (sequelize, type) => {
    return sequelize.define('MENU_TYPE', {
        id: {
            field: 'MT_ID',
            type: type.STRING(8),
            primaryKey: true
        },
        MT_Name: {
            type: type.STRING(8),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}