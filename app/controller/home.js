'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log("this is test");
    ctx.logger.info('------ this is index');
    ctx.body = 'hi, egg xxxxx1!!!';
  }
}

module.exports = HomeController;
