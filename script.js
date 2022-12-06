function start(){
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("rock").style.visibility="visible";
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissors").style.visibility="visible";

}

clickedHand=["<img src='rock.jpg' id='img1'>","<img src='paper.jpg' id='img1'>","<img src='scissors.jpg' id='img1'>" ];

clickedRightHand=["<img src='rock.jpg' id='img2'>","<img src='paper.jpg' id='img2'>","<img src='scissors.jpg' id='img2'>" ];

function game(position){
    document.getElementById("img1").style.animation='shakeLeft 1s 5 ease-in-out';
    document.getElementById("img2").style.animation='shakeRight 1s 5 ease-in-out';

    var random=Math.floor(Math.random()*3);
    setTimeout(() => {
        document.getElementById("hand2").innerHTML=clickedRightHand[random];
        document.getElementById("hand1").innerHTML=clickedHand[position];
    }, 5000);
    setTimeout(() => {
        if(random==position){
            alert("No one won!");
            window.location.reload();
        }
        else if(position==0 && random==2){
            alert("You have won!");
            window.location.reload();
        }
        else if(position==1 && random==0){
            alert("You have won!");
            window.location.reload();
        }
        else if(position==2 && random==1){
            alert("You have won!");
            window.location.reload();
        }
        else{
            alert("Bad luck, the computer won!");
            window.location.reload();
        }
    }, 5500);
}