(function () {
  let items;

  async function loadCategoryItems() {
    const response = await fetch("category-items.json");
    items = await response.json();
    renderCategoryItems();
  }

  function renderCategoryItems() {
    const itemsContainer = document.querySelector(".category__items");
    itemsContainer.innerHTML = "";
    for (const item of items) {
      itemsContainer.innerHTML += `
            <div class="category__item">
               <img src="${item.imgUrl}" alt="${item.title}" class="category__item-icon">
                <h3 class="category__item-name">${item.title}</h3>
                <h4 class="category__item-price">${item.euroPrice ? item.euroPrice.toFixed(2) : item.yenPrice ? item.yenPrice.toFixed(2) : item.price.toFixed(2)}</h4>
            </div>
            `;
    }
  }

  document.querySelector(".currency-converter__EUR").addEventListener("click", function () {
    const rateEuro = 0.91;
    for (const item of items) {
      item.euroPrice = item.price * rateEuro;
    }
    renderCategoryItems();
  });

  document.querySelector(".currency-converter__JPY").addEventListener("click", function () {
    const rateYen = 123.88;
    for (const item of items) {
      item.yenPrice = item.price * rateYen;
    }
})

  /*
 document.querySelector(".currency-converter__EUR").addEventListener("click", convertCurrency);
 document.querySelector(".currency-converter__USD").addEventListener("click", convertCurrency);
 document.querySelector(".currency-converter__JPY").addEventListener("click", convertCurrency);
*/
  /*
  function convertCurrency() {
    const euroRate = 0.91;
    const yenRate = 123.83;
    if (euro) {
      for (const item of items) {
        item.currentPrice = item.price * euroRate;
      } 
          renderCategoryItems();
    } else if (dollar) {
      for (const item of items) {
        item.currentPrice = item.price;
      }
          renderCategoryItems();
    } else if (yen) {
      for (const item of items) {
        item.currentPrice = item.price * yenRate;
      }
          renderCategoryItems();
    }
        renderCategoryItems();
  }
  */

  /* document
    .querySelector(".currency-converter__EUR")
    .addEventListener("click", convertToEuro);
  */
  // document.querySelector(".currency-convertor__USD").addEventListener("click", convertToDollar);

  /* document
    .querySelector(".currency-convertor__JPY")
    .addEventListener("click", convertToYen); */

  /*   function convertToYen() {
    const rateYen = 123.83;
    for (const item of items) {
      item.priceYen = item.price * rateYen;
    }
    renderCategoryItems();

  } */

  loadCategoryItems();
})();
