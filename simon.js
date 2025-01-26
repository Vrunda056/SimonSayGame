let start = false;
let level =0;
let newh2 = document.createElement('h2');

let gameseq = [];
let userseq = [];
let arr = [0];
let color = ["blue","pink","purple","orange"];

document.addEventListener("keypress", function(){
    if(start ==false){
        start =true;
        levelup();
    }
});

function levelup(){
    userseq=[];
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 3);
    let btncolor = color[random];
    gameseq.push(btncolor);
    console.log(gameseq);
    btnflash(btncolor);
}

function btnflash(btncolor){
    let btn = document.querySelector(`.${btncolor}`);
    btn.classList.add("white");
    setTimeout( function(){
        btn.classList.remove("white");
    }, 200);
}

function btnpress(){
    userseq.push(this.id);
    console.log(userseq);
    check(userseq.length-1);
}

let allbtns = document.querySelectorAll('.btn');
for(i of allbtns){
    i.addEventListener("click",btnpress);
}


function check( ind){
    if( gameseq[ind]===userseq[ind]){
        if(gameseq.length == userseq.length){
            setTimeout(levelup , 250);
        }
    }
    else{
        let h2 = document.querySelector("h2");
        h2.innerHTML = `GAME OVER!<br> <spam> Your score was ${level} </spam> <br> Press any key to start game `;
        arr.push(level);
        let score = Math.max(...arr);
        newh2.innerText = `Highest score was ${score}`;
        let box = document.querySelector(".box");
        box.insertAdjacentElement('afterend',newh2);

        reset();
    
        let body = document.querySelector("body");
        body.classList.add("red");
        setTimeout( function(){
            body.classList.remove("red");
        }, 250);
    }
}

function reset(){
    start = false;
    level = 0;
    gameseq = [];
    userseq = [];
}