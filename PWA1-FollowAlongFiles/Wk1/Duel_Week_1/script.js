/*
 Skyler Brown
 Week 1  ANALYZE Duel #1
 07/05/2014
 */



// self-executing function
(function(){ //this function contains all the other functions to run program.

    console.log("FIGHT!!!");// print "FIGHT" to console to check and make sure HTML and JS files are working together.

    //player name
    var playerOneName = "Spiderman";// name for player one as a variable for logic processes.
    var playerTwoName = "Batman";// name for player twp as a variable for logic processes.

    //player damage
    var player1Damage = 20;// player one max damage for logic processes
    var player2Damage = 20;// player two max damage for logic processes

    //player health
    var playerOneHealth = 100;// player one health for logic processes.
    var playerTwoHealth = 100;// player two health for logic processes.

    //initiate round
    var round=0;// round number set to zero for math function i++ will make round appear as 1 in the alert.

    function fight(){ //this function is the function to simulate fighting and rounds.
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);//print player names, life points, and round number to console making sure the files are working correctly.
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;// variable for min damage player 1 can deal 20 * .5 makes min damage 10.
            var minDamage2 = player2Damage * .5;// variable for min damage player 2 can deal 20 * .5 makes min damage 10.
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);// variable to determine how much damage to deal to player 1.
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);// variable to determine how much damage to deal to player 2.

            //inflict damage
            playerOneHealth-=f1;// new health reading for player 1.
            playerTwoHealth-=f2;// new health reading for player 2.

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);//print player names, life points, and round number to console making sure the files are working correctly.

            //check for victor
            var result = winnerCheck();// variable to check winner.
            console.log(result);//print result to console making sure files are working correctly.
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); // alert pop-up to player informing them on player name, player health, and round number.

            } else{
                alert(result);// alert pop-up letting player know the results of the round.
                break;
            };

        };
    };

    function winnerCheck(){ //this function is the winner check function and is outside the other functions 
        var result="no winner";// variable for logic process if no winner occurs.
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        return result;
    };

    /*******  The program gets started below *******/
    fight();

})();