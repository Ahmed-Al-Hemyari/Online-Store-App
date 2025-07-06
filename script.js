const smartPhones = [
  {
    title: "iPhone 15 Pro",
    price: 999,
    image: "./images/Products/01_smart-phones/iPhone 15 Pro.webp",
  },
  {
    title: "Samsung Galaxy S23 Ultra",
    price: 1199,
    image: "./images/Products/01_smart-phones/Samsung Galaxy S23 Ultra.webp",
  },
  {
    title: "Google Pixel 8 Pro",
    price: 899,
    image: "./images/Products/01_smart-phones/Google Pixel 8 Pro.jpg",
  },
  {
    title: "OnePlus 11",
    price: 699,
    image: "./images/Products/01_smart-phones/OnePlus 11.png",
  },
  {
    title: "Xiaomi Redmi Note 12",
    price: 249,
    image: "./images/Products/01_smart-phones/Xiaomi Redmi Note 12.jpg",
  },
  {
    title: "Sony Xperia 5 IV",
    price: 949,
    image: "./images/Products/01_smart-phones/Sony Xperia 5 IV.webp",
  },
  {
    title: "Motorola Edge 40",
    price: 599,
    image: "./images/Products/01_smart-phones/Motorola Edge 40.jpg",
  },
  {
    title: "Samsung Galaxy A54",
    price: 449,
    image: "./images/Products/01_smart-phones/Samsung Galaxy A54.webp",
  },
];
localStorage.setItem("smartPhonesDB", JSON.stringify(smartPhones));

const laptops = [
  {
    title: "MacBook Air M2",
    price: 1199,
    image: "./images/Products/02_laptops/MacBook Air M2.webp",
  },
  {
    title: "Dell XPS 13",
    price: 1099,
    image: "./images/Products/02_laptops/Dell XPS 13.jpg",
  },
  {
    title: "HP Spectre x360",
    price: 1249,
    image: "./images/Products/02_laptops/HP Spectre x360.jpg",
  },
  {
    title: "Lenovo ThinkPad X1 Carbon",
    price: 1399,
    image: "./images/Products/02_laptops/Lenovo ThinkPad X1 Carbon.jpg",
  },
  {
    title: "ASUS ROG Zephyrus G14",
    price: 1449,
    image: "./images/Products/02_laptops/ASUS ROG Zephyrus G14.png",
  },
  {
    title: "Microsoft Surface Laptop 5",
    price: 1299,
    image: "./images/Products/02_laptops/Microsoft Surface Laptop 5.jpg",
  },
  {
    title: "Acer Swift 3",
    price: 679,
    image: "./images/Products/02_laptops/Acer Swift 3.jpg",
  },
  {
    title: "Razer Blade 15",
    price: 1799,
    image: "./images/Products/02_laptops/Razer Blade 15.jpg",
  },
];
localStorage.setItem("LaptopsDB", JSON.stringify(laptops));

// Re-inserted categories 03 to 06

const devices = [
  {
    title: "Apple Watch Series 9",
    price: 399,
    image: "./images/Products/03_devices/Apple Watch Series 9.png",
  },
  {
    title: "Amazon Echo Dot 5th Gen",
    price: 49,
    image: "./images/Products/03_devices/Amazon Echo Dot 5th Gen.png",
  },
  {
    title: "Fitbit Charge 5",
    price: 149,
    image: "./images/Products/03_devices/Fitbit Charge 5.jpg",
  },
  {
    title: "GoPro Hero 12 Black",
    price: 399,
    image: "./images/Products/03_devices/GoPro Hero 12 Black.webp",
  },
  {
    title: "Kindle Paperwhite",
    price: 139,
    image: "./images/Products/03_devices/Kindle Paperwhite.jpg",
  },
  {
    title: "DJI Mini 3 Pro Drone",
    price: 759,
    image: "./images/Products/03_devices/DJI Mini 3 Pro Drone.jpg",
  },
  {
    title: "Nest Thermostat",
    price: 129,
    image: "./images/Products/03_devices/Nest Thermostat.jpg",
  },
  {
    title: "Sonos One SL",
    price: 179,
    image: "./images/Products/03_devices/Sonos One SL.jpg",
  },
];
localStorage.setItem("DevicesDB", JSON.stringify(devices));

