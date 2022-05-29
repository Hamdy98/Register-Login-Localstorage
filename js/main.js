let nameFromSignin = document.getElementById("name-from-signin");
let emailFromSignin = document.getElementById("email-from-signin");
let passwordFromSignin = document.getElementById("password-from-signin");
let signupButton = document.getElementById("signup-button");

let alertFaild = document.getElementById("my-alert-faild");
let alertSuccess = document.getElementById("my-alert-success");
let alertAlreadyExisit = document.getElementById("my-alert-already");

let userArray;
let notExist;

if(localStorage.getItem("userData") != null) {
  userArray = JSON.parse(localStorage.getItem("userData"));
} else {
  userArray = [];
}

console.log(userArray.length);
console.log(localStorage.getItem("userData"));

signupButton.addEventListener("click", signup);
function signup() {
  if(nameFromSignin.value != "" && emailFromSignin.value != "" && passwordFromSignin.value) {
    let user = {
      name: nameFromSignin.value,
      email: emailFromSignin.value,
      password: passwordFromSignin.value
    }
    alertAlreadyExisit.style.display = "none";
    alertFaild.style.display = "none";
    alertSuccess.style.display = "block";

    if(localStorage.getItem("userData") == null) {
      console.log("Empty");
      userArray.push(user);
      localStorage.setItem("userData", JSON.stringify(userArray));
    } else {
      for(let i = 0; i < userArray.length; i++) {
        if(JSON.parse(localStorage.getItem("userData"))[i].name == nameFromSignin.value
        && JSON.parse(localStorage.getItem("userData"))[i].email == emailFromSignin.value
        && JSON.parse(localStorage.getItem("userData"))[i].password == passwordFromSignin.value) 
        {
          console.log("exist");
          alertAlreadyExisit.style.display = "block";
          alertFaild.style.display = "none";
          alertSuccess.style.display = "none";
          notExist = false;
        } else {
          console.log("not exist");
          alertAlreadyExisit.style.display = "none";
          alertFaild.style.display = "none";
          alertSuccess.style.display = "block";
          notExist = true;
        }
      }
  
      if(notExist == true) {
        console.log("doneeeeeeee");
        userArray.push(user);
        localStorage.setItem("userData", JSON.stringify(userArray));
        notExist = false;
      }
    }
  } else {
    messageFaild();
  }
}


function messageFaild() {
  alertFaild.style.display = "block";
  alertSuccess.style.display = "none";
  alertAlreadyExisit.style.display = "none";
}

function locationInfo() {
  window.location.href = "../html/home.html";
}