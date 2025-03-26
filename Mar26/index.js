const API_ROOT_URL = "https://dummyjson.com/products";

async function init() {
  const htmlOptions = document.getElementById("categorySelect");
  htmlOptions.addEventListener("change", async () => {
    const productsByCategorie = await getData(`category/${htmlOptions.value
    }`);
    console.log("productsByCategorie", productsByCategorie);
  });
  const productContainerHtml = document.getElementById("productContainer");

  const categoriesData = await getData("categories");
  //   const categories = categoriesData.name;
  console.log(categoriesData);

  //////start with fetching all the categories and draw them inside Select Option
  categoriesData.forEach((categorie) => {
    const opt = document.createElement("option");
    opt.innerHTML = `<option value="${categorie.name}">${categorie.name}</option>`;
    htmlOptions.append(opt);
  });
}

async function getData(endpoint) {
  const url = `${API_ROOT_URL}/${endpoint}`;
  try {
    const response = await fetch(url);

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

init();
