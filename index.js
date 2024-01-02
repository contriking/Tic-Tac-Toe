let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGame=document.querySelector("#new-game");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn=true;

// creating an array of winning pattern
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// adding click event on every button 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulation winner is ${winner}`;
    msgCont.classList.remove("hide");
}

// Func to prevent moves after game is over
const disableBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
};

// Func to start a new game
const enableBoxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

// To check winner on every move 
const checkwinner=()=>{
    for(pattern of winpattern){
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                disableBoxes();
                showWinner(pos1);
            }
        }
    }
}

// Func to reset game
const resetGame=()=>{
    turn=true;
    enableBoxes();
    msgCont.classList.add("hide");
};

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);