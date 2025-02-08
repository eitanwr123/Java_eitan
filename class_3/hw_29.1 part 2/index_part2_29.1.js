console.log("Find the Most Expensive Product");

let count = 0;
let mostExpensiveProduct = "";
let highestPrice = 0;
const MAX_PRODUCTS = 5

while (count < MAX_PRODUCTS) {
    let productName = prompt(`Enter the name of product ${count + 1}:`);
    let productPrice = Number(prompt(`Enter the price of ${productName}:`));

    if (isNaN(productPrice) || productPrice <= 0) {
        console.log("Invalid price! Please enter a valid non-negative number.");
        // continue;
        throw new Error("Somthing went wrong");

    }


    if (productPrice > highestPrice) {
        highestPrice = productPrice;
        mostExpensiveProduct = productName;
    }

    count++;
}

console.log(`The most expensive product is: ${mostExpensiveProduct} with a price of ${highestPrice}`);
