const ProductController = require("../controllers/Product.controller");
module.exports = function (app) {
  // app.get("/api", ProductController.index);
  app.get('/api/product',     ProductController.getAllPeople);
  app.post('/api/product',    ProductController.createProduct);
  app.get('/api/product/:id', ProductController.getProduct);
}