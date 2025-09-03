const signupPage = document.querySelector(".newsletter-signup");
const successMessage = document.querySelector(".newsletter-success");
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const emailErrorMessageElement = document.querySelector(".error-message");
const dismissBtn = document.querySelector(".newsletter-success__button");

signupForm.addEventListener("submit", handleSignupFormSubmit);

function handleSignupFormSubmit(e) {
  // prevent default browser behaviour
  e.preventDefault();

  const formDataEntries = new FormData(signupForm).entries();
  const { email } = Object.fromEntries(formDataEntries);

  const emailErrorMessage = validateEmail(email);

  if (emailErrorMessage) {
    // show email error message to user
    emailErrorMessageElement.innerText = emailErrorMessage;
    emailInput.style.border = "1px solid var(--color-primary)";
    emailInput.style.backgroundColor = "#ffe6e6";
    emailInput.style.color = "var(--color-primary)";
  } else {
    emailErrorMessageElement.innerText = "";
    signupPage.classList.add("hidden");
    successMessage.classList.remove("hidden");
  }
}

function validateEmail(email) {
  if (!email) return "email required";

  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return "valid email required";
  }

  return "";
}

dismissBtn.addEventListener("click", () => {
  document.location.reload();
});
