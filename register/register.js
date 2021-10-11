const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const male = document.getElementById("male");
const female = document.getElementById("female");
const password = document.getElementById("password");
const repassword = document.getElementById("confPassword");
const fullname = document.getElementById("fullName");
const agreement = document.getElementById("check");

// const test = document.querySelector(".judul-warna");

// male.addEventListener("click", (e) => {
//   alert("test");
// });

const error = document.getElementById("error");
const usernameresult = document.getElementById("test");

let errorMessage = "";
let genderChoosed = "";
form.addEventListener("submit", (e) => {
  if (username.value === "") {
    alert("Username must be filled");
    //ganti warna border
    //username.
    e.preventDefault();
  } else if (email.value === "") {
    alert("Email must be filled");
    //ganti warna border
    //username.
    e.preventDefault();

  } else if (password.value === "") {
    alert("Password must be filled");
    e.preventDefault();

  } else if (password.value === "") {
    alert("Password must be filled");
    e.preventDefault();

  } else if (password.value.length <= 8) {
    alert("Password must be more than 8 char");
    e.preventDefault();

  } else if (repassword.value === "") {
    alert("Re password must be filled");
    e.preventDefault();

  } else if (password.value !== repassword.value) {
    alert("Password not match");
    e.preventDefault();

  } else if (fullname.value === "") {
    alert("Fullname must be filled");
    e.preventDefault();

  } else if (!(female.checked || male.checked)) {
    alert("gender must be coosed");
    e.preventDefault();

  } else if (!agreement.checked) {
    alert("Agreement must be checked");
    e.preventDefault();

  } else {
    let result = confirm("Ready to join?");
    if (!result) {
      e.preventDefault();
    }
  }
});
