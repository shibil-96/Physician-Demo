const submitButton = document.querySelector(".submit");
const input = document.querySelector(".textinput");
const email = document.getElementById("email");
const password = document.getElementById("password");
submitButton.disabled = true;
input.addEventListener("keyup", () =>{
    if(input.value.length >0) {
        submitButton.disabled = false
    }else{
        submitButton.disabled = true;
    }

})