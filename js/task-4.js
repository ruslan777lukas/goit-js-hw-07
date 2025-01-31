
const registerForm = document.querySelector(".login-form");
function dataBase(event) {
    event.preventDefault();
    const form = event.target;
    let email = form.elements.email.value.trim();
    let password = form.elements.password.value.trim();
 
    if (email === "" || password === "") {
        alert ("All form fields must be filled in");
    }

    const dataValid = {
        "email" : email,
        "password": password,
    }
    console.log(dataValid);
    form.reset();

}
registerForm.addEventListener('submit', dataBase)