// 1. Constructor Function
function Company(name, employees, address) {
    this.name = name;
    this.employees = employees;
    this.address = address;
    
    this.printDetails = function() {
        console.log(`${this.name} - ${this.address}`);
    };
}
const google = new Company("Google", 300, "Tel Aviv");
google.printDetails(); // Google - Tel Aviv


// 2. Class-Based Function
class CompanyClass {
    constructor(name, employees, address) {
        this.name = name;
        this.employees = employees;
        this.address = address;
    }
    printDetails() {
        console.log(`${this.name} - ${this.address}`);
    }
}
const amazon = new CompanyClass("Amazon", 6000, "New York");
amazon.printDetails(); // Amazon - New York


// 3. Object Methods
const company = {
    name: "IBM",
    employees: 500,
    address: "Givatayim",
    
    printDetails() {
        console.log(`${this.name} - ${this.address}`);
    }
};
company.printDetails();


// 4. Array Functions
const companies = [
    { name: "Google", employees: 300 },
    { name: "Amazon", employees: 6000 },
    { name: "IBM", employees: 500 }
];

// map: Transform data
const companyNames = companies.map(c => c.name);
console.log(companyNames); // ["Google", "Amazon", "IBM"]

// filter: Filter data
const bigCompanies = companies.filter(c => c.employees > 1000);
console.log(bigCompanies);

// find: Find first matching element
const amazonCompany = companies.find(c => c.name === "Amazon");
console.log(amazonCompany);


// 5. Event Handling Functions
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button Clicked!");
});


// 6. Local Storage Functions
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
saveToLocalStorage("company", { name: "Tesla", employees: 10000 });
console.log(getFromLocalStorage("company"));


// 7. Dynamic Card/Table Generator
function createCard(data) {
    const card = document.createElement("div");
    card.innerHTML = `
        <h2>${data.name}</h2>
        <p>Employees: ${data.employees}</p>
        <p>Address: ${data.address}</p>
    `;
    document.body.appendChild(card);
}
createCard({ name: "Tesla", employees: 10000, address: "California" });


// 8. Table Drawing Function
/**
 * Initializes the table by loading existing data from localStorage.
 */
function init() {
    loadTable();
}

document.getElementById("vatForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let formDataObj = Object.fromEntries(formData.entries());
    formDataObj = addCalc(formDataObj);

    let dataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];
    dataArray.push(formDataObj);
    localStorage.setItem("formDataArray", JSON.stringify(dataArray));
    loadTable();
});

/**
 * Adds VAT amount and formatted date/time to the form data object.
 */
function addCalc(formDataObj) {
    const vatAmount = ((formDataObj.vat) / 100) * (formDataObj.income - formDataObj.taxDeduction);
    formDataObj["vatAmount"] = vatAmount;
    formDataObj["dateTime"] = getFormattedDateTime();
    return formDataObj;
}

/**
 * Returns the current date and time in DD/MM/YYYY, HH:MM format.
 */
function getFormattedDateTime() {
    const now = new Date();
    return `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()}, ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

/**
 * Loads data from localStorage and dynamically builds an HTML table.
 */
function loadTable() {
    cleanTable();
    const dataArray = JSON.parse(localStorage.getItem("formDataArray"));
    if (!Array.isArray(dataArray) || dataArray.length === 0) return;
    const headers = Object.keys(dataArray[0]);
    const theadTr = document.getElementById("tableHeaders");
    if (theadTr) {
        headers.forEach(header => {
            const th = document.createElement("th");
            th.innerText = header;
            theadTr.append(th);
        });
    }
    
    const Tbody = document.getElementById("tableBody");
    if (Tbody) {
        dataArray.forEach(formObj => {
            const tr = document.createElement("tr");
            headers.forEach(header => {
                const td = document.createElement("td");
                td.textContent = formObj[header] ?? "N/A"; // Ensures no undefined values
                tr.append(td);
            });
            Tbody.append(tr);
        });
    }
}

/**
 * Clears the table before reloading new data.
 */
function cleanTable() {
    document.getElementById("tableBody").innerHTML = "";
    document.getElementById("tableHeaders").innerHTML = "";
}

// Initialize the table on page load.
init();
