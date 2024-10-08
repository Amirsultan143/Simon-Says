let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let h2=document.querySelector('h2');
let btns=["red","yellow","green","purpel"];
let Press=document.querySelector('#btn');
//step1
Press.addEventListener('click',()=>{
    if(started==false){
        started=true;
        console.log("game was started");
        levelUp();
    }
});
//step2 flash
function gameFlash(Btn){
    // console.log("gameFlash",Btn);
    Btn.classList.add('flash');
    setTimeout(function(){
        Btn.classList.remove('flash');
    },250);
    
};

function userFlash(btn){
    // console.log("userflash",btn);
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250)
}
//step 3 levelincrese karna
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    //random flash;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};

//step4

function btnPress(){
    let btn=this;
    
    let userColor=btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);
    userFlash(btn);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
};

//step 6

function checkAns(idx){
    // let idx=level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,500)
        }
    }else{
        h2.innerHTML=`Game Over! Your Score Was <b>${level}</b> <br> Press Button To Start The Game`;
        document.querySelector('body').style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="black";
        },150);
        reset();
    }
}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}