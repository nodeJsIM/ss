'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('seat', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(40),
      web_name: STRING(40),
      nickname: STRING(50),
      supplier_id: INTEGER,
      create_time: DATE,
      last_update_time: DATE,
      max_user: INTEGER,
      host: STRING(20), 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('seat');
  }
};
