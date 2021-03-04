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
          type: Sequelize.INTEGER,
          references: {
            model: 'Bookings',
            key: 'id'
          },
          onDelete: 'cascade'
        },
        UserId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          },
          onDelete: 'cascade'
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('Bookings_User');
  },
};