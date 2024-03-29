let score = document.querySelector("#score");

//bars to  indocate the total number of questions finished
let youhavedone = document.createElement("div");
youhavedone.innerHTML = "You have finished:";
youhavedone.className = "titlefont";
score.appendChild(youhavedone);

let totalbar = document.createElement("div")
totalbar.className = "totalbar";
score.appendChild(totalbar);

let totalbasebar = document.createElement("div")
totalbasebar.className = "basebar";
totalbar.appendChild(totalbasebar);

let havedonebar = document.createElement("div")
havedonebar.className = "havedonebar";
havedonebar.style.width = parseInt(localStorage.getItem("total")) / 10 * 300 + "px";
totalbar.appendChild(havedonebar);

let totalpercentage = document.createElement("div");
totalpercentage.className = "totalpercentage";
totalpercentage.innerHTML = parseInt(localStorage.getItem("total")) * 10 + "%" 
totalpercentage.style.left = parseInt(localStorage.getItem("total")) / 10 * 300 - 10 + "px";
totalbar.appendChild(totalpercentage);

//bar to indicate user's accuracy rate
let youraccuracy = document.createElement("div");
youraccuracy.innerHTML = "Your accuracy";
youraccuracy.className = "titlefont";
score.appendChild(youraccuracy);

let accuracybar = document.createElement("div")
accuracybar.className = "totalbar";
score.appendChild(accuracybar);

let accuracybasebar = document.createElement("div")
accuracybasebar.className = "basebar";
accuracybar.appendChild(accuracybasebar);

let theaccuracybar = document.createElement("div")
theaccuracybar.className = "havedonebar";
theaccuracybar.style.width = parseInt(localStorage.getItem("rightnumber")) / parseInt(localStorage.getItem("total")) * 300 + "px";
accuracybar.appendChild(theaccuracybar);

let accuracypercentage = document.createElement("div");
accuracypercentage.className = "totalpercentage";
accuracypercentage.innerHTML = Math.floor(parseInt(localStorage.getItem("rightnumber")) / parseInt(localStorage.getItem("total")) *100) + "%";
accuracypercentage.style.left = parseInt(localStorage.getItem("rightnumber")) / parseInt(localStorage.getItem("total")) * 300 - 20 + "px";
accuracybar.appendChild(accuracypercentage);

//question list generated by using loop 
let memo = document.querySelector("#memolist");
var i = 0;
for(let i = 0; i < parseInt(localStorage.getItem("total")); i++){ 
    let box = document.createElement("div");
    box.className = "box2";
    memo.appendChild(box)

    let questiontitle = document.createElement("div");
    questiontitle.innerHTML = questions[i].question;
    questiontitle.className = "questiontitle";
    
    questiontitle.style.fontSize = Math.sqrt(Math.sqrt(120/questions[i].question.length))*14 +"px";
    box.appendChild(questiontitle);

    let picturea = document.createElement("img");
    picturea.setAttribute("src", questions[i].picture);
    picturea.className = "picturea";
    box.appendChild(picturea);

    let correctans = document.createElement("div");
    correctans.innerHTML = Object.values(questions[i])[questions[i].correctanswer];
    correctans.className =  "correctans";
    correctans.style.fontSize = Math.sqrt(Math.sqrt(120/Object.values(questions[i])[questions[i].correctanswer].length))*11 +"px";
    box.appendChild(correctans);
;}

//link to other pages
let startbutton = document.querySelector("#startbutton");
startbutton.addEventListener("click", event=>{
    location.href = "../ProblemPage/Problem.html";
});

let profile = document.querySelector("#profile");
profile.addEventListener("click", event=>{
    location.href = "../profile/index.html"
})

let back = document.querySelector("#back");
back.addEventListener("click",event=>{
    location.href = "../mainpage/main.html";
})
