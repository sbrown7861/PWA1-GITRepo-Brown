/**
 * Created by skylerbrown on 9/16/14.
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

    var playerOne = ["Kratos","20","100" ];//array for player one info.

    var playerTwo = ["Kabal","20","100" ];//array for player two info.


    /*
     Inside arrays 0 is equal to the player name, 1 is equal to the damage they can deal,
     and 2 is equal to the players health.
     */






    //initiate round
    var round=0;// round number set to zero for math function i++ will make round appear as 1 in the alert.

    function fight(){ //this function is the function to simulate fighting and rounds.
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);//print player names, life points, and round number to console making sure the files are working correctly.
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5;// variable for min damage player 1 can deal 20 * .5 makes min damage 10.
            var minDamage2 = playerTwo[1] * .5;// variable for min damage player 2 can deal 20 * .5 makes min damage 10.
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);// variable to determine how much damage to deal to player 1.
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);// variable to determine how much damage to deal to player 2.

            //inflict damage
            playerOne[2]-=f1;// new health reading for player 1.
            playerTwo[2]-=f2;// new health reading for player 2.

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);//print player names, life points, and round number to console making sure the files are working correctly.

            //check for victor
            var result = winnerCheck();// variable to check winner.
            console.log(result);//print result to console making sure files are working correctly.
            if (result==="no winner")
            {
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]); // alert pop-up to player informing them on player name, player health, and round number.

            } else{
                alert(result);// alert pop-up letting player know the results of the round.
                break;//command to break out of loop.
            };

        };
    };

    function winnerCheck(){ //this function is the winner check function and is outside the other functions
        var result="no winner";// variable for logic process if no winner occurs.
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die";
        } else if(playerOne[2]<1){
            result =playerTwo[0]+" WINS!!!"
        } else if (playerTwo[2]<1)
        {
            result = playerOne[0]+" WINS!!!"
        };
        return result;// command to return result from loop. if this is missing no information can be taken from the loop.
    };

    /*******  The program gets started below *******/
    fight();//call command for the fight function.

})();