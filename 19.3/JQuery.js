// # Ex - 1
// 1. write a function which return a promise
// 2. the function name `getCars`
// 3. the function recieve price & return after 5 seconds a list of cars ["volvo","mazda","subaru","bmw"]
// 4. in case the function not recieved price - reject the process with error - missing price

function getCars(price) {
    return new Promise((resolve, reject) => {
        if (!price) {
            reject("missing price")

        }
        setTimeout(() => {
            resolve(["volvo", "mazda", "subaru", "bmw"])

        }, 5000);

    })

}

getCars(4).then(r => console.log(r)).catch(r => console.log(r))

function callGetProducts() {
    fetch('https://dummyjson.com/products')

}
