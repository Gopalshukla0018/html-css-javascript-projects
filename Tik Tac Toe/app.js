let boxes = document.querySelectorAll(".box"); 
let resetbtn = document.querySelector("#resetbtn"); 
let turn = true; 

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = turn ? "X" : "O";
        turn = !turn;
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            setTimeout(() => {
                alert(`${pos1} wins!`);
                resetGame();
            }, 100);
            return; 
        }
    }

    let isDraw = [...boxes].every(box => box.innerText !== "");
    if (isDraw) {
        setTimeout(() => {
            alert("It's a draw!");
            resetGame();
        }, 100);
    }
};

resetbtn.addEventListener("click", () => resetGame());

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn = true;
};
