'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('session', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      session_id: STRING(255),
      user_name: STRING(255),
      seat_name: STRING(255),
      shop_name: STRING(255),
      customer_name: STRING(150),
      supplier_id: INTEGER,
      session_state: INTEGER,
      create_time: DATE,
      update_time: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('session');
  }
};
