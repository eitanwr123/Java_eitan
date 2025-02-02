console.log("Eitan Werthimer Shoham")

let firstname = "Eitan"
let lastName = "Werthimer"
let age = 23

fullName = `${firstname} ${lastName}...`
console.log(fullName)

let email = "eitanwr@gmail.com"
let job = "analyst"
let isWorking = true
let hasACar = true
let eitanData = `${firstname} ${lastName} ${email} ${job} ${isWorking} ${hasACar}`
console.log(eitanData)
console.log();

if (isWorking === true) {
    console.log("working...");


} else {
    console.log("not working...")
}

//if the car is type 'mazda' and color 'red' and model 'cx5' - print "Yes i found my Car!"
//otherwise print "I dont need this Car!"g

console.log("Ex 3")

const carType = prompt("car type")
const carColor = prompt("color")
const carModel = prompt("model")

if (carType === "mazda" && carColor === "red" && carModel === "cx5") {
    console.log("Yes i found my Car!");


} else {
    console.log("I dont need this Car!");
}

