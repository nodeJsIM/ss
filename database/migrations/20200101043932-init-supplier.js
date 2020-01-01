'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('supplier', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(100),
      create_time: DATE,
      last_update_time: DATE,
      logo_url: STRING(255),
      welcomes: STRING(512),
      status: INTEGER,
      no_service_welcomes: STRING(100),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('supplier');
  }
};
