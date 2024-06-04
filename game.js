let boxtext = document.querySelectorAll(".box");
let winner=document.querySelector(".winner");
let hiden=document.querySelector(".hide");
let re=document.querySelector(".reset")
let turno = true;
let count = 0;

boxtext.forEach((box) => {
  box.addEventListener("click", () => {
    if(turno){
      box.innerText="O";
      turno=false;
    }
    else{
    box.innerText = "X";
    turno=true;
    }
    box.disabled=true;
    count++;
    let iswin=checkWinner();
    if(count==9 && !iswin){
      gamedraw();
    }
  });
});

const Pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner=()=>{
  Pattern.forEach((pat) => {
    const pos1=boxtext[pat[0]];
    const pos2=boxtext[pat[1]];
    const pos3=boxtext[pat[2]];
    if(pos1.innerText!="" && pos2.innerText!="" && pos3.innerText!="") {
    if(pos1.innerText===pos2.innerText && pos3.innerText===pos2.innerText){
       showwin(pos1.innerText);
       return true;
    } 
  }
  });
};

const showwin=(person)=>{
    winner.innerText=`${person} is the winner`;
    hiden.classList.remove("hide");
    disable();
}

const reclick=()=>{
  boxtext.forEach((box)=>{
    box.innerText="";
    count=0;
    hiden.classList.add("hide");
    enable();
  })
}
re.addEventListener('click',reclick)

const enable=()=>{
  boxtext.forEach((box)=>{
    box.disabled=false;
  })
}

const disable=()=>{
  boxtext.forEach((box)=>{
    box.disabled=true;
  })
}

const gamedraw=()=>{
         winner.innerText="It's a Draw";
         hiden.classList.remove("hide");
         disable();
}