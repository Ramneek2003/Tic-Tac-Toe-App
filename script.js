console.log("Welcome to Tic Tac Toe")

let music = new Audio("music.mp3")
let audioTurn = new Audio("correct-choice-43861.mp3")
let gameoverAudio = new Audio("success-fanfare-trumpets-6185.mp3")
let turn="X"
let gameover = false;

// Function to change the turn
const changeTurn= ()=>{
    return turn === "X" ? "0":"X"
}

// Funciton to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2/*,5,5,0*/], //horizontal
        [3,4,5/*,5,15,0*/],
        [6,7,8/*,5,25,0*/],
        [0,3,6/*,-5,5,90*/], // vertical
        [1,4,7/*,5,15,90*/],
        [2,5,8/*,15,15,90*/],
        [2,4,6,/*5,15,135*/], // diagonal
        [0,4,8/*,5,15,45*/]
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !=='')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover= true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width ="200px"
            /*function myFunction(x) {
                if (x.matches) {document.querySelector(".line").style.width= "50vw";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]+15}vw) rotate(${e[5]}deg)`
                gameoverAudio.play();
                } 
                else {
                    document.querySelector(".line").style.width= "20vw";
                    document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
                    gameoverAudio.play();
                }
              }
            var x = window.matchMedia("(max-width: 950px)")
            myFunction(x)
            x.addEventListener(myFunction)*/
            /*document.querySelector(".line").style.width= "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`*/
            gameoverAudio.play();
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText= "Turn for "+ turn;
            }
        }
    })
})

// Add on click listner to reset button
reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameover=false;
    /*document.querySelector(".line").style.width = "0vw";*/
    document.getElementsByClassName("info")[0].innerText= "Turn for "+ turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width ="0px"
})

