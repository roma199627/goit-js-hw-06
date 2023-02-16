const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

    const list = document.querySelector("#ingredients");
    const listing = ingredients.map((ingredient) => {
      const listing = document.createElement('li');
      listing.textContent = ingredient;
      listing.classList.add("item");
      return listing;
    });
    list.append(...listing);
    console.log(ingredients);