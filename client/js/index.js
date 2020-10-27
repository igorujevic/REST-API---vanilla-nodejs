// js for index.html
const container = document.querySelector('.products');

const renderProducts = async () => {
  const uri = 'http://localhost:5000/products';

  const res = await fetch(uri);
  const products = await res.json();

  let template = '';
  products.forEach((product) => {
    template += `
      <div class="product">
        <h4>${product.name} $</h4>
        <p>${product.description} $</p>
        <p><small>${product.price} $</small></p>
        <a href="/details.html?id=${product.id}">Read more</a>
      </div>
    `;
  });

  container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderProducts());
