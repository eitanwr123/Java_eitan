


function drawProducts() {
    const CardsList = document.getElementById("products-container")

    for (let index = 0; index < products.products.length; index++) {
        const thisProduct = products.products[index];
        const productCard = createProductCard(thisProduct)
        CardsList.append(productCard)








    }
}



function createProductCard(product) {
    // Create a div for the product card
    const card = document.createElement("div");
    card.classList.add("product-card"); // Add CSS class for styling

    // Set the card's inner HTML
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="img">
        <h3>${product.title}</h3>
        <p>ID: ${product.id}</p>
        <p>${product.description}</p>
        <p class="price">Price: $${product.price}</p>
    `;

    return card; // Return the complete card
}


// drawProducts(products)