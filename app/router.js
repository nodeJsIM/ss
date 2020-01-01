'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  app.resources('seats', '/seats', controller.seat);
  app.resources('users', '/users', app.controller.user);
};
