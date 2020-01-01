'use strict';

const Service = require('egg').Service;

class SeatService extends Service {
    async list({ offset = 0, limit = 10 }) {
        return this.ctx.model.Seat.findAndCountAll({
            offset,
            limit,
            order: [['create_time', 'desc'], ['id', 'desc']],
        });
    }

    async find(id) {
        const seat = await this.ctx.model.Seat.findByPk(id);
        if (!seat) {
            this.ctx.throw(404, 'seat not found');
        }
        return seat;
    }

    async create(seat) {
        return this.ctx.model.User.create(seat);
    }

    async update({ id, updates }) {
        const seat = await this.ctx.model.Seat.findByPk(id);
        if (!seat) {
            this.ctx.throw(404, 'seat not found');
        }
        return seat.update(updates);
    }

    async del(id) {
        const seat = await this.ctx.model.Seat.findByPk(id);
        if (!seat) {
            this.ctx.throw(404, 'seat not found');
        }
        return seat.destroy();
    }
}

module.exports = SeatService;
