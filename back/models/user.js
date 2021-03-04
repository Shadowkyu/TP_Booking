'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    isClient: DataTypes.BOOLEAN
  }, {})

  User.associate = (models) => {
    User.belongsToMany(Booking, { through: 'Bookings_User' });
  }
  return User
}
