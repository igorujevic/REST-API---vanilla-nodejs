// js for index.html
const container = document.querySelector('.products');

const renderProducts = async () => {
  const uri = 'http://localhost:5000/products';

  const res = await fetch(uri);
  const products = await res.json();

  let template = '';
  products.forEach((product) => {
    template += `
      <div class="product" onclick="location.href='/client/details.html?id=${product.id}';">
        <h4 class="row product-name">${product.name}</h4>
        <p class="row product-description">${product.description}</p>
        <p class="row product-price">${product.price} $</p>
        <a class= "row" href="/client/details.html?id=${product.id}">Read more</a>
      </div>
    `;
  });

  container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderProducts());
