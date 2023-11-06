const testEmail = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const errorEmail = document.getElementsByClassName("info__error")[0];
const inputEmail = document.getElementById("email");

document.getElementById("info__form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target[0].value;
  if (input == "")
    return (
      (errorEmail.textContent = "Can't be empty") &&
      inputEmail.classList.add("error-border")
    );
  if (!testEmail(input))
    return (
      (errorEmail.textContent = "Please check your email") &&
      inputEmail.classList.add("error-border")
    );
  inputEmail.classList.remove("error-border");
  errorEmail.textContent = "";
  event.target[0].value = "";
});

const errorEmail2 = document.getElementsByClassName("access__error")[0];
const inputEmail2 = document.getElementById("email2");

document.getElementById("access__form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target[0].value;
  if (input == "")
    return (
      (errorEmail2.textContent = "Can't be empty") &&
      inputEmail2.classList.add("error-border")
    );
  if (!testEmail(input))
    return (
      (errorEmail2.textContent = "Please check your email") &&
      inputEmail2.classList.add("error-border")
    );
  inputEmail2.classList.remove("error-border");
  errorEmail2.textContent = "";
  event.target[0].value = "";
});
