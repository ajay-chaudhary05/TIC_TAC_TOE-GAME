let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".footer-btn");
let winner_pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let play = true;

const resetgame = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    play = true;
}

function boxes_disable() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function winner(box, count) {
    for (pattern of winner_pattern) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                if (p1 === "o") {
                    console.log(`winner is o`);
                    iswinner = "o";
                } else {
                    console.log(`winner is x`);
                    iswinner = "x";
                }
                boxes_disable();
            }
        }
    }
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (play) {
            box.innerText = "o";
            play = false;
        } else {
            box.innerText = "x";
            play = true;
        }
        box.disabled = true;
        winner(box);
    })
})

reset.forEach(foot_btn => {
    foot_btn.addEventListener("click", resetgame);
})