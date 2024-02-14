// eyes-events
// let passwordInput= document.querySelectorAll("#pass")[0]
// let eyeIcone= document.querySelector(".pass-c i")
// eyeIcone.addEventListener("click",() => {
//     passwordInput.type= passwordInput.type==="password"? "text": "password";
//     eyeIcone.className = `fa-solid fa-eye ${passwordInput.type==="password"? "" : "-slash"}`
// });

let validPassword = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[A-Z]/, index: 3 },
];
document.querySelector("#pass").addEventListener("keyup", (e) => {
  validPassword.forEach((item) => {
    let isValid = item.regex.test(e.target.value);
    if (isValid) {
      document
        .querySelectorAll(".list")[0]
        .children[item.index].classList.add("text-white");
    } else {
      document
        .querySelectorAll(".list")[0]
        .children[item.index].classList.add("text-danger");
    }
  });
});

document.querySelector("#confirm_pass").addEventListener("keyup", (e) => {
  let arr = document.querySelectorAll(".list")[0].children;
  if (document.getElementById("pass").value == e.target.value) {
    arr[arr.length - 1].classList.add("text-white");
  }
});

 
let users = [] || JSON.parse(localStorage.getItem("users"))

let signUp = () => {
    let name = document.getElementById("name").value;
   let dateOfBirth= document.getElementById("date").value;
    let adress = document.getElementById("adress").value;
   let email = document.getElementById("email").value;
   let password = document.getElementById("pass").value ;
    if(name&&dateOfBirth&&adress&&email&&password === document.getElementById("confirm_pass").value) {
        users.push({name,dateOfBirth,adress,email,password})
        localStorage.setItem("users",JSON.stringify(users))
    }
    else {
        alert("please verifie")
    }
}




