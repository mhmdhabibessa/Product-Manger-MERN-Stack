const { Product } = require("../models/product.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};
// The method below is new

module.exports.getAllPeople = (request, response) => {
  Product.find({})
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  console.log(title);
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.getProduct = (request, response) => {
  Product.findOne({_id:request.params.id})
      .then(prodcut => response.json(prodcut))
      .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedProduct => response.json(updatedProduct))
      .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}


