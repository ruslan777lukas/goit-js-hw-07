let inpName=document.querySelector('#name-input');
let greetyName=document.querySelector('#name-output');

function reName() {
    if (inpName.value=="" || inpName.value==" " || inpName.value=="  " || inpName.value=="   "){
        greetyName.textContent="Anonymous";
    } else {
        greetyName.textContent=(inpName.value).trim();
    }
}
inpName.addEventListener('input', reName);