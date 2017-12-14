const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes();

routes.add('checkout', '/checkout/:stage');
