

const text = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
text.output = function ()   {
    if ( text.value === ' '  ){ 
      input =  'Please enter your name';
    }
 else {
  input = ' Anonymous';
}
 }
 const nameInput = document.querySelector("#name-input");
 const nameOutput = document.querySelector("#name-output");
 const anonymousValue = 'Anonymous';
 nameInput.addEventListener("input", (event) => {
     if (event.currentTarget.value) {
         nameOutput.textContent = event.currentTarget.value;
     } else {
         nameOutput.textContent = anonymousValue;
     }
 });