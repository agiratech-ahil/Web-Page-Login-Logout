//Switching tabs

window.onload = function onLoadingFirst() {
  changeTab("Signin");
};
function changeTab(selected) {
  var x = document.getElementById("Signin");
  var y = document.getElementById("Signup");
  var si = document.getElementById("SignIn");
  var su = document.getElementById("SignUp");

  if (selected == "Signin") {
    x.style.display = "block";
    y.style.display = "none";
    si.style.borderTopColor = "#675cd0";
    su.style.borderTopColor = "#3f41463b";
  } else if (selected == "Signup") {
    x.style.display = "none";
    y.style.display = "block";
    si.style.borderTopColor = "#3f41463b";
    su.style.borderTopColor = "#675cd0";
  }
}

//getting elements of the form without id and class

const forme = document.forms["sinform"];

forme.onsubmit = (elem) => {
  elem.preventDefault();
  var elem1 = forme.elements["usern"].value;
  var elem2 = forme.elements["pwdsn"].value;

  console.log(elem1);
  console.log(elem2);
};
var formf = document.forms["supform"];

formf.onsubmit = (elem) => {
  var elem3 = formf.elements["userup"].value;
  var elem4 = formf.elements["phoneup"].value;
  var elem5 = formf.elements["emailup"].value;
  var elem6 = formf.elements["pwd1up"].value;
  var elem7 = formf.elements["pwd2up"].value;

  console.log(elem3);
  console.log(elem4);
  console.log(elem5);
  console.log(elem6);
  console.log(elem7);
};
// Validation of user input sign up page

function pwdch() {
  var elem6 = formf.elements["pwd1up"];
  var elem7 = formf.elements["pwd2up"];
  if (elem6.value === elem7.value) {
    elem7.setCustomValidity("");
  } else {
    elem7.setCustomValidity("Passwords does not match!!");
  }
}
// Validation of user input sign in page

// var check = /^(?=.*[A-Z]).{8,}$/;
// var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// function signin() {
//   var pwd = document.getElementById("txt").value;
//   var usr = document.getElementById("usr").value;
//   let pwdch = check.test(pwd);

//   if (pwdch == false) {
//     // swal("Please enter a valid password");
//   }
// }

// const gete = (elem) => {
//   elem.preventDefault();
//   const form = new FormData(elem.target);
//   var usern = form.get("usern");
//   console.log(usern);
// };
