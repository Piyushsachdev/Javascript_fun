let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","orange"];
let start=false;
let level=0;
 let x=0;//higest level
let h2=document.querySelector("h2");
document.addEventListener("keyup",function()
{
    if(start==false) //flag variable 
    {
        start=true;
     levelUp();
    }
})
function userBtnFlash(btn)

   { 
   btn.classList.add("userF");
    setTimeout(function()
{
    btn.classList.remove("userF")
},250);
}
function btnFlash(btn)
{
   btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash")
},350);



}
function levelUp()
{ userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIndex=Math.floor(Math.random()*4); //here we make the random index from btns array
    let randColor=btns[randomIndex]; //here we take store the name of that randomIndex which is class of one of the  button
    let randomBtn=document.querySelector(`.${randColor}`);//here we excess the element by ging the class name eg-.green
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randomBtn);

}
function checkAns(index){
    console.log(`current level is ${level}`);

    if(userSeq[index]==gameSeq[index]) //if both are on same index and press correct so come inside
    {// here two posiblility if the userSeq is at last then call the levelup() for new random value or leave it and angain push work and leangth increase and index modify
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp(),2000);
        }
    }
    else{
        h2.innerHTML=`Game is over!  final level is <big> ${level}<br> press any key to start`;
       
        if(x<level)
        {
            x=level;
        }  
         let h3=document.querySelector("h3");
         h3.innerHTML=`the Highest level is <b>${x}</b> till now`;
        reSet();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white"; 
        },1000);
    }
}

function btnPress() //here it will active when user press the button as it is in btn.addEventList
{
    let btn=this; // here we save the referance of that button object which is click
    
    userBtnFlash(btn);
    
    let userColor=btn.getAttribute("id"); //here id=color for the button press by user
       
     userSeq.push(userColor); //here each time we push and length increase

        checkAns(userSeq.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);//whenever any button is click this btn.addEvenList exicute for that button 
}
function reSet()
{     start=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}