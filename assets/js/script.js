//general variables

let btnRock = document.querySelector('#div-rock');

let btnPaper = document.querySelector('#div-paper');

let btnScissor = document.querySelector('#div-scissor');

let resultText = document.querySelector('h2');


//new round & random move from comp
let btnDisabled = false;
let counterRound = -1;
let formRound = document.querySelector('form');

const rock = "rock";
const paper = "paper";
const scissor = "scissor";
const compArray = [rock, paper, scissor]
let compRandom;

newRound = () => {
    let compNumber = Math.floor(Math.random() * 3);
    console.log(compNumber);

    compRandom = compArray[compNumber]; 
    console.log(compRandom);

    setTimeout(function() {
        btnRock.style.backgroundColor = "white";
        btnRock.style.borderColor = "white";
        btnPaper.style.backgroundColor = "white";
        btnPaper.style.borderColor = "white";
        btnScissor.style.backgroundColor = "white";  
        btnScissor.style.borderColor = "white";
    }, 500);

    if (counterRound == numberRound) {
        if (counterScoreUser < counterScoreComp) {
            resultText.innerHTML = "Sorry, you lose.";
            btnDisabled = true;
        } else if (counterScoreUser > counterScoreComp) {
            resultText.innerHTML = "Congratulations, you win.";
            btnDisabled = true;
        }
    } else {
        counterRound = counterRound+1;
        formRound.innerHTML= counterRound + " / " + numberRound;
    }

}





//select rounds 
let btnStart = document.querySelector('.a-start');

let rounds5 = document.querySelector('#input-5');
let rounds10 = document.querySelector('#input-10');
let rounds15 = document.querySelector('#input-15');
let rounds20 = document.querySelector('#input-20');

let numberRound;

selectRound = () => {
    console.log("SelectRound Test");
    newRound();

    formRound.style.gridTemplateColumns = "1fr";
    formRound.style.marginBottom = "8%";
    formRound.style.textAlign = "center";
    formRound.style.fontSize = "x-large";

    if (rounds5.checked == true) {
        numberRound = 5;
        formRound.innerHTML= counterRound + " / " + numberRound;
    } else if (rounds10.checked == true) {
        numberRound = 10;
        formRound.innerHTML= counterRound + " / " + numberRound;
    } else if (rounds15.checked == true) {
        console.log("rounds15 test");
        numberRound = 15;
        formRound.innerHTML= counterRound + " / " + numberRound;
    } else if (rounds20.checked == true) {
        numberRound = 10;
        formRound.innerHTML= counterRound + " / " + numberRound;
    }   
}

btnStart.addEventListener('click', selectRound);







//score user & comp
let scoreUser = document.querySelector('#score-user');
let scoreComp = document.querySelector('#score-comp');
let counterScoreUser = 0;
let counterScoreComp = 0;



//rock
function clickRock() {
    if (btnDisabled == true) {
        return;
    }

    if (compRandom == rock) {
        console.log("Test unentschieden")
        resultText.innerHTML = "It was a draw. You both chose rock.";
        btnRock.style.backgroundColor = "#fff2cc";
        btnRock.style.borderColor = "#f1c232";
    } else if (compRandom == paper) {
        console.log("Test verloren");
        resultText.innerHTML = "Rock (user) lose against paper (comp): You lose."; 
        btnRock.style.backgroundColor = "#f4cccc";
        btnRock.style.borderColor = "#cc0000";
        counterScoreComp = counterScoreComp+1;
        scoreComp.innerHTML = counterScoreComp;
    } else {
        console.log("Test gewonnen");
        resultText.innerHTML = "Rock (user) beats scissor (comp): You win.";
        btnRock.style.backgroundColor = "#d9ead3";
        btnRock.style.borderColor = "#6aa84f";
        counterScoreUser = counterScoreUser+1;
        scoreUser.innerHTML = counterScoreUser;
    }

    newRound();
}

btnRock.addEventListener('click', clickRock);






//paper
function clickPaper() {
    if (btnDisabled == true) {
        return;
    }

    if (compRandom == paper) {
        console.log("Test unentschieden")
        resultText.innerHTML = "It was a draw. You both chose paper.";
        btnPaper.style.backgroundColor = "#fff2cc";
        btnPaper.style.borderColor = "#f1c232";
    } else if (compRandom == scissor) {
        console.log("Test verloren");
        resultText.innerHTML = "Paper (user) lose against scissor (comp): You lose."; 
        btnPaper.style.backgroundColor = "#f4cccc";
        btnPaper.style.borderColor = "#cc0000";
        counterScoreComp = counterScoreComp+1;
        scoreComp.innerHTML = counterScoreComp;
    } else {
        console.log("Test gewonnen");
        resultText.innerHTML = "Paper (user) beats rock (comp): You win.";
        btnPaper.style.backgroundColor = "#d9ead3";
        btnPaper.style.borderColor = "#6aa84f";
        counterScoreUser = counterScoreUser+1;
        scoreUser.innerHTML = counterScoreUser;
    }

    newRound();
}

btnPaper.addEventListener('click', clickPaper);







//scissor
function clickScissor() {
    if (btnDisabled == true) {
        return;
    }
    
    if (compRandom == scissor) {
        console.log("Test unentschieden")
        resultText.innerHTML = "It was a draw. You both chose scissor.";
        btnScissor.style.backgroundColor = "#fff2cc";
        btnScissor.style.borderColor = "#f1c232";
    } else if (compRandom == rock) {
        console.log("Test verloren");
        resultText.innerHTML = "Scissor (user) lose against rock (comp): You lose."; 
        btnScissor.style.backgroundColor = "#f4cccc";
        btnScissor.style.borderColor = "#cc0000";
        counterScoreComp = counterScoreComp+1;
        scoreComp.innerHTML = counterScoreComp;
        // btnScissor.style.opacity = "0.1";
    } else {
        console.log("Test gewonnen");
        resultText.innerHTML = "Scissor (user) beats paper (comp): You win.";
        btnScissor.style.backgroundColor = "#d9ead3";
        btnScissor.style.borderColor = "#6aa84f";
        counterScoreUser = counterScoreUser+1;
        scoreUser.innerHTML = counterScoreUser;
    }  

    newRound();
}

btnScissor.addEventListener('click', clickScissor);








//restart
let btnRestart = document.querySelector('.a-restart');

refreshSite = () => {
    location.reload();
    console.log("refreshSite Test");
}

btnRestart.addEventListener('click', refreshSite); 