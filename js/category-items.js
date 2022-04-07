(function () {
  let items;
  let activeCurrency = "price";
  let activeCurrencyIcon = "currency";

  const rateEuro = 0.91;
  const rateYen = 123.88;


  async function loadCategoryItems() {
    const response = await fetch("category-items.json");
    const data = await response.json();

    items = data.map((item) => {
      item.euroPrice = item.price * rateEuro;
      item.yenPrice = item.price * rateYen;
      return item;
    });

    items = data.map((item) => {
      item.euroCurrency = "€";
      item.yenCurrency = "¥";
      return item;
    })

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
                <h4 class="category__item-price">${item[activeCurrencyIcon] + item[activeCurrency].toFixed(2)}</h4>
            </div>
            `;
    }
  }

  function updateCurrency(newCurrency, newCurrencyIcon) {
    if (activeCurrency !== newCurrency && activeCurrencyIcon !== newCurrencyIcon) {
      activeCurrency = newCurrency;
      activeCurrencyIcon = newCurrencyIcon;
      renderCategoryItems();
    }
  }

  document.querySelector(".currency-converter__USD").addEventListener("click", function () {
      updateCurrency("price", "currency");
    });

  document.querySelector(".currency-converter__EUR").addEventListener("click", function () {
      updateCurrency("euroPrice", "euroCurrency");
    });

  document.querySelector(".currency-converter__JPY").addEventListener("click", function () {
      updateCurrency("yenPrice", "yenCurrency");
    });

  loadCategoryItems();

  const currencyMenu = document.querySelector(".icon__dollar");
  const currencyBody = document.querySelector(".header__currency-converter");
  const currencyMenuArrow = document.querySelector(".icon__arrow");
  currencyMenu.addEventListener("click", function (e) {
    currencyBody.classList.toggle("active");
    currencyMenuArrow.classList.toggle("active");
  })
})();
