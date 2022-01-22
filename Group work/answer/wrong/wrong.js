//get user's selection from the local storage and show the answer which user selected.
let testnumber = localStorage.getItem("testnumber");
let youranswer = localStorage.getItem("youranswer");
let YourAnswer = document.querySelector("#YourAnswer")
YourAnswer.innerHTML = Object.values(questions[testnumber-1])[youranswer];

//to call and show the correct answer which is storaged in the "question.js".
let correctanswer = document.querySelector("#correctanswer");
correctanswer.innerHTML = Object.values(questions[testnumber-1])[questions[testnumber-1].correctanswer];

//count the number of how many problem you have done.
localStorage.total = parseInt(localStorage.getItem("total"))+1;

//to call and show the explaination which is storaged in the "question.js".
let explanation = document.querySelector("#explanation");
explanation.innerHTML = questions[testnumber-1].explanation;

//link to other pages
let wrongback = document.querySelector("#wrongback");
wrongback.addEventListener("click",event=>{
    location.href = "../../mainpage/main.html";
})
let continues = document.querySelector("#continue");
continues.addEventListener("click",event=>{
    if(localStorage.getItem("total") == 5){
        location.href = "../../mainpage/main.html";
    }else{
        location.href = "../../ProblemPage/Problem.html";
    }
})