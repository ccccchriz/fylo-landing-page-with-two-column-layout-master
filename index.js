const testEmail = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const errorEmail = document.getElementsByClassName("info__error")[0];

document.getElementById("info__form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target[0].value;
  if (input == "") return (errorEmail.textContent = "Can't be empty");
  if (!testEmail(input))
    return (errorEmail.textContent = "Please check your email");
  errorEmail.textContent = "";
  event.target[0].value = "";
});

const errorEmail2 = document.getElementsByClassName("access__error")[0];

document.getElementById("access__form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target[0].value;
  if (input == "") return (errorEmail2.textContent = "Can't be empty");
  if (!testEmail(input))
    return (errorEmail2.textContent = "Please check your email");
  errorEmail2.textContent = "";
  event.target[0].value = "";
});
