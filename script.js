
document.getElementById("red");
document.getElementById("yellow");
document.getElementById("green");


function green(){
    let green = document.getElementById("green");
     green.style.backgroundColor="rgb(48, 243, 48)";
     green.style.boxShadow="0px 0px 10px rgb(48, 243, 48), 0px 0px 20px rgb(48, 243, 48)"
}

green()

function yellow(){
    let green = document.getElementById("yellow");
     green.style.backgroundColor="yellow";
     green.style.boxShadow=" 0px 0px 10px yellow,  0px 0px 20px yellow "
}


function red(){
    let green = document.getElementById("red");
     green.style.backgroundColor="red";
     green.style.boxShadow="0px 0px 10px red,0px 0px 20px red"
}

