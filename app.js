let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let winner = document.querySelector("h1");
let restart = document.querySelector(".restart");

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame=()=>{
    turn0 = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    restart.classList.add("hide");
    winner.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Btn was clicked");
        if (turn0) {
            turn0 = !turn0;
            box.innerText = "0";
        } else {
            turn0 = !turn0;
            box.innerText = "X";
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBtns = () => {
    boxes.forEach(box => box.disabled = true);
};

const showWinner = (winnerPlayer) => {
    winner.innerText = `Congratulations '${winnerPlayer}', you are the winner!`;
    winner.classList.remove("hide");
    restart.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 === pos2 && pos2 === pos3 && pos2 !== "") {
            showWinner(pos1);
            disableBtns();
            break;
        }
    }
};

restart.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
