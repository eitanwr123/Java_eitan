function CarsByOriginAndMilesperGallon(carsList, origin, milesPerGallon) {
    let matchingCars = []
    //Input Validation
    if (!Array.isArray(carsList) || typeof origin !== "string" || isNaN(milesPerGallon)) {
        console.error("Something went wrong!");
    } else {
        for (let index = 0; index < carsList.length; index++) {
            if (carsList[index].Origin === origin && carsList[index].Miles_per_Gallon === milesPerGallon) {
                matchingCars.push(carsList[index])
            };
        }
    }



    return matchingCars

}

console.log(CarsByOriginAndMilesperGallon(carsForRental, "Europe", 25))

console.log("=====================================================================================================");


function Hp_Avg(carsList) {
    let sum = 0;
    let count = 0;
    let counter_invalids = 0;
    //validation
    if (!Array.isArray(carsList)) {
        console.error("something went wrong");
        return null;
    };
    //count and sum only cars with a valid HP
    for (let index = 0; index < carsList.length; index++) {

        if (!isNaN(carsList[index].Horsepower)) {
            hp = carsList[index].Horsepower;
            sum = sum + hp;
            count += 1;
        }

        else { counter_invalids += 1 };//counting the cars without hp data
    };

    let evg = sum / count; //evg calculation

    return evg
}

console.log(Hp_Avg(carsForSale));
console.log("=====================================================================================================");

function CarsByPropertyAndValue(carsList, property, targetValue) {
    let matchingCars = []
    //Input Validation
    if (!Array.isArray(carsList)) {
        console.error("Something went wrong!");
        return null
    }

    for (let index = 0; index < carsList.length; index++) {
        if (carsList[index][property] === targetValue) {
            matchingCars.push(carsList[index])
        };
    }
    return matchingCars


}




console.log(CarsByPropertyAndValue(carsForSale, "Miles_per_Gallon", 18));
