// ===== DOM ELEMENTS =====
const selectInput = document.getElementById('productCategory');
const productTable = document.getElementById('productTable');
const loader = document.getElementById('loader');

// ===== INITIAL SETUP =====
document.addEventListener('DOMContentLoaded', () => {
  fetchCategories();
});

// ===== EVENTS =====
selectInput.addEventListener('change', () => {
  const category = selectInput.value;
  if (category) {
    fetchProductsByCategory(category);
  } else {
    productTable.innerHTML = '';
  }
});

// ===== FETCH CATEGORIES =====
function fetchCategories() {
  showLoader();
  fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(categories => {
      hideLoader();
      populateCategoryDropdown(categories);
    })
    .catch(handleError);
}

function populateCategoryDropdown(categories) {
  selectInput.innerHTML = '<option value="">-- Select --</option>';
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    selectInput.appendChild(option);
  });
}

// ===== FETCH PRODUCTS =====
function fetchProductsByCategory(category) {
  showLoader();
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => {
      hideLoader();
      displayProducts(data.products);
    })
    .catch(handleError);
}

// ===== DISPLAY PRODUCTS =====
function displayProducts(products) {
  productTable.innerHTML = '';

  const header = document.createElement('tr');
  header.innerHTML = '<th>Title</th><th>Price</th><th>Brand</th>';
  productTable.appendChild(header);

  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.title}</td>
      <td>$${product.price}</td>
      <td>${product.brand}</td>
    `;
    productTable.appendChild(row);
  });
}

// ===== HELPERS =====
function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function handleError(error) {
  hideLoader();
  productTable.innerHTML = `<tr><td colspan="3">❌ Error: ${error.message}</td></tr>`;
}
