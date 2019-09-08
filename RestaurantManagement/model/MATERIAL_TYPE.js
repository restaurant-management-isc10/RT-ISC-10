module.exports = (sequelize, type) => {
    return sequelize.define('MATERIAL_TYPE', {
        id: {
            field: 'MAT_ID',
            type: type.STRING(8),
            primaryKey: true
        },
        MAT_Name: {
            type: type.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}