let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let start=false;
let level=0;
document.addEventListener("keypress", function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelUp();
    }
   

})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
    
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
} 

let h2=document.querySelector("h2");
function levelUp(){
    userseq=[];
    level++;
    
    h2.innerText= `Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randclr=btns[randidx];
    let randbtn=document.querySelector(`.${randclr}`);
    
    gameseq.push(randclr);
    console.log(gameseq);
    btnFlash(randbtn);
}
    function checkAns(idx){
       //console.log("current level:",  level);
       
       if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
       }
       }  
       else{
        h2.innerHTML=`game over! your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250)

        reset()
       }
       
    }
function btnPress(){
    
    let btn=this;
    userFlash(btn);
    let userclr= btn.getAttribute("id");
    userseq.push(userclr);
    
    checkAns(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
 for(btn of allbtn){
    btn.addEventListener("click",btnPress);
 };
 function reset(){
    start=false;
     gameseq=[];
     userseq=[];

    level=0;
 }