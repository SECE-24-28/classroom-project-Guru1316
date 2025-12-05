// Variables
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

// Generating Random Number
let randomNumber;
function rand(){
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNumber);
}

let scr = 20;
rand();
// Button Functionalities
// 1st parameter :  Event that we want to occur
// 2nd parameter : Callback Funnction
checkBtn.addEventListener("click", () =>{
    if(!guess.value)
    {
        alert("Please Enter A Number...");
    }
    else if(guess.value <= 0 || guess.value > 20)
    {
        msg.textContent = "Invalid Value";
    }
    else if(guess.value == randomNumber)
    {
        if(scr > highScore.textContent)
        {
            highScore.innerHTML = scr;
        }
        let p = document.querySelector("body");
        p.style.backgroundColor = "green";
        msg.textContent = "Correct Value";
        number.textContent = randomNumber;
        score.textContent = scr;
        guess.disabled = true;
        checkBtn.disabled = true;
    }
    else if(guess.value > randomNumber)
    {
        scr = scr - 1;
        score.textContent = scr;
        msg.textContent = "Too High";
    }
    else if(guess.value < randomNumber)
    {
        scr = scr - 1;
        score.textContent = scr;
        msg.textContent = "Too Low";
    }
})

againBtn.addEventListener("click", () =>{
    rand();
    guess.disabled = false;
    checkBtn.disabled = false;
    scr = 20;
    score.textContent = scr;
    let p = document.querySelector("body");
    p.style.backgroundColor = "#222";
    msg.textContent = "Start guessing...";
    number.textContent = "?";
    guess.value = "";
})