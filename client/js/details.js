// js for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
  const res = await fetch(`http://localhost:5000/products/${id}`);

  if (!res.ok) {
    window.location.replace('/');
  }

  const product = await res.json();

  const template = `
    <h1>${product.name}</h1>
    <p>${product.description}</p>
  `;

  container.innerHTML = template;

  deleteBtn.addEventListener('click', async () => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    });
    window.location.replace('./index.html');
  });
};

window.addEventListener('DOMContentLoaded', renderDetails);
