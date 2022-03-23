(function () {
        async function loadCategoryItems() {
          const response = await fetch("category-items.json");
          const items = await response.json();
          renderCategoryItems(items);
        }

        function renderCategoryItems(items) {
          const itemsContainer = document.querySelector(".category__items");
          items.map((item) => {
            itemsContainer.innerHTML = `
            <div class="category__item">
               <img src="${item.imgUrl}" alt="${item.title}">
                <h3 class="category__item-name">${item.title}</h3>
                <h4 class="category__item-price">$${item.price}</h4>
            </div>
            `;
          });
        }

        loadCategoryItems();

})()