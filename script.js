document.addEventListener('input', (e)=>{
    if(!e.target.checkValidity()){
        e.target.style.border = "3px solid red"
    }
     else {
        e.target.style.border = "none";        
    }
})

let passwrd = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');

document.querySelector('.btn').onclick = ()=>{
    let result = (!(passwrd.value == confirmPassword.value)) ? "PassWord didn't Matched":"";
    console.log(result.length, result)
    if(result.length >= 1)
        alert(result);
}

// setInterval(()=>{
//     if(passwrd.value == confirmPassword.value)
//         console.log(passwrd.value, confirmPassword.value, "Yeah, you made it!")
// }, 10000)


