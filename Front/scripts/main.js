const serverUrl = 'http://localhost:3000/';
const itemsPath = 'items/';
const imagesPath = 'img/';

window.onload = getData();

const items = document.querySelector(".items");

function getData() {
  fetch(`${serverUrl}${itemsPath}`)
    .then((res) => res.json())   
    .then((data) => printData(data));
}

function printData(data) {
  
  

  data.forEach((item) => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'col';
    itemContainer.innerHTML += createDomElement(item);
    items.append(itemContainer);
  });
}

function createDomElement(item) {
  const itemHtml = `
<div class="item card shadow-sm">
  <img class="item-image" src="${serverUrl}${imagesPath}${item.image}" alt="iphone-13-promax" width="300" height="300"  >
  <div class="card-body">
    <p class="card-title fw-bold item-title">${item.title}</p>
    <p class="card-text item-price">${item.price} $</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary addToCart " href="#carrito">Añadir</button>
        
      </div>
      <small class="text-muted">Disponible</small>
    </div>
  </div>
</div>`;
  return itemHtml;
}
