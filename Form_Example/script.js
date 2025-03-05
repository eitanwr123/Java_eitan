function init() {
    loadTable()

}
document.getElementById("vatForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // let income = formData.get("income");
    // let vat = formData.get("vat");

    let formData = new FormData(event.target); //Returns an array of key-value pairs: [("name", "Alice"), ("age", "25"), ("city", "New York")]
    let formDataObj = Object.fromEntries(formData.entries()) //convert the array above into an object { "name": "Alice", "age": "25", "city": "New York" }
    formDataObj = addCalc(formDataObj)
    // Retrieve existing data or initialize an empty array
    let dataArray = JSON.parse(localStorage.getItem("formDataArray")) || []
    console.log(dataArray);


    // Add new form data to the array
    dataArray.push(formDataObj)
    console.log(`after pushing ${formDataObj}`);


    // Save updated array back to localStorage
    localStorage.setItem("formDataArray", JSON.stringify(dataArray))


    console.log("Data saved to local storage!");

    loadTable()

});

function addCalc(formDataObj) {
    //add the vat amount to the object
    const vatAmount = ((formDataObj.vat) / 100) * (formDataObj.income - formDataObj.taxDeduction)
    formDataObj["vatAmount"] = vatAmount

    //add the date and time
    const dateTime = getFormattedDateTime()
    console.log(dateTime)
    formDataObj["dateTime"] = dateTime
    return formDataObj
}


function getFormattedDateTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

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

init()