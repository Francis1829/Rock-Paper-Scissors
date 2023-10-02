const Userdetails = {
    UserName: "",
};

let userScore = 0;
let tiedScore = 0;
let botScore = 0;

function makeMove() {
    let select = ["✊🏽", "🖐🏽", "✌🏽"];
    return select[Math.floor(Math.random() * select.length)];
}

function Winner(userselect, botSelect) {
    if (userselect === botSelect) {
        tiedScore++;
        return "Draw!";
    }
    if (
        (userselect === "✊🏽" && botSelect === "✌🏽") ||
        (userselect === "🖐🏽" && botSelect === "✊🏽") ||
        (userselect === "✌🏽" && botSelect === "🖐🏽")
    ) {
        userScore++;
        return "You win!";
    }
    botScore++;
    return "Bot wins!";
}

function updateScores() {
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("botScore").textContent = botScore;
    document.getElementById("tiedScore").textContent = tiedScore;
}

function move(userselect) {
    let botSelect = makeMove();
    let game = Winner(userselect, botSelect);
    document.getElementById("uselect").textContent =
        `${userselect}`;
        document.getElementById("bselect").textContent =
        `${botSelect}`;
        document.getElementById("winnnn").textContent =
        `${game}`;
    updateScores();
}

function LogIn() {
    let UserName = document.querySelector("#UserName").value;
    Userdetails.UserName = UserName;
    document.querySelector(".Log_In_Area").style.display = "none";
    document.querySelector(".Play_Area").style.display = "block";
    document.querySelector("#userData").textContent = Userdetails.UserName + " :";
}