const computerAccessories = [
  {
    title: "Logitech MX Master 3 Mouse",
    price: 99,
    image:
      "./images/Products/04_computer-accessories/Logitech MX Master 3 Mouse.jpg",
  },
  {
    title: "Corsair K70 RGB Keyboard",
    price: 169,
    image:
      "./images/Products/04_computer-accessories/Corsair K70 RGB Keyboard.jpg",
  },
  {
    title: "Dell 27” Monitor",
    price: 299,
    image: "./images/Products/04_computer-accessories/Dell 27” Monitor.jpg",
  },
  {
    title: "Seagate 2TB External HDD",
    price: 79,
    image:
      "./images/Products/04_computer-accessories/Seagate 2TB External HDD.jpg",
  },
  {
    title: "Anker USB-C Hub",
    price: 49,
    image: "./images/Products/04_computer-accessories/Anker USB-C Hub.jpg",
  },
  {
    title: "Razer BlackWidow Keyboard",
    price: 139,
    image:
      "./images/Products/04_computer-accessories/Razer BlackWidow Keyboard.jpg",
  },
  {
    title: "HyperX Cloud II Headset",
    price: 99,
    image:
      "./images/Products/04_computer-accessories/HyperX Cloud II Headset.jpg",
  },
  {
    title: "Apple Magic Trackpad 2",
    price: 129,
    image:
      "./images/Products/04_computer-accessories/Apple Magic Trackpad 2.jpg",
  },
];
localStorage.setItem(
  "computerAccessoriesDB",
  JSON.stringify(computerAccessories)
);

const electronics = [
  {
    title: "Sony 4K TV 55”",
    price: 799,
    image: "./images/Products/05_electronics/Sony 4K TV 55”.jpg",
  },
  {
    title: "Bose QuietComfort 45 Headphones",
    price: 329,
    image:
      "./images/Products/05_electronics/Bose QuietComfort 45 Headphones.jpg",
  },
  {
    title: "Nikon D3500 DSLR Camera",
    price: 499,
    image: "./images/Products/05_electronics/Nikon D3500 DSLR Camera.jpg",
  },
  {
    title: "Amazon Fire TV Stick 4K",
    price: 49,
    image: "./images/Products/05_electronics/Amazon Fire TV Stick 4K.jpg",
  },
  {
    title: "JBL Flip 6 Speaker",
    price: 129,
    image: "./images/Products/05_electronics/JBL Flip 6 Speaker.jpg",
  },
  {
    title: "Garmin Forerunner 245",
    price: 299,
    image: "./images/Products/05_electronics/Garmin Forerunner 245.webp",
  },
  {
    title: "Samsung Galaxy Tab S8",
    price: 699,
    image: "./images/Products/05_electronics/Samsung Galaxy Tab S8.jpg",
  },
  {
    title: "Apple AirPods Pro 2",
    price: 249,
    image: "./images/Products/05_electronics/Apple AirPods Pro 2.jpg",
  },
];
localStorage.setItem("ElectronicsDB", JSON.stringify(electronics));

const fitness = [
  {
    title: "Peloton Bike",
    price: 1495,
    image: "./images/Products/06_fitness/Peloton Bike.webp",
  },
  {
    title: "Fitbit Versa 4",
    price: 229,
    image: "./images/Products/06_fitness/Fitbit Versa 4.jpg",
  },
  {
    title: "Bowflex SelectTech Dumbbells (Pair)",
    price: 399,
    image:
      "./images/Products/06_fitness/Bowflex SelectTech Dumbbells (Pair).webp",
  },
  {
    title: "Theragun Elite Massage Gun",
    price: 399,
    image: "./images/Products/06_fitness/Theragun Elite Massage Gun.jpg",
  },
  {
    title: "Nike Training Shoes",
    price: 120,
    image: "./images/Products/06_fitness/Nike Training Shoes.jpg",
  },
  {
    title: "Garmin Venu 2",
    price: 349,
    image: "./images/Products/06_fitness/Garmin Venu 2.webp",
  },
  {
    title: "Yoga Mat (Manduka PRO)",
    price: 120,
    image: "./images/Products/06_fitness/Yoga Mat (Manduka PRO).webp",
  },
  {
    title: "Water Bottle (Hydro Flask 32oz)",
    price: 45,
    image: "./images/Products/06_fitness/Water Bottle (Hydro Flask 32oz).webp",
  },
];
localStorage.setItem("FitnessDB", JSON.stringify(fitness));

