const API_URL = "https://dummyjson.com/products";
const LIMIT = 3;
let skip = 0;
let total = 0;

const productContainer = document.getElementById("productContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

async function fetchProducts(skipValue = 0) {
  try {
    const response = await fetch(`${API_URL}?limit=${LIMIT}&skip=${skipValue}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    total = data.total;
    renderProducts(data.products);
    toggleButtons();
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }
}

function renderProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${product.title}</h3><p>${product.description}</p>`;
    productContainer.appendChild(div);
  });
}

function toggleButtons() {
  prevBtn.disabled = skip === 0;
  nextBtn.disabled = skip + LIMIT >= total;
}

prevBtn.addEventListener("click", () => {
  if (skip >= LIMIT) {
    skip -= LIMIT;
    fetchProducts(skip);
  }
});

nextBtn.addEventListener("click", () => {
  if (skip + LIMIT < total) {
    skip += LIMIT;
    fetchProducts(skip);
  }
});

fetchProducts();
