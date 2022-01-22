
let myButton = document.querySelector("#loginButton");
myButton.addEventListener("click", event => {
    let username = document.querySelector("#username");
    let password = document.querySelector("#pwd");
    if(username.value != "" && password.value != ""){
        location.href = "../mainpage/main.html";
    }else{
        alert("Wrong username or password");
    }
    
});