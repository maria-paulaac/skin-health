const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCartMenu = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
shoppingCartMenu.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

// Layout the products of the website
const productList = [];
productList.push({
  brand: "Cerave",
  name: "Foaming Facial Cleanser",
  price: 85000,
  image:
    "https://www.cerave.co/-/media/Project/Loreal/BrandSites/CeraVe/Master/LatamHub/Colombia/Latest-packshot-image/Gel-Limpiador-Espumoso-473ml---3337875597357/Gel-limpiador-espumoso-1.jpg",
});
productList.push({
  brand: "La Roche Posay",
  name: "Effaclar Purifying Foaming Gel",
  price: 159000,
  image:
    "https://www.beautycalia.com/wp-content/uploads/2022/05/3337872411991_1.webp",
});
productList.push({
  brand: "Isdin",
  name: "Isdin Fusion Water Sunscreen Color Light FPS 50+",
  price: 113000,
  image:
    "https://www.beautycalia.com/wp-content/uploads/2022/06/FUSION-WATER-LIGHT-CAJA-.webp",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product = {brand, name, price, image}
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productBrand = document.createElement("p");
    productBrand.innerHTML = product.brand;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productPrice = document.createElement("p");
    productPrice.innerText = "$ " + product.price;

    // Insert children into their parent container -> div
    productInfoDiv.appendChild(productBrand);
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);

    const productFigure = document.createElement("figure");
    const productCartIcon = document.createElement("img");
    productCartIcon.setAttribute("src", "../icons/add_cart.png");

    // Insert children into their parent container -> Figure
    productFigure.appendChild(productCartIcon);

    // Insert children into their parent container -> div class="product-info"
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    // Insert children into their parent container -> div class="product-card"
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    // Insert children into their parent HTML container -> div class="cards-container"
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
