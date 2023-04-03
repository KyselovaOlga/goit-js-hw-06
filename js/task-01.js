const listItem = document.querySelectorAll(".item")

listItem.forEach(element => {
    console.log(element.firstElementChild.textContent)
    console.log(element.lastElementChild.children.length)
});
console.log('Number of categories: ${listItem.length}');