//storage the user got how many questions right.
localStorage.rightnumber = parseInt(localStorage.getItem("rightnumber")) + 1;

//to call and show the correct answer which is storaged in the "question.js".
let testnumber = localStorage.getItem("testnumber");
let correctanswer = document.querySelector("#correctanswer");
correctanswer.innerHTML = Object.values(questions[testnumber-1])[questions[testnumber-1].correctanswer];

//to call and show the explaination which is storaged in the "question.js".
let explanation = document.querySelector("#explanation");
explanation.innerHTML = questions[testnumber-1].explanation;

//count the number of how many problem you have done.
localStorage.total = parseInt(localStorage.getItem("total"))+1;

//link to other pages.
let correctback = document.querySelector("#correctback");
correctback.addEventListener("click",event=>{
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