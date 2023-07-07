const mainRoutes = require('./mainRoutes');
const chatAPI = require("../components/chat");
const productsApi = require('./products');
const cartsApi = require('./carts');


module.exports = app => {
    mainRoutes(app);
    chatAPI(app);
    productsApi(app);
    cartsApi(app);
    app.get('/', (req, res) => res.send('Hello world!'));
}