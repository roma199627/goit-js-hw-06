
const Input = document.getElementById('validation-input');

const datalength = Input.getAttribute('data-length');
const indatalength = parseInt(datalength, 10);
Input.oninput = function () {
    if (Input === indatalength) {
        Input.classList.remove("invalid");
        Input.classList.add("valid");
       
    }
    
        if ( datalength === 0) {
            Input.classList.remove("invalid");  
            Input.classList.remove("valid");
        }
       
    
        if (Input !== indatalength && Input !== 0) {
            Input.classList.add("invalid");
              }
    
};







