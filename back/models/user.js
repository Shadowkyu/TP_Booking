'use strict'
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        isClient: DataTypes.BOOLEAN
    })

    User.associate = (models) => {
        User.belongsToMany(models.Booking, {
            through: 'Bookings_User',
            as: 'bookings'
        });
    }
    return User
}