const homeAndKitchen = [
  {
    title: "Instant Pot Duo 7-in-1",
    price: 99,
    image: "./images/Products/07_home&kitchen/Instant Pot Duo 7-in-1.jpg",
  },
  {
    title: "Dyson V11 Vacuum Cleaner",
    price: 599,
    image: "./images/Products/07_home&kitchen/Dyson V11 Vacuum Cleaner.jpg",
  },
  {
    title: "KitchenAid Stand Mixer",
    price: 379,
    image: "./images/Products/07_home&kitchen/KitchenAid Stand Mixer.jpg",
  },
  {
    title: "Nespresso Vertuo Coffee Machine",
    price: 199,
    image:
      "./images/Products/07_home&kitchen/Nespresso Vertuo Coffee Machine.jpg",
  },
  {
    title: "Lodge Cast Iron Skillet 12”",
    price: 35,
    image: "./images/Products/07_home&kitchen/Lodge Cast Iron Skillet 12”.jpg",
  },
  {
    title: "Philips Air Fryer XXL",
    price: 299,
    image: "./images/Products/07_home&kitchen/Philips Air Fryer XXL.jpg",
  },
  {
    title: "Robot Vacuum (iRobot Roomba 694)",
    price: 279,
    image:
      "./images/Products/07_home&kitchen/Robot Vacuum (iRobot Roomba 694).jpg",
  },
  {
    title: "Breville Toaster Oven",
    price: 249,
    image: "./images/Products/07_home&kitchen/Breville Toaster Oven.jpg",
  },
];
localStorage.setItem("HomeAndKitchenDB", JSON.stringify(homeAndKitchen));

const furniture = [
  {
    title: "IKEA Poäng Armchair",
    price: 79,
    image: "./images/Products/08_furniture/IKEA Poäng Armchair.jpg",
  },
  {
    title: "Zinus Memory Foam Mattress",
    price: 279,
    image: "./images/Products/08_furniture/Zinus Memory Foam Mattress.jpg",
  },
  {
    title: "Sauder Computer Desk",
    price: 139,
    image: "./images/Products/08_furniture/Sauder Computer Desk.jpg",
  },
  {
    title: "Nathan Accent Table",
    price: 109,
    image: "./images/Products/08_furniture/Nathan Accent Table.jpg",
  },
  {
    title: "Ashley Recliner Chair",
    price: 349,
    image: "./images/Products/08_furniture/Ashley Recliner Chair.jpg",
  },
  {
    title: "Wayfair Bookshelf 5-Shelf",
    price: 119,
    image: "./images/Products/08_furniture/Wayfair Bookshelf 5-Shelf.webp",
  },
  {
    title: "Furinno Coffee Table",
    price: 39,
    image: "./images/Products/08_furniture/Furinno Coffee Table.jpg",
  },
  {
    title: "Modway Chair (Set of 2)",
    price: 159,
    image: "./images/Products/08_furniture/Modway Chair (Set of 2).jpg",
  },
];
localStorage.setItem("FurnitureDB", JSON.stringify(furniture));

const officeSupplies = [
  {
    title: "HP Laser Printer M404dn",
    price: 279,
    image: "./images/Products/09_office-supplies/HP Laser Printer M404dn.jpg",
  },
  {
    title: "Staples 3-Hole Punch",
    price: 19,
    image: "./images/Products/09_office-supplies/Staples 3-Hole Punch.jpg",
  },
  {
    title: "AmazonBasics Office Chair",
    price: 129,
    image: "./images/Products/09_office-supplies/AmazonBasics Office Chair.jpg",
  },
  {
    title: "Sharpie Markers (12-pack)",
    price: 15,
    image: "./images/Products/09_office-supplies/Sharpie Markers (12-pack).jpg",
  },
  {
    title: "Post-it Notes (3x3, 12-pack)",
    price: 12,
    image:
      "./images/Products/09_office-supplies/Post-it Notes (3x3, 12-pack).jpg",
  },
  {
    title: "Logitech Wireless Keyboard K270",
    price: 29,
    image:
      "./images/Products/09_office-supplies/Logitech Wireless Keyboard K270.png",
  },
  {
    title: "Desk Organizer",
    price: 24,
    image: "./images/Products/09_office-supplies/Desk Organizer.jpg",
  },
  {
    title: "Fellowes Paper Shredder",
    price: 89,
    image: "./images/Products/09_office-supplies/Fellowes Paper Shredder.webp",
  },
];
localStorage.setItem("OfficeSuppliesDB", JSON.stringify(officeSupplies));

