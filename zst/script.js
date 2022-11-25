function check() {
  let email = document.getElementById("Email").value;
  let imie = document.getElementById("Imie").value;
  if (email.includes("@") == false || email == "" || email.includes(".") == false || imie.includes(" ") == false) {
    document.getElementById("Err").style.visibility = "visible";
  } else {
    location.href = "quiz1.html";
  }
}
