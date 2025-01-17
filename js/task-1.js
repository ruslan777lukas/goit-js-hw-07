const menuItemsByClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItemsByClass.length}`);
const ulValue = document.querySelectorAll("ul");
menuItemsByClass.forEach((x) => console.log(`Category: ${x.firstElementChild.textContent}
Elements: ${x.lastElementChild.childElementCount}`))