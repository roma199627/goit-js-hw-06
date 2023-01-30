const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredient = document.getElementById("ingredients")

const liElem = document.createElement("li")

ingredient.forEach((ingredient) => {
  const liElem = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  document.querySelector("#ingredient").prepend(item);
});

