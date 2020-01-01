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

  // add postgresql
  config.sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    connectionUri: 'postgres://postgres:123456@127.0.0.1:5432/ss-test',
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
