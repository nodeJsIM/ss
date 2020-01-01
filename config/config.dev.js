/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577786660943_7907';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    datasources: [
      {
        delegate: 'mysqlModel', // load all models to app.model and ctx.model
        baseDir: 'mysql_model', // load models from `app/model/*.js`
        database: 'egg-sequelize-example-dev',
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        host: '127.0.0.1',
        username: "root",
        port: 3306,
        password: "12345678",
      },
      {
        delegate: 'model', // load all models to app.adminModel and ctx.adminModel
        baseDir: 'model', // load models from `app/admin_model/*.js`
        database: 'ss',
        dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
        connectionUri: 'postgres://postgres:123456@127.0.0.1:5432/ss',
        username: "postgres",
        host: '127.0.0.1',
        port: 5432,
        password: "123456",
      },
    ],
  };

  config.cluster = {
    listen: {
      port: 7002,
    }
  };

  config.logger = {
    level: 'DEBUG',
    consoleLevel: 'DEBUG',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
