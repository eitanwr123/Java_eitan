let num = Number(prompt("insert num"))
let sum = 0
while (num > 0) {
    let temp = num % 10
    sum = sum + temp
    num = parseInt(num / 10)
}
console.log(sum);


function getDividedNumbers(num) {
    for (let index = 0; index < 500; index++) {
        if (index % num === 0) {
            console.log(index);

        }
    }

}


