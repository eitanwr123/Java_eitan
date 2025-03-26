function init() {
    loadTable()

}

//form functionality
document.getElementById("productsForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission



    let formData = new FormData(event.target); //Returns an array of key-value pairs: [("name", "Alice"), ("age", "25"), ("city", "New York")]
    let formDataObj = Object.fromEntries(formData.entries()) //convert the array above into an object { "name": "Alice", "age": "25", "city": "New York" }

    // Retrieve existing data or initialize an empty array
    let dataArray = JSON.parse(localStorage.getItem("formDataArray")) || []
    console.log(dataArray);


    // Add new form data to the array
    dataArray.push(formDataObj)
    console.log(`after pushing ${dataArray}`); //checking that the new data was added


    // Save updated array back to localStorage
    localStorage.setItem("formDataArray", JSON.stringify(dataArray))

    console.log("Data saved to local storage!");

    document.getElementById("productsForm").reset();


    loadTable()

});

//loading the table
function loadTable() {

    const dataArray = JSON.parse(localStorage.getItem("formDataArray"))
    if (!Array.isArray(dataArray)) return; // validate that arrayOfCars is array
    if (dataArray.length === 0) return cleanTable(); // validate that there is data inside the array
    cleanTable()
    const headers = Object.keys(dataArray[0]) //extract an array with all the keys
    console.log(headers);
    const theadTr = document.getElementById("tableHeaders")
    if (theadTr) {
        for (let index = 0; index < headers.length; index++) {
            const th = document.createElement("th")
            th.innerText = headers[index]
            theadTr.append(th)
        }
        theadTr.append(getTD("Actions", "", "th"))


    }

    //create the tr and td
    const Tbody = document.getElementById("tableBody")
    if (Tbody) {
        for (let i = 0; i < dataArray.length; i++) {
            const formObj = dataArray[i];
            const tr = document.createElement("tr")
            tr.id = `${formObj.productName}`
            for (let j = 0; j < headers.length; j++) {
                const tdValue = formObj[headers[j]];
                let td = document.createElement("td")
                td.innerHTML += tdValue
                tr.append(td)
            }
            const tdButton = getTdButton()
            tr.append(tdButton)
            Tbody.append(tr)
        }


    }
}

function cleanTable() {
    const Tbody = document.getElementById("tableBody")
    Tbody.innerHTML = ""
    const theadTr = document.getElementById("tableHeaders")
    theadTr.innerHTML = ""




}

//delete product from local storage
function deleteProduct(id) {
    let dataArray = JSON.parse(localStorage.getItem("formDataArray"))
    dataArray = dataArray.filter((product) => {
        return product.productName !== id;
    });

    console.log(dataArray)
    localStorage.setItem("formDataArray", JSON.stringify(dataArray))
    loadTable()



}

//this function is taken from the "cars-app" that we did in class
function getTdButton() {
    const button = document.createElement("button")
    button.classList.add("btn", "btn-danger")

    const icon = `<i class="bi bi-trash3"></i>`
    button.innerHTML = icon

    button.onclick = function () {
        // console.log(this.parentElement.parentElement.remove())
        deleteProduct(this.parentElement.parentElement.id)
    }
    const tdButton = document.createElement("td")
    tdButton.append(button)
    return tdButton
}

//create a td/th and enter the value into its content,this function was taken from "cars-app" that we did in class
function getTD(value, defaultValue = "", type = "td") {
    const currentTD = document.createElement(type)
    currentTD.innerHTML = value || defaultValue
    return currentTD
}


init()



//action items- fix it so it will show the img , work on styling and validation
