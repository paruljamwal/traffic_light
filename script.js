
document.getElementById("red");
document.getElementById("yellow");
document.getElementById("green");

function start(){
    green();
}

function green(){
    let secs = document.getElementById("secs").value;

    let green = document.getElementById("green");
    let red = document.getElementById("red");

     green.style.backgroundColor="rgb(48, 243, 48)";
     green.style.boxShadow="0px 0px 10px rgb(48, 243, 48), 0px 0px 20px rgb(48, 243, 48)"
    setTimeout(yellow,secs);
    red.style.backgroundColor="black";
    red.style.boxShadow="none";

    }


function yellow(){
    let secs = document.getElementById("secs").value;
    let yellow = document.getElementById("yellow");
    let green = document.getElementById("green");

     yellow.style.backgroundColor="yellow";
     yellow.style.boxShadow=" 0px 0px 10px yellow,  0px 0px 20px yellow "
     green.style.backgroundColor="black";
     green.style.boxShadow="none";
     setTimeout(red,secs);
    
    }


function red(){
    let secs = document.getElementById("secs").value;
    let red = document.getElementById("red");
    let yellow = document.getElementById("yellow");

     red.style.backgroundColor="red";
     red.style.boxShadow="0px 0px 10px red,0px 0px 20px red"
     yellow.style.backgroundColor="black";
     yellow.style.boxShadow="none";
     setTimeout(green,secs);

    }


