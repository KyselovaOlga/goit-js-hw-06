const loginForm = document.querySelector('.login-form');
function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    console.log(formEl);
    const email = formEl.email.value;
    const password = formEl.password.value;
    const formData = new FormData(event.currentTarget);
    console.log(formData)

   
    if (email.value === "" || password.value === "") {
        alert("всі поля повинні бути заповнені.")
    } else {
        alert('Форма заповнена');
        console.log('the form has email ${mail} and password of ${password}');
    }

}

loginForm.addEventListener('submit', onFormSubmit);