module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
        'Bookings_User',
        {
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          BookingId: {
            type: Sequelize.UUID,
            primaryKey: true,
          },
          UserId: {
            type: Sequelize.UUID,
            primaryKey: true,
          },
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('Bookings_User');
  },
};