const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.querySelector('#ingredients');
console.log(ingredientEl)

let ingredientArr = [];

ingredients.forEach(function(ingredient) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList = 'item';
  return ingredientArr.push(listItem);
})
ingredientEl.append(...ingredientArr);