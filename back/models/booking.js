'use strict';
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        googleId: DataTypes.STRING,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE
    })
    Booking.associate = (models) => {
        Booking.belongsToMany(models.User, {
            through: 'Bookings_User',
            as: 'users'
        });
    }
    return Booking;
};