const books = [
  {
    title: "Atomic Habits",
    price: 15,
    image: "./images/Products/10_books/Atomic Habits.jpg",
  },
  {
    title: "Educated",
    price: 13,
    image: "./images/Products/10_books/Educated.jpg",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    price: 14,
    image: "./images/Products/10_books/The Subtle Art of Not Giving a Fck.jpg",
  },
  {
    title: "Rich Dad Poor Dad",
    price: 11,
    image: "./images/Products/10_books/Rich Dad Poor Dad.jpg",
  },
  {
    title: "The Power of Habit",
    price: 12,
    image: "./images/Products/10_books/The Power of Habit.jpg",
  },
  {
    title: "1984",
    price: 9,
    image: "./images/Products/10_books/1984.jpg",
  },
  {
    title: "Can't Hurt Me",
    price: 16,
    image: "./images/Products/10_books/Can't Hurt Me.jpg",
  },
  {
    title: "The Alchemist",
    price: 11,
    image: "./images/Products/10_books/The Alchemist.jpg",
  },
];
localStorage.setItem("BooksDB", JSON.stringify(books));

const toysAndGames = [
  {
    title: "LEGO Classic Bricks Set",
    price: 29,
    image: "./images/Products/11_toys&games/LEGO Classic Bricks Set.jpg",
  },
  {
    title: "UNO Card Game",
    price: 10,
    image: "./images/Products/11_toys&games/UNO Card Game.jpg",
  },
  {
    title: "Nerf Elite Blaster",
    price: 45,
    image: "./images/Products/11_toys&games/Nerf Elite Blaster.jpg",
  },
  {
    title: "Rubik’s Cube 3x3",
    price: 12,
    image: "./images/Products/11_toys&games/Rubik’s Cube 3x3.jpg",
  },
  {
    title: "Remote Control Car",
    price: 25,
    image: "./images/Products/11_toys&games/Remote Control Car.jpg",
  },
  {
    title: "Hot Wheels Track Set",
    price: 33,
    image: "./images/Products/11_toys&games/Hot Wheels Track Set.jpg",
  },
  {
    title: "Jenga Classic Game",
    price: 18,
    image: "./images/Products/11_toys&games/Jenga Classic Game.jpg",
  },
  {
    title: "Play-Doh 10-Pack",
    price: 9,
    image: "./images/Products/11_toys&games/Play-Doh 10-Pack.jpg",
  },
];
localStorage.setItem("ToysAndGamesDB", JSON.stringify(toysAndGames));

const automotives = [
  {
    title: "Bosch Car Battery",
    price: 120,
    image: "./images/Products/12_automotives/Bosch Car Battery.jpg",
  },
  {
    title: "Michelin Pilot Sport Tires (Set of 4)",
    price: 799,
    image:
      "./images/Products/12_automotives/Michelin Pilot Sport Tires (Set of 4).jpg",
  },
  {
    title: "Garmin GPS Navigator",
    price: 149,
    image: "./images/Products/12_automotives/Garmin GPS Navigator.jpg",
  },
  {
    title: "Meguiar’s Car Wax",
    price: 19,
    image: "./images/Products/12_automotives/Meguiar’s Car Wax.jpg",
  },
  {
    title: "Thule Roof Rack",
    price: 259,
    image: "./images/Products/12_automotives/Thule Roof Rack.jpg",
  },
  {
    title: "Car Phone Mount",
    price: 25,
    image: "./images/Products/12_automotives/Car Phone Mount.jpg",
  },
  {
    title: "Jump Starter Pack",
    price: 99,
    image: "./images/Products/12_automotives/Jump Starter Pack.jpg",
  },
  {
    title: "LED Headlight Bulbs",
    price: 45,
    image: "./images/Products/12_automotives/LED Headlight Bulbs.jpg",
  },
];
localStorage.setItem("AutomotivesDB", JSON.stringify(automotives));

document.addEventListener("DOMContentLoaded", loadShared);

document.getElementById("home-icon").src = `./images/icons & logos/home.svg`;
document.getElementById(
  "category-icon"
).src = `./images/icons & logos/category.svg`;
document.getElementById("cart-icon").src = `./images/icons & logos/cart.svg`;
document.getElementById(
  "account-icon"
).src = `./images/icons & logos/account.svg`;

function goToHome() {
  window.location.href = "./index.html";
}

function goToCategory() {
  window.location.href = "./category.html";
}

function goToCart() {
  window.location.href = "./cart.html";
}

