var TmpAnswer = 0;  //To see which answer the user chose.
// var Tmptestnumber = Math.floor(Math.random()*questions.length)+1; //to make the problem appear randomlly.
var testnumber = parseInt(localStorage.getItem("total"))+1;
var onpress = false; //this value is to avoid people jump into the next page without pick a answer.
localStorage.setItem("testnumber",testnumber);//storage the testnumber in to the local storage.


//generate the problem borad by the problem database.
let board = document.querySelector("#board");
let title = document.createElement("div");
title.innerHTML = "QUESTION " + (parseInt(localStorage.getItem("total"))+1);
title.className = "title";
board.appendChild(title);

let question = document.createElement("div");
question.className = "problem";
question.innerHTML = questions[testnumber-1].question;
board.appendChild(question);

let pic = document.createElement("img");
pic.setAttribute("src", questions[testnumber-1].picture);
pic.className = "pic";
board.appendChild(pic);

let answer1 = document.createElement("div");
answer1.className = "answers";
answer1.innerHTML = questions[testnumber-1].answer1;
board.appendChild(answer1);

let answer2 = document.createElement("div");
answer2.className = "answers";
answer2.innerHTML = questions[testnumber-1].answer2;
board.appendChild(answer2);

let answer3 = document.createElement("div");
answer3.className = "answers";
answer3.innerHTML = questions[testnumber-1].answer3;
board.appendChild(answer3);

let answer4 = document.createElement("div");
answer4.className = "answers";
answer4.innerHTML = questions[testnumber-1].answer4;
board.appendChild(answer4);

let next = document.createElement("div");
next.className = "nextbutton"
next.innerHTML = "Next";
board.appendChild(next)


//if press a button, turn it into gray and make other button back to white. as well as unlock the "onpress", allow people to press nect button.
answer1.addEventListener("click", event=>{
    answer1.style.backgroundColor = "#F5E9E2";
    answer2.style.backgroundColor = "white";
    answer3.style.backgroundColor = "white";
    answer4.style.backgroundColor = "white";
    TmpAnswer = 1;
    onpress = true;
})

answer2.addEventListener("click", event=>{
    answer1.style.backgroundColor = "white";
    answer2.style.backgroundColor = "#F5E9E2";
    answer3.style.backgroundColor = "white";
    answer4.style.backgroundColor = "white";
    TmpAnswer = 2;
    onpress = true;
})

answer3.addEventListener("click", event=>{
    answer1.style.backgroundColor = "white";
    answer2.style.backgroundColor = "white";
    answer3.style.backgroundColor = "#F5E9E2";
    answer4.style.backgroundColor = "white";
    TmpAnswer = 3;
    onpress = true;
})

answer4.addEventListener("click", event=>{
    answer1.style.backgroundColor = "white";
    answer2.style.backgroundColor = "white";
    answer3.style.backgroundColor = "white";
    answer4.style.backgroundColor = "#F5E9E2";
    TmpAnswer = 4;
    onpress = true;
})


//press next button, according to user's selection, turn to the corresponding page. storage user's seletion in the localstorage.
next.addEventListener("click",event=>{
    if(onpress == true){
        if(TmpAnswer == questions[testnumber-1].correctanswer){
        location.href = "../answer/correct/correct.html";
        }else{
        localStorage.setItem("youranswer",TmpAnswer);
        location.href = '../answer/wrong/wrong.html';
        }
    } 
})
let back = document.querySelector("#back");
back.addEventListener("click",event=>{
    location.href = "../mainpage/main.html";
})



