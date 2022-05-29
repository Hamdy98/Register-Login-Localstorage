let myH1 = document.getElementById("my-h1");
let logoutBtn = document.getElementById("log-out");

myH1.innerHTML = `Welcome ${localStorage.getItem("UserName")}`;

logoutBtn.addEventListener("click", logout);
function logout() {
  localStorage.removeItem("UserName");
  window.location.replace("../signin.html");
  console.log("op");
}