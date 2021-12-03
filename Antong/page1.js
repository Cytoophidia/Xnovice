
let myButton = document.querySelector("#loginButton");
myButton.addEventListener("click", event => {
    let username = document.querySelector("#username");
    let password = document.querySelector("#pwd");
    if(username.value != "" && password.value != ""){
        alert("Login Successful");
    }else{
        alert("Wrong username or password");
    }
    
});