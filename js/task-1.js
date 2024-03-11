const categoriesList = document.querySelector("#categories");
const categoriesNumber = categoriesList.children.length;
console.log(`Number of categories: ${categoriesNumber}`);

const categoriesListItem = document.querySelectorAll(".item");

categoriesListItem.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});



