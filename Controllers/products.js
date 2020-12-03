const products = require('../data/products');

const list = ('/products/', function (req, res) {
    res.json(products)
});

const show = ('/products/:id', function (req, res) {
    const productsID = req.params.id;
    for (let product of products) {
    if (product._id === parseInt(productsID)) {
        res.json(product)
    }
    }
});

const create = ('/products/', (req, res) => {
    const newProduct = {
      _id: products.length + 1,
      name: req.body.name,
      description: req.body.description, 
    };
  
    products.push(newProduct);
    res.json(products)
  });

  module.exports = {
    list,
    show,
    create
}