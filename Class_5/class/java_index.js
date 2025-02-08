function Add_Km(kmAdded) {
    //validation
    let added_km = Number(prompt("Enter km"))

    Car.km = Car.km + added_km

}
const Car = {
    typ: "BMW",
    engine: "E55",
    color: "blue",
    doors: 2,
    model: "335i",
    year: "2008",
    km: 0
}
Add_Km()
console.log(Car.km);
Add_Km()

console.log(Car.km);

console.log("=====================================================================================================");

function product_creator() {
    let productName = prompt("Enter the product name")
    let producPrice = Number(prompt("Enter price"))
    let productId = prompt("Enter id")
    const Product = {
        Name: productName,
        price: producPrice,
        id: productId,
        createdAt: new Date().toString()

    }
    console.log(Product);



}
product_creator()