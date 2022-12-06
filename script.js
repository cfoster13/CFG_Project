function start(){
    document.getElementById("start").style.visibility="hidden"; // becomes hidden once the user has pressed start 
    document.getElementById("rock").style.visibility="visible"; // buttons become visable after pressing start 
    document.getElementById("paper").style.visibility="visible";
    document.getElementById("scissors").style.visibility="visible";

}

clickedHand=["<img src='rock.jpg' id='img1'>","<img src='paper.jpg' id='img1'>","<img src='scissors.jpg' id='img1'>" ]; // setting images & id for the left hand

clickedRightHand=["<img src='rock.jpg' id='img2'>","<img src='paper.jpg' id='img2'>","<img src='scissors.jpg' id='img2'>" ]; // setting images & id for the right hand

function game(position){
    document.getElementById("img1").style.animation='shakeLeft 1s 5 ease-in-out'; // applying animation to both hands for certain amount of time
    document.getElementById("img2").style.animation='shakeRight 1s 5 ease-in-out';

    var random=Math.floor(Math.random()*3); // using a random number generator 
    setTimeout(() => {
        document.getElementById("hand2").innerHTML=clickedRightHand[random]; // selects a random image for the right hand
        document.getElementById("hand1").innerHTML=clickedHand[position]; // selects a random image for the left hand
    }, 5000);
    setTimeout(() => {
        if(random==position){ // if the random image of left is the same as right then it's a tie
            alert("No one won!");
            window.location.reload();
        }
        else if(position==0 && random==2){ // player chooses rock and computer chooses scissors, player wins
            alert("You have won!");
            window.location.reload();
        }
        else if(position==1 && random==0){ // player chooses paper and computer chooses rock, player wins
            alert("You have won!");
            window.location.reload();
        }
        else if(position==2 && random==1){ // player chooses scissors and computer chooses paper, player wins
            alert("You have won!");
            window.location.reload();
        }
        else{
            alert("Bad luck, the computer won!"); // There's no other cases for the player to win, so the computer automatically wins
            window.location.reload();
        }
    }, 5500);
}
