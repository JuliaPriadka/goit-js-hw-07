const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const formEmail = event.target.elements.email.value.trim();
  const formPassword = event.target.elements.password.value.trim();
  if (formEmail === "" || formPassword === "") {
    alert("All form fields must be filled in");
    return;
    }
    
  const message = {
    email: formEmail,
    password: formPassword,
  };
  event.target.reset();
    console.log(message);
}
