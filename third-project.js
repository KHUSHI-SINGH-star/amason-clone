let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const userscorePara = document.querySelector(".your-score");
const comscorePara = document.querySelector(".com-score");

const drawgame = () => {
    msg.style.backgroundColor = "blue";
    msg.innerText = "game was draw";
};

const showWinner = (userwin) => {
    if (userwin) {

        msg.innerText = "you win!";
        userscore++;
        userscorePara.innerText = userscore;
        msg.style.backgroundColor = "green";
    }
    else {
        comscore++;
        msg.innerText = "you loss";
        comscorePara.innerText = comscore;
        msg.style.backgroundColor = "red";
    }
};

const gencomChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};




const playGame = (userchoiceid) => {
    console.log("User choice=", userchoiceid);

    const computerchoice = gencomChoice();
    console.log("Computer choice=", computerchoice);

    if (userchoiceid === computerchoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoiceid === "rock") {
            userwin = computerchoice === "paper" ? false : true;

        }
        else if (userchoiceid === "paper") {
            userwin = computerchoice === "scissors" ? false : true;
        }
        else {
            userwin = computerchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};





choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoiceid = choice.getAttribute("id");

        playGame(userchoiceid);
    });

});
