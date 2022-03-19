console.log("Welcome to Tic Tac Toe");
let change = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let gameFinish = false;

// For changing the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    let win =[
        [0,1,2,5,4.4,0],
        [3,4,5,5,14.5,0],
        [6,7,8,5,25,0],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
    ]
    win.forEach(e => {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText!=="")){
        document.querySelector(".result").innerText = boxtext[e[0]].innerText +" won";
        gameover.play();
        gameFinish = true;
        
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="180px";
        document.querySelector(".line").style.width ="20vw";
        document.querySelector(".line").style.transform =`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
         return turn = "";
        window.setTimeout( function(){
            window.location.reload();
        },5000);
        
        }

    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (event)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            change.play();
            checkWin();
            if(!gameFinish){
             document.getElementsByClassName("result")[0].innerText  = `Turn for ${turn}`;
            }
        }
    })
})

// Add onclick event to reset button
let reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    let text = document.getElementsByClassName("boxtext");
    Array.from(text).forEach(element => {
        element.innerText=" ";
        turn = "X";
        gameFinish =false;
        document.getElementsByClassName("result")[0].innerText  = `Turn for ${turn}`;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
        document.querySelector(".line").style.width ="0vw";
    })
})
