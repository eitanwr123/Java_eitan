// console.log("Eitan Werthimer Shoham")

// let firstname = "Eitan"
// let lastName = "Werthimer"
// let age = 23

// fullName = `${firstname} ${lastName}...`
// console.log(fullName)

// let email = "eitanwr@gmail.com"
// let job = "analyst"
// let isWorking = true
// let hasACar = true
// let eitanData = `${firstname} ${lastName} ${email} ${job} ${isWorking} ${hasACar}`
// console.log(eitanData)
// console.log();

// if (isWorking === true) {
//     console.log("working...");


// } else {
//     console.log("not working...")
// }

// //if the car is type 'mazda' and color 'red' and model 'cx5' - print "Yes i found my Car!"
// //otherwise print "I dont need this Car!"g

// console.log("Ex 3")

// const carType = prompt("car type")
// const carColor = prompt("color")
// const carModel = prompt("model")

// if (carType === "mazda" && carColor === "red" && carModel === "cx5") {
//     console.log("Yes i found my Car!");


// } else {
//     console.log("I dont need this Car!");
// }



console.log("page 15 ex 1");

let num1 = Number(prompt("Insert num1"));
let num2 = Number(prompt("Insert num2"));
let num3 = Number(prompt("Insert num3"));

let numsAvg = (num1 + num2 + num3) / 3

console.log(numsAvg);



console.log("page 15 ex 2");

let width = Number(prompt("enter width"))
let length = Number(prompt("enter length"))

let Area = width * length
let Perimeter = (width + length) * 2

console.log(`The area is ${Area} and the length is ${Perimeter}`);


console.log("page 15 ex 3");

let Diameter = Number(prompt("enter Diameter"))
let Depth = Number(prompt("enter Depth"))
let r = Diameter / 2
let area = 3.14 * (r ** 2)
let Capacity = area * Depth

console.log(`The capacity is ${Capacity}`);




console.log("page 19 ex 6");

let empName = prompt("Employee's name");
let salary = Number(prompt("Enter current salary"));
let updatedSalary;

if (1.1 * salary > 6000) {
    updatedSalary = 1.05 * salary;
} else {
    updatedSalary = 1.1 * salary;
}

console.log(`${empName}'s salary was updated to ${updatedSalary}`);



console.log("page 27 ex 2");

num1 = Number(prompt("Enter first integer"));
num2 = Number(prompt("Enter second integer"));

let start = Math.min(num1, num2);
let end = Math.max(num1, num2);

console.log(`All integers between ${start} and ${end} (inclusive):`);

let i = start;
while (i <= end) {
    console.log(i);
    i++;
}

console.log("page 27 ex 3");

end = Number(prompt("Enter an integer"));

console.log(`All the even numbers between 0 and ${end} (inclusive):`);

i = 0;
while (i <= end) {
    console.log(i);
    i += 2;
}

console.log("page 27 ex 5");
let sum = 0


while (true) {
    let input = prompt("Enter a non-negative number (or -99 to stop):");

    // Check if input is a number
    let num = Number(input);
    if (isNaN(num)) {
        console.log("Invalid input! Please enter a valid number.");
        continue; // Ask for input again
    }

    // Check if it's the sentinel value
    if (num === -99) {
        break; // Exit the loop
    }

    // Ensure it's non-negative
    if (num < 0) {
        console.log("Invalid input! Please enter a non-negative number.");
        continue;
    }

    sum += num; // Add valid input to the sum
}

console.log(`The total sum is: ${sum}`);



console.log("page 27 ex 7");
sum = 0
let count = 0

while (true) {
    let input = prompt("Enter a non-negative number (or -99 to stop):");

    // Check if input is a number
    let num = Number(input);
    if (isNaN(num)) {
        console.log("Invalid input! Please enter a valid number.");
        continue; // Ask for input again
    }

    if (num === 0) {
        break; // Exit the loop
    }

    // Ensure it's non-negative
    if (num < 0) {
        console.log("Invalid input! Please enter a non-negative number.");
        continue;
    }

    sum += num; // Add valid input to the sum
    count += 1
}
numsAvg = sum / count
console.log(`The avg is: ${numsAvg}`);

