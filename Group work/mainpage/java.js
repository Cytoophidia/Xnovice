let levels = document.querySelector("#levels")


// create the lamp
var i = 0;
for(let i = 0; i < 5; i++){
    var newlamp = document.createElement("div");
    if(i < localStorage.getItem("total")){
        newlamp.className = "done";
    }else{
        newlamp.className = "level";
    }
    levels.appendChild(newlamp);
}

// Turn on the milestone
let milestine2 = document.querySelector("#milestine2");
if(localStorage.getItem("total") > 4){
    milestine2.className = "locked";
}else{
    milestine2.className = "unlock";
}


// Turn to other page
let profile = document.querySelector("#profile");
profile.addEventListener("click", event=>{
    location.href = "../profile/index.html"
})

let startbutton = document.querySelector("#startbutton");
startbutton.addEventListener("click", event=>{

    location.href = "../ProblemPage/Problem.html"
})

let quizsheet = document.querySelector("#quizsheet");
quizsheet.addEventListener("click", event=>{
    location.href = "../memo/memo.html"
})

