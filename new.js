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
