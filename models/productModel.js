const db = require('../data/db.json');
const { PORT } = process.env;

function findAllProducts() {
  return new Promise((resolve, _) => {
    resolve(db['products']);
  });
}

function findProductsById(id) {
  return new Promise((resolve, _) => {
    const product = db['products'].find((p) => p.id === id);
    resolve(product);
  });
}

function create(product) {
  const url = `http://localhost:${PORT}/products`;
  return new Promise((resolve, _) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newProduct = { id, ...product };
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });

    resolve(newProduct);
  });
}

module.exports = {
  findAllProducts,
  findProductsById,
  create,
};
