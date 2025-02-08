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
//Validation

function validateCarProperty(property, value) {
    // Define the expected data types for each property
    const carSchema = {
        Name: "string",
        Miles_per_Gallon: "number",
        Cylinders: "number",
        Displacement: "number",
        Horsepower: "number",
        Weight_in_lbs: "number",
        Acceleration: "number",
        Year: "string", // Keeping Year as a string because it has a date format
        Origin: "string"
    };

    // Check if the property exists in the schema
    if (!(property in carSchema)) {
        throw new Error(`Invalid property name: '${property}'.`);
    }

    // Get the expected type for this property
    const expectedType = carSchema[property];

    // Validate the value type
    if (typeof value !== expectedType || (expectedType === "number" && isNaN(value))) {
        throw new Error(`Invalid value for '${property}'. Expected a ${expectedType}, but got ${typeof value}.`);
    }

    return true; // Validation passed
}


//Took the code from ex 1 and made it generic
//missing correct validation and inputs

function CarsByPropertyAndValue(carsList, property, targetValue) {
    let matchingCars = []
    //Input Validation
    if (!Array.isArray(carsList)) {
        console.error("Something went wrong!");
        return null
    }
    validateCarProperty(property, targetValue)


    for (let index = 0; index < carsList.length; index++) {
        if (carsList[index][property] === targetValue) {
            matchingCars.push(carsList[index])
        };
    }
    return matchingCars


}




console.log(CarsByPropertyAndValue(carsForSale, "Miles_per_Gallon", 18));
