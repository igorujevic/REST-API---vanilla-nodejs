// js for index.html
const container = document.querySelector('.products');
const searchForm = document.querySelector('.search-form');

const renderProducts = async (search) => {
  let uri = 'http://localhost:5000/products';
  if (search) {
    uri += `?&q=${search}`;
  }
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

// search
searchForm.addEventListener('keyup', async (e) => {
  e.preventDefault();
  renderProducts(searchForm.search.value.trim());
});

window.addEventListener('DOMContentLoaded', () => renderProducts());
