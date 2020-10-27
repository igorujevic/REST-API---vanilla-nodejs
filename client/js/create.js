// js for create.html
const form = document.querySelector('form');
const uri = 'http://localhost:5000/products';

const createProduct = async (e) => {
  e.preventDefault();

  const doc = {
    name: form.name.value,
    description: form.description.value,
    price: form.price.value,
  };

  await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' },
  });

  window.location.replace('./index.html');
};

form.addEventListener('submit', createProduct);
