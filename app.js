const playerOne=document.querySelector('#player1');

const playerTwo=document.querySelector('#player2');

const p1Score=document.querySelector('#p1score');
const p2Score=document.querySelector('#p2score');
const resetbtn=document.querySelector('#reset');
const point1=document.querySelector('#firstpoint');
const point2=document.querySelector('#secondpoint');
const point3=document.querySelector('#thirdpoint');
const point4=document.querySelector('#fourthpoint');
const playto=document.querySelector('#points');
let p1data=0;
let WinningScore=0;
let flag=false;



playto.addEventListener('change',function(){
    WinningScore=parseInt(this.value);
    console.log(WinningScore);
    reset();
})
playerOne.addEventListener('click',function(){
    if(p1data !== WinningScore && flag===false){
    p1data+=1;
    p1Score.textContent=p1data;
    flag=false;
    }
    else {
        flag=true;
        p1Score.classList.add("winner");
        p2Score.classList.add("loser");
      
       
    }
})


let p2data=0;

playerTwo.addEventListener('click',function(){
    if(p2data !== WinningScore && flag===false){
    p2data+=1;
    p2Score.textContent=p2data;
    flag=false;
    }
    else {
        flag=true;
        p2Score.classList.add("winner");
        p1Score.classList.add("loser");
      
       
    }
})

resetbtn.addEventListener('click',reset);
 

function reset(){
    flag=false;
    p1data=0;
    p2data=0;
    p1Score.textContent=0;
    p2Score.textContent=0;
   resetColor();
}
function resetColor(){
    p1Score.classList.remove("winner");
    p2Score.classList.remove("loser");
    p1Score.classList.remove("loser");
    p2Score.classList.remove("winner");
}



