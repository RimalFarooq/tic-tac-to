// access (all)is necessary to access class
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnO= true;// variable//define globally
let messContainer=document.querySelector(".mess-container");
let newGame=document.querySelector("#new-game");
let mess=document.querySelector("#mess");
// 2D array (start box1 from 0 index)
const winPatteren = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
// reset or new game
const resetGame=()=>{
  turnO=true;
  enableBtn();
  messContainer.classList.add("hide");
}
// add event on each button(foreach loop with arrow function)
boxes.forEach((index)=>{
  index.addEventListener("click", () =>{
    // console.log("clicked");
    // logic for players turn alternate turns 1time x 1time o

    if(turnO){
        index.innerText="O";
        turnO = false;
    }else{
        index.innerText="X";
        turnO = true;
    }
    index.disabled=true;
    // function call 
    checkWinner();
  })
});
//function for after 1 winner all buttons will disabled
const disableBtn=()=>{
  for(let box of boxes){
   box.disabled=true;
  }
}
// now for reset or new game
const enableBtn=()=>{
  for(let box of boxes){
   box.disabled=false;
   box.innerText="";
  }
}

// after win game text will show
const showWinner=(winner)=>{
  mess.innerText=`Congratulation Winner is, ${winner}`;//paragraph text change
  messContainer.classList.remove("hide");
  // call function
  disableBtn();
}
// function for check winner
let checkWinner=()=>{
  for(let patteren of winPatteren){
    // at every patteren we will check it match the 3 position condition like 012 is winner patteren 
    //if this is not check another
    // just patteren will print whole array(all conditions of winning)//patteren at 0 index means 
    //it will print individual element  at zero index then at 1 then at 2 and so on....
   //all winning condition link with every single button
   let pos1=boxes[patteren[0]].innerText//position1
   let pos2=boxes[patteren[1]].innerText//position2
   let pos3=boxes[patteren[2]].innerText//position3
   //any position should not be equal to empty 
   if(pos1!="" && pos2!="" && pos3!=""){
    if(pos1==pos2 && pos2==pos3){
      //  console.log("WINNER",pos1);//pos1,pos2,pos3 all will consider winner after meet condition
      //  function call
       showWinner(pos1);
    }
   }
  }
}
// reset function will triger. when we will click on buttons of reset and newgame

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);






