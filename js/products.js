// 4. Priprema JSON niza proizvoda
// Svaki proizvod ima tražena svojstva: id, name, price, currency, category, image i inStock
const products = [
  {
    id: 1,
    name: "City Break in Paris",
    price: 120,
    currency: "€",
    category: "City Tours",
    image: "images/01.jpg",
    inStock: true
  },
  {
    id: 2,
    name: "London Weekend Escape",
    price: 110,
    currency: "€",
    category: "Weekend Tours",
    image: "images/02.jpg",
    inStock: true
  },
  {
    id: 3,
    name: "Rome Historical Tour",
    price: 130,
    currency: "€",
    category: "Historical Tours",
    image: "images/03.jpg",
    inStock: true
  },
  {
    id: 4,
    name: "Barcelona City Adventure",
    price: 100,
    currency: "€",
    category: "City Tours",
    image: "images/04.jpg",
    inStock: true
  },
  {
    id: 5,
    name: "Amsterdam Canal Tour",
    price: 115,
    currency: "€",
    category: "Canal Tours",
    image: "images/05.jpg",
    inStock: false
  },
  {
    id: 6,
    name: "Prague Cultural Walk",
    price: 90,
    currency: "€",
    category: "Walking Tours",
    image: "images/06.jpg",
    inStock: true
  },
  {
    id: 7,
    name: "Berlin City Break",
    price: 105,
    currency: "€",
    category: "City Tours",
    image: "images/07.jpg",
    inStock: true
  },
  {
    id: 8,
    name: "Vienna Classical Tour",
    price: 125,
    currency: "€",
    category: "Classical Tours",
    image: "images/08.jpg",
    inStock: false
  },
  {
    id: 9,
    name: "Lisbon Old Town Walk",
    price: 95,
    currency: "€",
    category: "Walking Tours",
    image: "images/09.jpg",
    inStock: true
  },
  {
    id: 10,
    name: "Budapest Thermal Baths",
    price: 115,
    currency: "€",
    category: "Wellness Tours",
    image: "images/10.jpg",
    inStock: false
  },
  {
    id: 11,
    name: "Amsterdam Flower Markets",
    price: 110,
    currency: "€",
    category: "Market Tours",
    image: "images/11.jpg",
    inStock: true
  },
];

// 1. Priprema strukture projekta i fajlova
// 2. Povezivanje fajlova je urađeno u HTML-u, a ovdje selektujemo kontejner #products
// 3. Slike se učitavaju iz images foldera preko putanje navedene u svakom objektu
const productsContainer = document.getElementById("products");

// 5. Dinamičko prikazivanje proizvoda pomoću JavaScripta
// Koristimo forEach() da prođemo kroz JSON niz i napravimo kartice za proizvode
products.forEach((product) => {
  // 6. Prikaz dostupnih proizvoda
  // Ako proizvod nije dostupan (inStock: false), ne prikazujemo ga na stranici
  if (!product.inStock || !productsContainer) return;

  // Kreiranje product card elementa
  const card = document.createElement("div");
  card.className = "product-card";

  // 7. Dugme „Add to Cart” i data atributi
  // Data-id je dodat i na karticu i na dugme, što je dozvoljeno u zadatku
  card.dataset.id = product.id;

  // Kreiranje slike proizvoda
  const img = document.createElement("img");
  img.className = "product-img";
  img.src = product.image;
  img.alt = product.name;

  // Kreiranje naziva proizvoda
  const title = document.createElement("p");
  title.className = "product-title";
  title.textContent = product.name;

  // Kreiranje reda za cijenu
  const priceRow = document.createElement("div");
  priceRow.className = "price-row";

  // Kreiranje prikaza cijene sa valutom
  const price = document.createElement("span");
  price.className = "price";
  price.textContent = `${product.currency}${product.price}`;

  // Kreiranje dugmeta Add to Cart
  const button = document.createElement("button");
  button.className = "btn add-to-cart";
  button.dataset.id = product.id;
  button.textContent = "Add to Cart";

  // Spajanje elemenata unutar kartice proizvoda
  priceRow.appendChild(price);
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(priceRow);
  card.appendChild(button);

  // Ubacivanje kartice u sekciju #products
  productsContainer.appendChild(card);
});

// 8. Dodavanje odgovarajućih CSS klasa
// CSS klase su već definisane u style.css i služe za grid raspored, razmake, slike i dugme