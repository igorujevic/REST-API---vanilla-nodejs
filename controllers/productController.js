const Product = require('../models/productModel');
const { getPostData } = require('../utils');

// @desc Gets All Products
// @route GET api/products
async function getProducts(_, res) {
  try {
    const products = await Product.findAllProducts();
    res.writeHeader(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// @desc Get Single Product
// @route GET api/products/:id
async function getProduct(_, res, id) {
  try {
    const product = await Product.findProductsById(id);
    if (!product) {
      res.writeHeader(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product Not Found.' }));
    } else {
      res.writeHeader(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc Create Product
// @route POST api/products
async function createProduct(req, res) {
  try {
    const body = await getPostData(req);
    const newProduct = await Product.create(JSON.parse(body));
    res.writeHeader(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
