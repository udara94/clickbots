var score = 0;
var height;
var width;
var hello;
var count=60;

function buttonGame() {

    document.getElementById("scoreLabel").innerHTML = score;

    height = window.innerHeight;
    width = window.innerWidth;
    document.getElementById("clickMe").style.top = height / 2 + "px";
    document.getElementById("clickMe").style.left = width / 2 + "px";

    hello= setInterval(startCounter,1000)

}

function startCounter(){

    
    document.getElementById('time').innerHTML=count+' seconds'
    count=count-1;
    if(count<0){
        clearInterval(hello);
        alert("game Over")
    }

}

function calculateScore() {

    score = score + 10;
    document.getElementById("scoreLabel").innerHTML = score;

}

function myfuction() {


    height = Math.random() * window.innerHeight-100;
    width = Math.random() * window.innerWidth-100;
    

    if (height<0||width<0) {
        width = width + 100;
        height = height + 100;
        console.log("if condition")
    }

    document.getElementById("clickMe").style.top = height + "px";
    document.getElementById("clickMe").style.left = width + "px";
    console.log(document.getElementById("clickMe").style.top = height + "px");
    console.log(document.getElementById("clickMe").style.left = width + "px");
    console.log(window.innerHeight);
    console.log(window.innerWidth)
    calculateScore();

}


