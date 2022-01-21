const {PromocionRoutes} = require('./index.routes');
const Express = require('express');
const Api = Express();

Api.use(Express.json());
Api.use('/Microservicio', PromocionRoutes);

module.exports = Api;