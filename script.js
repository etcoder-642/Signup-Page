let pwd = document.querySelector('.pwd')
let second = document.querySelector('.second')
let passwrd = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let inputs = document.querySelectorAll('#firstname, #lastname, #email, #phone')
let eyeIcon = document.querySelector('.eye-icon');

document.addEventListener('input', (e)=>{
    handleInputScenarios(e);
})

passwrd.addEventListener('blur', (e)=>{
    if(passwrd.checkValidity()){
        pwd.style.boxShadow = 'none';
        pwd.style.border = '1px solid rgba(0, 0, 0, 0.4)';
    }
})

confirmPassword.addEventListener('blur', (e)=>{
    if(passwrd.checkValidity()){
        second.style.boxShadow = 'none';
        second.style.border = '1px solid rgba(0, 0, 0, 0.4)';
    }
})

inputs.forEach(input => {
    input.addEventListener('blur', ()=>{
        input.style.boxShadow = 'none';
        if(input.checkValidity()){
            input.style.border = '1px solid rgba(0, 0, 0, 0.4)';
        }
    })
})

function handleInputScenarios(e){
    if(!e.target.checkValidity()){
            if(e.target.id == 'password'){
                pwd.style.boxShadow = '0 0 8px 3px rgba(255, 69, 63, 0.4)';
                pwd.style.border = "3px solid red"
                return;        
            }else if(e.target.id == 'confirmPassword'){
                second.style.boxShadow = '0 0 8px 3px rgba(255, 69, 63, 0.4)'
                second.style.border = "3px solid red"
                return;        
            }else {
                e.target.style.boxShadow =  '0 0 8px 3px rgba(255, 69, 63, 0.4)';
                e.target.style.border = "3px solid red"
            }
    }else{
            if(e.target.id == 'password'){
                pwd.style.boxShadow = '0 0 8px 3px rgba(0, 152, 253, 0.4)';
                pwd.style.border = "none";
                return;        
            }else if(e.target.id == 'confirmPassword'){
                second.style.boxShadow = '0 0 8px 3px rgba(0, 152, 253, 0.4)';
                second.style.border = "none";
                return;        
            }else {
                e.target.style.boxShadow = '0 0 8px 3px rgba(0, 152, 253, 0.4)';
                e.target.style.border = "none";
            }
    }
}

document.querySelector('.btn').onclick = (e)=>{
    let result = (!(passwrd.value == confirmPassword.value) && passwrd.value.length > 8) ? "Your passWord didn't match" : "";
    if(result.length >= 1){
        alert(result);
        e.preventDefault();
    }
}

document.addEventListener('click', (e)=>{
    const regex = /resources\/eye-close\.png$/
    if(e.target.className.includes('iconOne')) {
        console.log("yeah")
        if(regex.test(e.target.src)){    
            passwrd.type = 'text';
            e.target.src = "resources/eye-open.png";
            e.target.style.padding = '10px';
        }else {
            passwrd.type = 'password';
            e.target.src = "resources/eye-close.png";
            e.target.style.padding = '8px';
        }
    }else if(e.target.className.includes('iconTwo')){
        if(regex.test(e.target.src)){    
            confirmPassword.type = 'text';
            e.target.src = "resources/eye-open.png";
            e.target.style.padding = '10px';
        }else {
            confirmPassword.type = 'password';
            e.target.src = "resources/eye-close.png";
            e.target.style.padding = '8px';
        }        
    }
})
