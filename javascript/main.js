
    let acc = document.getElementsByClassName("accordion");
    for ( i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let anser=this.nextElementSibling;
    if(anser!==null){
    if (anser.style.display==="block") {
    anser.style.display="none";
    } else {
    anser.style.display="block";
    }
    }
    return false;
    });
    }
    
    
        let passwordInput= document.querySelector(".pass-c input")
        let eyeIcone= document.querySelector(".pass-c i")
        eyeIcone.addEventListener("click",() => {
            passwordInput.type= passwordInput.type==="password"? "text": "password";
            eyeIcone.className = "fa-solid fa-eye ${passwordInput.type==="password"? "" : "-slash"}"
        });

        let ValidPassword = [
            {regex:/.{8,}/, index:0},
            {regex:/[0-9]/, index:1},
            {regex:/[a-z]/, index:2},
            {regex:/[@-*-#-.-%-$]/, index:3},
            {regex: /[A-Z]/, index:4},
        ]
        passwordInput.addEventListener("keyup",(e)=>{
            validPassword.forEach(item => {
                let isValid = item.regex.test(e.target.value);
                let validPassword= validPassword[item.index];
                if(isValid){
                    validPassword.firstElementChild.className ="fa-solid fa-circle";
                    validPassword.classList.add("valid");
                }
            
                    else {
                        validPassword.firstElementChild.className ="fa-solid fa-circle";
                        validPassword.classList.add("valid");
                    }

                    }
                }
         
       
        
        /*
        let ValidPassword = [
             regexUpperCase=/[A-Z]/;
            let regxLowerCase=/[a-z]/;
            let number=/[0-9]/;}
            let symbole =/[@-*-#-.-%-$]/
             if(password.length>=8 && regexUpperCase.test(password) && regxLowerCase.test(password) && number.test(password) && symbole.test(password)){}*/
