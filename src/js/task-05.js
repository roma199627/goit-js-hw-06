// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение 
// в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const text = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
text.output = function ()   {
    if ('' === text  ){ 
      input =  'Please enter your name';
    }
 else {
  input = ' Anonymous';
}
 }

