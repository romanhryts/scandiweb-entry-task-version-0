(function () {
  let items;

  async function loadCategoryItems() {
    const response = await fetch("category-items.json");
    items = await response.json();
    renderCategoryItems();
  }

  function renderCategoryItems() {
    const itemsContainer = document.querySelector(".category__items");
    itemsContainer.innerHTML = '';
    for (const item of items) {
      itemsContainer.innerHTML += `
            <div class="category__item">
               <img src="${item.imgUrl}" alt="${
        item.title
      }" class="category__item-icon">
                <h3 class="category__item-name">${item.title}</h3>
                <h4 class="category__item-price">$${item.price.toFixed(2)}</h4>
            </div>
            `;
    }
  }

  document.querySelector(".currency-converter__EUR").addEventListener("click", convertToEuro);

  function convertToEuro() {
    const rateEuro = 0.91;
    for (const item of items) {
      item.price *= rateEuro;
    }
    renderCategoryItems();
  }

  loadCategoryItems();
})();
