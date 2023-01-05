// Task 28

let trueLogin = "admin";
let truePassword = "admin";

let _isLoggedIn = "isLoggedIn";

function CreateSignInForm() {
  let signInForm = document.createElement("form");
  let loginInput = document.createElement("input");
  let passwordInput = document.createElement("input");
  let submitButton = document.createElement("button");

  loginInput.type = "text";
  loginInput.placeholder = "Please enter your login";
  passwordInput.type = "text";
  passwordInput.placeholder = "Please enter your password";
  submitButton.textContent = "Log In";
  submitButton.type = "button";

  document.body.append(signInForm);
  signInForm.append(loginInput);
  signInForm.append(passwordInput);
  signInForm.append(submitButton);

  submitButton.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      if (
        loginInput.value === trueLogin &&
        passwordInput.value === truePassword
      ) {
        signInForm.remove();
        sessionStorage.setItem(_isLoggedIn, "true");
        CreateWelcomeForm();
      } else {
        console.log("asda");
        alert("Your login or password is incorrect");
        loginInput.style = "border-color:red";
        passwordInput.style = "border-color:red";
      }
    }
  });
}

function CreateWelcomeForm() {
  let welcomeText = document.createElement("p");
  welcomeText.textContent = "Welcome " + trueLogin;
  let signOutButton = document.createElement("button");
  signOutButton.textContent = "sign out";

  document.body.append(welcomeText);
  document.body.append(signOutButton);

  signOutButton.addEventListener("click", (e) => {
    welcomeText.remove();
    signOutButton.remove();
    sessionStorage.setItem(_isLoggedIn, "false");
    CreateSignInForm();
  });
}

if (sessionStorage.getItem(_isLoggedIn) === "true") {
  CreateWelcomeForm();
} else {
  CreateSignInForm();
}
