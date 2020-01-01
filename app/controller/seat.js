'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

class SeatController extends Controller {
    async index() {
        const ctx = this.ctx;
        ctx.logger.debug('this is seats');
        const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
        ctx.body = await ctx.model.Seat.findAll(query);
    }

    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.model.Seat.findByPk(toInt(ctx.params.id));
    }

    async create() {
        const ctx = this.ctx;
        const { name, supplier_id } = ctx.request.body;
        const seat = await ctx.model.Seat.create({ name, supplier_id });
        ctx.status = 201;
        ctx.body = seat;
    }

    async update() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const seat = await ctx.model.Seat.findByPk(id);
        if (!seat) {
            ctx.status = 404;
            return;
        }

        const { name, supplier_id } = ctx.request.body;
        await seat.update({ name, supplier_id });
        ctx.body = seat;
    }

    async destroy() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const seat = await ctx.model.Seat.findByPk(id);
        if (!seat) {
            ctx.status = 404;
            return;
        }

        await seat.destroy();
        ctx
    }
}

module.exports = SeatController;
