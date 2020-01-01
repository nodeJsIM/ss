'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Seat = app.model.define('seat', {
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

  return Seat;
};