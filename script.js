let game = document.querySelector(".game") 
let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
msgcontainer.classList.add("hide");
let turn = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2], 
    [0, 3, 6],
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turn)
        {
            box.innerText = "O";
            turn = false;
        }
        else
        {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
}
);

const checkWinner = () => {
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != "")
        {
            if(val1 === val2 && val2 === val3)
            {
                
                msg.innerText = "Winner is Player " + val1;
                msgcontainer.classList.remove("hide");
                game.classList.add("hide");
            }
        }
    }
};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = "";
    game.classList.remove("hide");
    msgcontainer.classList.add("hide");
});

