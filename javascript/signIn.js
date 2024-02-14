let signIn = ()=> {
    let users =  JSON.parse(localStorage.getItem("users"))
    let email = document.getElementById("signInEmail").value
    let pw = document.getElementById("signInPw").value
    console.log(email,pw)
    console.log(users)
    let filtred = users.filter(e=>e.email === email && e.password === pw)
    console.log(users,"those are users")
    if(filtred[0]) {
        window.location.href = "http://localhost:5500/pages/user.html"
    }
    else alert("account dosen't exist")
}