/**
 * Created by skylerbrown on 9/18/14.
 */

// self-executing function
(function(){ //this function contains all the other functions to run program.

    console.log("FIGHT!!!");// print "FIGHT" to console to check and make sure HTML and JS files are working together.

    /*  //player name
     var playerOneName = "Spiderman";// name for player one as a variable for logic processes.
     var playerTwoName = "Batman";// name for player twp as a variable for logic processes.

     //player damage
     var player1Damage = 20;// player one max damage for logic processes
     var player2Damage = 20;// player two max damage for logic processes

     //player health
     var playerOneHealth = 100;// player one health for logic processes.
     var playerTwoHealth = 100;// player two health for logic processes.

     */

  /*  var playerOne = ["Kabal","20","100" ];//array for player one info.

    var playerTwo = ["Kratos","20","100" ];//array for player two info. */


    /*
     Inside arrays 0 is equal to the player name, 1 is equal to the damage they can deal,
     and 2 is equal to the players health.
     */
var fighter1_txt =document.querySelector("#kratos").querySelector("p");
var fighter2_txt = document.querySelector("#kabal").querySelector("p");
var round_txt = document.querySelector("h5");
var button = document.getElementById("fight_btn");

    button.addEventListener("click",fight,false);
   var fighters =[{
        name:"kratos",

        health:"100",

        attack:"20"


    },

   {
        name:"kabal",

        health:"100",

        attack:"20"
    }];



    round_txt.innerHTML="Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML=fighters[0].name +":"+fighters[0].health;
    fighter2_txt.innerHTML=fighters[1].name +":"+fighters[1].health;



    //initiate round
    var round=0;// round number set to zero for math function i++ will make round appear as 1 in the alert.

    function fight(){

        //alert for fighters names and health.
        fighter1_txt.innerHTML=fighters[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML=fighters[1].name + ":" + fighters[1].health;

        //determines damage dealt.
        var f1 = Math.floor(Math.random() *fighters[0].attack + fighters[0].attack *.5);
        var f2 = Math.floor(Math.random() *fighters[1].attack + fighters[1].attack *.5);

        //inflicts random damage.
        fighters[0].health -= f1;
        fighters[1].health -= f2;

        //checks for winner.
        var results= winnerCheck();

        round_txt.innerHTML = "Round #" + round + "Results:";
        round++;
        if (results === "No Winner")
        {
            fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
        }else {
            fighter1_txt.innerHTML = results;
            fighter2_txt.innerHTML = "";

            //disable button.
            button.removeEventListener("click", fight, false);
            while(button.disabled = true) {

                document.querySelector('buttonblue').innerHTML = "DONE!";


            }

        }

        document.querySelector('buttonblue').innerHTML = "DONE!";
    }

    function winnerCheck(){
        var results = "No Winner";
        if(fighters[0].health < 1 && fighters[1].health < 1)
        {
            results = "You Both Die!";
        }else if(fighters[0].health < 1){
            results= fighters[1].name + " WINS!"
        } else if (fighters[1].health <1)
        {
            results = fighters[0].name + " WINS!"
        }
       return results;


    }
    })();