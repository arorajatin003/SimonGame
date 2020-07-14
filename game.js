var randomColor =["red", "yellow", "green", "blue"];
var userClickedPattern = [];
var colorParten =[];

var starter = false;
var level = 0;

document.addEventListener("keypress", start);

//var random = randomNumber(leval);


function start(){
	if(!starter){
		leval=1;
		main();
		starter = true;
	}

}

$(".btn").click(function(){
		var userChosenColour = $(this).attr("id");
 		userClickedPattern.push(userChosenColour);

  		playSound(userChosenColour);
  		animatePress(userChosenColour);

	 	checker(userClickedPattern.length-1);
	});

function checker(currentLeval){	
	if(userClickedPattern[currentLeval] === colorParten[currentLeval]){
		if(userClickedPattern.length ===colorParten.length){
				setTimeout(function(){
				leval++;
				main();
				}, 1000);
		}
	
	}else{
		userClickedPattern = [];
		gameOver();
	}
	 
}


function main(){
	userClickedPattern =[];
	$("h1").text("Leval "+leval);
	var newRandom = Math.floor(Math.random()*4);
	colorParten.push(randomColor[newRandom]);	
	$("."+randomColor[newRandom]).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomColor[newRandom]);
	
}
function startOver(){
	starter = false;
	leval = 0;
	colorParten =[];	
}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function gameOver() {
	var wrong = new Audio("sound/"+wrong+".mp3");
	wrong.play();	
	$("h1").text("GAME OVER!!  Press a key to restart.");
	$("body").addClass("gameOver");
	setTimeout(function(){ 
		$("body").removeClass("gameOver");	
	}, 200);
	startOver();
}