function goToAccount() {
  window.location.href = "./account.html";
}
function highLightActiveIcon() {
  const path = window.location.pathname;

  // Safely get icons if they exist
  const homeIcon = document.getElementById("home-icon");
  const categoryIcon = document.getElementById("category-icon");
  const cartIcon = document.getElementById("cart-icon");
  const settingsIcon = document.getElementById("settings-icon");
  const accountIcon = document.getElementById("account-icon");

  if (homeIcon) homeIcon.src = "./images/icons & logos/home.svg";
  if (categoryIcon) categoryIcon.src = "./images/icons & logos/category.svg";
  if (cartIcon) cartIcon.src = "./images/icons & logos/cart.svg";
  if (settingsIcon) settingsIcon.src = "./images/icons & logos/settings.svg";
  if (accountIcon) accountIcon.src = "./images/icons & logos/account.svg"; // ✅ default state

  // Fill active one
  if (path.includes("index.html") || path.endsWith("/")) {
    if (homeIcon) homeIcon.src = "./images/icons & logos/filled-home.svg";
  } else if (path.includes("category.html") || path.includes("products.html")) {
    if (categoryIcon)
      categoryIcon.src = "./images/icons & logos/filled-category.svg";
  } else if (path.includes("cart.html") || path.includes("payment.html")) {
    if (cartIcon) cartIcon.src = "./images/icons & logos/filled-cart.svg";
  } else if (path.includes("account.html")) {
    if (accountIcon)
      accountIcon.src = "./images/icons & logos/filled-account.svg";
  }
}

function loadShared() {
  fetch("./Sub-folders/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(".page-header").innerHTML = data;
      const select = document.getElementById("currency-select");
      if (select) {
        const savedCurrency = localStorage.getItem("currency");
        if (savedCurrency) {
          select.value = savedCurrency;
        }

        select.addEventListener("change", () => {
          localStorage.setItem("currency", select.value);
          location.reload();
        });
      }
    })
    .catch((err) => console.error("Header load failed:", err));

  fetch("./Sub-folders/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(".page-footer").innerHTML += data;
      highLightActiveIcon();
    })
    .catch((err) => console.error("Footer load failed:", err));
}

function addProduct(title, price, imageSrc) {
  let currency = filterCurrency();
  return `
        <div class="product-card" id="product-card">
          <img class="product-card-image" src="${imageSrc}" />
          <div class="product-card-footer">
            <div class="product-labels-box">
              <h4 class="product-name">${title}</h4>
              <p>Price: <span id="product-price">${price}</span><span>${currency}</span></p>
            </div>
            <button class="add-to-cart-btn">
              <img src="./images/icons & logos/add-to-cart.svg" />
            </button>
          </div>
        </div>
      `;
}

// function filterCurrency() {
//   let currency = "";
//   if (localStorage.getItem("currency") === "usd") {
//     currency = "$";
//   } else if (localStorage.getItem("currency") === "sar") {
//     currency = "SAR";
//   } else if (localStorage.getItem("currency") === "yer") {
//     currency = "YER";
//   } else {
//     currency = "$";
//   }
//   return currency;
// }

function filterPrice(price) {
  const currency = localStorage.getItem("currency");
  if (currency === "usd") {
    return Math.round(price);
  } else if (currency === "sar") {
    return Math.round(price * 3.8);
  } else if (currency === "yer") {
    return Math.round(price * 535);
  } else {
    return Math.round(price);
  }
}

function filterCurrency() {
  const currency = localStorage.getItem("currency");
  switch (currency) {
    case "usd":
      return "USD";
    case "sar":
      return "SAR";
    case "yer":
      return "YER";
    default:
      return "USD";
  }
}

function addCartProduct(title, price, image) {
  return `
    <div class="cart-product">
      <img class="cart-product-image" src="${image}" alt="${title}" />
      <h3 class="product-title">${title}</h3>
      <div class="cart-product-info">
        <div class="quantity-selector">
          <button class="quantity-plus">
            <img src="./images/icons & logos/plus.svg" alt="Increase quantity" />
          </button>
          <p class="product-quantity">1</p>
          <button class="quantity-minus">
            <img src="./images/icons & logos/remove.svg" alt="Decrease quantity" />
          </button>
        </div>

        <h4 class="cart-product-price" data-price="${filterPrice(price)}">
          ${filterPrice(
            price
          )} <span class="cart-currency">${filterCurrency()}</span>
        </h4>
        
        <button class="cart-product-delete">
          <img src="./images/icons & logos/delete-icon.svg" alt="Delete product" />
        </button>
      </div>
    </div>
  `;
}

localStorage.setItem("cartListDB", JSON.stringify(cartList));
