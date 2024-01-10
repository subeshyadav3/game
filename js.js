let btn = document.querySelector("button");
let body = document.querySelector("body");
let mode = "light";

btn.onclick = () => {
    if (mode === "light") {
        mode = "dark";
        body.style.backgroundColor = "white";
        body.style.color = "blue";
        console.log("light");
    } else {
        mode = "light";
        body.style.backgroundColor = "skyblue";
        body.style.color = "white";
        console.log("black");
    }
};

// Game Logic

function autoSelect() {
    const options = ['rock', 'paper', 'scissor'];
    const choose = Math.floor(Math.random() * 3);
    return options[choose];
}

let comScore = 0;
let humanScore = 0;

let choices = document.querySelectorAll("#choice");
let msg = document.querySelector("#result");
let comp = document.querySelector("#comp");
let hum = document.querySelector("#hum");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceName = choice.getAttribute("name");
        playGame(choiceName);
    });
});

function playGame(choiceName) {
    const valueChoosen = autoSelect();
    console.log("comp", valueChoosen);
    console.log("user", choiceName);

    if (valueChoosen === choiceName) {
        msg.innerText = "Game Draw";
    } else {
        if (
            (valueChoosen === "rock" && choiceName === "scissor") ||
            (valueChoosen === "paper" && choiceName === "rock") ||
            (valueChoosen === "scissor" && choiceName === "paper")
        ) {
            comScore++;
            console.log("comp score", comScore);
            msg.innerText = "Computer Won Here!";
            comp.innerText = comScore;
