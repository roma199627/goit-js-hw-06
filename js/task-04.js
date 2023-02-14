const counterValue = 0;
const value = document.getElementById('value')
const decrement = document.querySelector(`[data-action="decrement"]`)
const increment = document.querySelector(`[data-action="increment"]`)

  const buttondecrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}
const buttonincrement = () => {
    counterValue += 1;
    value.textContent = counterValue;
}
decrement.addEventListener("click", increment);
increment.addEventListener("click", increment);