//set variables



players = [
	{
		"name": "Chewy",
		"img": "./assets/images/chewy.jpg",
		"HealthPoints": 200,
		"AttackPower": 18,
		"CounterAttackPower": 10
	},
	{
		"name": "Barf",
		"img": "./assets/images/mog.jpg",
		"HealthPoints": 200,
		"AttackPower": 20,
		"CounterAttackPower": 5
	},
	{
		"name": "Jarjar",
		"img": "./assets/images/jarjar.jpg",
		"HealthPoints": 200,
		"AttackPower": 20,
		"CounterAttackPower": 5
	},
	{
		"name": "LoneStar",
		"img": "./assets/images/hans.jpg",
		"HealthPoints": 200,
		"AttackPower": 20,
		"CounterAttackPower": 5
	 },
	 {
	 	"name": "Yoda",
	 	"img": "./assets/images/yoda.jpg",
	 	"HealthPoints": 200,
	 	"AttackPower": 24,
	 	"CounterAttackPower": 50
	 }//,
	// {
	// 	"name": "Lord Helmet",
	// 	"img": "./assets/images/lord-helmet.jpg",
	// 	"HealthPoints": 200,
	// 	"AttackPower": 20,
	// 	"CounterAttackPower": 5
	// },
	// {
	// 	"name": "Jabba",
	// 	"img": "./assets/images/jabba.jpg",
	// 	"HealthPoints": 200,
	// 	"AttackPower": 12,
	// 	"CounterAttackPower": 20
	// },
	// {
	// 	"name": "Pizza The Hut",
	// 	"img": "./assets/images/pizza-the-hut.jpg",
	// 	"HealthPoints": 200,
	// 	"AttackPower": 12,
	// 	"CounterAttackPower": 20
	// }
]


// Set global variables ----------------------------------------------
var player ;
var opponent ;
var playerChosen = false;
var chosen;
var opponentHealth;
var myHealth;
var myOpponent;
var myAttackPower;
var opponentAttackPower;
var myCounterAttackPower;
var opponentCounterAttackPower;
var opponentsKilled = 0;



// Create Players ----------------------------------------------------


// Build each character and add their attributes
for (i=0; i<players.length; i++){
	var playerHouse = $('<div>');
	var player = $("<img>");
	playerHouse.addClass("img-thumbnail hero ");
	playerHouse.addClass(players[i].name);
	playerHouse.attr("data-name", players[i].name);
	playerHouse.attr("data-healthPoints", players[i].HealthPoints);
	playerHouse.attr("data-attackPower", players[i].AttackPower);
	playerHouse.attr("data-CounterPower", players[i].CounterAttackPower);
	player.attr('src', players[i].img);
	playerHouse.append(player)
	playerHouse.append('<h5 class="card-title">' + players[i].name + '</h5>');
	playerHouse.append('<h5 class="players-health"> Health: ' + players[i].HealthPoints + '</h5>');
	

	// player.text($(this).attr("data-name"));
    // $(".card-title").append(player);

	
	$("#characters").append(playerHouse);

}



// Set up Game Page ----------------------------------------------------

//Load intro text
$('#gameText').html('STEP 1: Choose Your Player to begin');


// click function to choose player and opponent
$(".hero").on('click', function(){

	// set up chosen var for choosplayer function
    chosen = this;
    choosePlayer(chosen);
});

// Chooose player - if player chosen - choose opponent
function choosePlayer(chosen){

 	if (playerChosen === false){

			// append new div to fightscene
			$("#fightScene").append(chosen);

			//Change game text to select opponent
			$('#gameText').html('STEP 2: Choose Your Opponent');

			// set playerchosen to true
			playerChosen = true;
			
			// console.log(chosen);
			myPlayer = chosen;

			// set data attributes of dom elements to variables
			myHealth = $(myPlayer).attr("data-healthPoints");
			myAttackPower = $(myPlayer).attr("data-attackPower");
			myCounterAttackPower = $(myPlayer).attr("counterPower");

	} else{ 
		
		// append new div to fightscene
		$("#fightScene").append(chosen);

		// set myopponent equal to the one the user chose	
		myOpponent = chosen;

		//Change game text to select opponent
		$('#gameText').html('STEP 3: Use the Kill Button To... KILL YOUR OPPONENT!');

		// set data attributes of dom elements to variables
		opponentHealth = $(myOpponent).attr("data-healthPoints");
		opponentAttackPower = $(myOpponent).attr("data-attackPower");
		opponentCounterAttackPower = $(myOpponent).attr("counterPower");

	}
		
}



$('#attackButton').on('click', function(){


	// Attack Opponent
	opponentHealth -= myAttackPower;
	$('#fightScene .' + $(myOpponent).attr("data-name") + ' .players-health').html('Health: ' + opponentHealth);

	// Opponent Counter Attack
	myHealth -= opponentAttackPower;
    $('#fightScene .' + $(myPlayer).attr("data-name") + ' .players-health').html('Health: ' +  myHealth);

	if(myHealth <= 0){

		// Change game text
		$('#gameText').html('GAME OVER - YOU LOOSE');

		// Turn of attack button
		$("#attackButton").off("click");

	} else if (opponentHealth <= 0){

		// Change game text
		$('#gameText').html('YOU WIN! - SELECT NEW OPPONENT');

		// turn off attack button to end game
		$('#attackButton').off("click");

		// Remove dead opponent
		$("." + $(myOpponent).attr("data-name")).css("display", "none");

		// Reset Health to 100%
		$('#fightScene .' + $(myPlayer).attr("data-name") + ' .players-health').html('Health: ' + $(myPlayer).attr("data-healthPoints"));

		opponentsKilled ++;

	}

})


// } else if(opponentsKilled > 0){

// 		console.log(opponentsKilled);
// 		$('#attackButton').on("click");
// 		choosePlayer(chosen);

// 	} else if (opponentsKilled === 3){
		
// 		$('#gameText').html(' ');
// 		$("#characters").html(' ');
// 		$('#fightScene').html('<h1>You own this Galaxy, on to the next</h1>');






// - replay match
// - repeat

// if my Player wins all matches 
// - Game over - you win!

