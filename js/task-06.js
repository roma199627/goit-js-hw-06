
const input = document.querySelector("#validation-input");
input.addEventListener("blur", onBlur);

function  onBlur(event) {
    const datalength = event.currentTarget;
    const indatalength = Number(datalength.dataset.length);
    if (datalength.value.length === indatalength) {
        datalength.classList.remove('invalid');
        datalength.classList.add('valid');
    }
    else{
        datalength.classList.remove('valid');
        datalength.classList.add('invalid');  
    }
}








