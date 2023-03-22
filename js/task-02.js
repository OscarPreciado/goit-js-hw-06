const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const selector = document.querySelector('#ingredients');
const arrayIngredientes = ingredients.map(element => {
  const elemento = document.createElement('li');
  elemento.classList.add('item')
  elemento.textContent = element;

  return elemento;
})

selector.append(...arrayIngredientes)