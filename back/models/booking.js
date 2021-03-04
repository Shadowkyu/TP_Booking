'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('User', {
    googleId: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {})
  Booking.associate = (models) => {
    Booking.belongsToMany(User, { through: 'Bookings_User' });
  }
  return Booking;
};