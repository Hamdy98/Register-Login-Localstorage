let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");
let loginBtn = document.getElementById("login-btn");


let myAlertAllRequired = document.getElementById("my-alert-required");
let myAlertSuccess = document.getElementById("my-alert-success");
let myAlertIncorrectPassOrEmail = document.getElementById("my-alert-incorrect");

let userName; 

loginBtn.addEventListener("click", login);
function login() {
  for(let i = 0; i < JSON.parse(localStorage.getItem("userData")).length; i++) {
    if(emailInput.value == JSON.parse(localStorage.getItem("userData"))[i].email
        && passwordInput.value == JSON.parse(localStorage.getItem("userData"))[i].password) 
    {
      myAlertAllRequired.style.display = "none";
      myAlertIncorrectPassOrEmail.style.display = "none";
      myAlertSuccess.style.display = "block";

      console.log(JSON.parse(localStorage.getItem("userData"))[i].name);
      console.log(JSON.parse(localStorage.getItem("userData"))[i]);
      let userName = JSON.parse(localStorage.getItem("userData"))[i].name;
      localStorage.setItem("UserName", userName);
      window.location.href = "../html/home.html";
    } else {
      if(emailInput.value == "" || passwordInput.value == "") {
        myAlertAllRequired.style.display = "block";
        myAlertSuccess.style.display = "none";
        myAlertIncorrectPassOrEmail.style.display = "none";
      } else {
        myAlertAllRequired.style.display = "none";
        myAlertSuccess.style.display = "none";
        myAlertIncorrectPassOrEmail.style.display = "block";
      }    
    }
  }
}