
//1
function validate_num(n) {
    if (typeof n !== "number" || isNaN(n)) {
        throw new Error("Invalid input: Expected a number.");
    }

}

function Reverse_Num(num) {
    //i want to validate that i get a number
    if (typeof num !== "number" || isNaN(num)) {
        throw new Error("Invalid input: Expected a number.");
    }


    let tempDig = 1
    let revNum = num % 10
    num = parseInt(num / 10)


    while (num > 0) {
        tempDig = num % 10
        revNum = Number(revNum.toString() + tempDig.toString())
        num = parseInt(num / 10)
    }
    console.log(revNum);


}
Reverse_Num(1234)
console.log("////////////////////////////////////////////////////////////////////");





function between(a, b) {
    validate_num(a);
    validate_num(b);
    if (a < b) {
        while (a <= b) {
            console.log(a);
            a += 1
        }

    } else {
        while (a >= b) {
            console.log(a);
            a -= 1


        }
    }

}
between(3, 1)

//3
console.log("////////////////////////////////////////////////////////////////////");
function between_small_to_big(min, max) {
    validate_num(min);
    validate_num(max);


    let temp = 0;

    if (min > max) {
        temp = max;
        max = min;
        min = temp;
    }

    while (min <= max) {
        console.log(min);
        min += 1;
    }

}
between_small_to_big(1, 3)
console.log("////////////////////////////////////////////////////////////////////");


function Temperatures_ex(temperatures) {
    let july_2000 = temperatures.slice(0, 30);
    let july_2001 = temperatures.slice(30);

    let sum_2000 = 0;
    for (let i = 0; i < july_2000.length; i++) {
        sum_2000 += july_2000[i];
    }
    let avg_2000 = sum_2000 / july_2000.length; //2000s avg

    console.log(`The average temperature for July 2000 is: ${avg_2000.toFixed(2)}`);

    let hotDays_2001 = [];
    for (let i = 0; i < july_2001.length; i++) {
        if (july_2001[i] > avg_2000) {
            hotDays_2001.push(i + 1);
        }
    }

    console.log(`Days in July 2001 with temperatures higher than the July 2000 average: ${hotDays_2001.join(", ")}`);
}


let temperatures = [
    28, 29, 30, 31, 32, 30, 28, 27, 26, 25, 30, 32, 33, 31, 29, 27, 26, 28, 30, 31, 32, 33, 34, 30, 29, 28, 27, 26, 25, 24,
    29, 30, 32, 34, 35, 33, 31, 30, 28, 27, 32, 34, 36, 35, 33, 31, 30, 29, 28, 27, 34, 36, 38, 37, 35, 34, 33, 32, 31, 30
];

Temperatures_ex(temperatures);
