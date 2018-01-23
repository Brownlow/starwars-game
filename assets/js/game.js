//set variables



players = [
	{
		"name": "chewy",
		"img": "./assets/images/chewy.jpg",
		"HealthPoints": 200,
		"AttackPower": 8,
		"CounterAttackPower": 10
	},
	{
		"name": "jarjar",
		"img": "./assets/images/jarjar.jpg",
		"HealthPoints": 200,
		"AttackPower": 6,
		"CounterAttackPower": 5
	},
	{
		"name": "yoda",
		"img": "./assets/images/yoda.jpg",
		"HealthPoints": 200,
		"AttackPower": 4,
		"CounterAttackPower": 50
	},
	{
		"name": "jabba",
		"img": "./assets/images/jabba.jpg",
		"HealthPoints": 200,
		"AttackPower": 2,
		"CounterAttackPower": 20
	},
]


// Set global variables ----------------------------------------------
var player 
var opponent 
var playerChosen = false;
var fighters = 0;



// Create Players ----------------------------------------------------


// Build each character and add their attributes
for (i=0; i<players.length; i++){

	var player = $("<img>");
	player.addClass("img-thumbnail");
	player.attr("data-name", players[i].name);
	player.attr("data-healthPoints", players[i].HealthPoints);
	player.attr("data-attackPower", players[i].AttackPower);
	player.attr("data-CounterPower", players[i].CounterAttackPower);
	player.attr('src', players[i].img);
	player.html('<h5 class="card-title">' + players[i].name + '</h5>');

	player.text($(this).attr("data-name"));
    $(".card-title").append(player);

	
	$("#characters").append(player);

}



// Set up Game Page ----------------------------------------------------

//Load intro text
$('#gameText').html('STEP 1: Choose Your Player to begin');


// click function to choose player and opponent
$(".img-thumbnail").on('click', function(){

	// set up chosen var for choosplayer function
    var chosen = this;
    choosePlayer(chosen);
});

// Chooose player - if player chosen choose opponent
function choosePlayer(chosen){

 	if (playerChosen === false){

			// append new div to fightscene
			$("#fightScene").append(chosen);

			//Change game text to select opponent
			$('#gameText').html('STEP 2: Choose Your Opponent');

			// set playerchosen to true
			playerChosen = true;
			
			console.log(chosen);
			myPlayer = chosen;

			fighters++;


		
	}

	else{ 
		
		console.log(chosen)

		// append new div to fightscene
		$("#fightScene").append(chosen);
			
		myOpponent = chosen;
		fighters++;

	}

	if(fighters = 2){
		// dont allow any more clicks 
	}
		
}

$('#attackButton').on('click', function(){

	console.log($(myOpponent).attr("data-healthPoints"));

	$(myOpponent).attr("data-healthPoints") -20;
	console.log($(myOpponent).attr("data-healthPoints"));


	$(myPlayer).attr("data-attackPower")++
	console.log($(myPlayer).attr("data-attackPower"));

})


