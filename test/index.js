function init() {
    loadTable()

}

//form
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


function loadTable() {

    const dataArray = JSON.parse(localStorage.getItem("formDataArray"))
    if (!Array.isArray(dataArray)) return; // validate that arrayOfCars is array
    if (dataArray.length === 0) return; // validate that there is data inside the array
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
            for (let j = 0; j < headers.length; j++) {
                const tdValue = formObj[headers[j]];
                let td = document.createElement("td")
                td.innerHTML += tdValue
                tr.append(td)

            }
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

function deleteProduct(id) {

}

function getTD(value, defaultValue = "", type = "td") {
    const currentTD = document.createElement(type)
    currentTD.innerHTML = value || defaultValue
    return currentTD
}


init()




