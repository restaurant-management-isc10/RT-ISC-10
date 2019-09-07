module.exports = (sequelize, type) => {
    return sequelize.define('EMPLOYEES', {
        id: {
            field: 'E_ID',
            type: type.STRING(8),
            primaryKey: true
        },
        E_Name: {
            type: type.STRING(50),
            allowNull: false

        },
        E_Position: {
            type: type.STRING(25),
            allowNull: false

        },
        E_Gender: {
            type: type.INTEGER,
            allowNull: false

        }
        
    }, {
        timestamps: false
    })
}