var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var playingTo = document.querySelector("#playingTo");
var reset = document.querySelector("#r");
var p = document.querySelector("#playDisplay");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;





r.addEventListener("click", function(){
	resets();
});


p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score === winningScore){
			gameOver = true;
			p1Display.classList.toggle("win");
		}
		
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score === winningScore){
			gameOver = true;
			p2Display.classList.toggle("win");
		}
}
});

playingTo.addEventListener("change", function(){
	winningScore = Number(playingTo.value);
	p.textContent = playingTo.value;
	resets();

});


function resets(){
	gameOver = false;
	if(p1Score === winningScore){
			p1Display.classList.toggle("win");
		}
	if(p2Score === winningScore){
			p2Display.classList.toggle("win");
		}	

		p2Score = 0;
		p1Score = 0;
		p1Display.textContent = p1Score;
		p2Display.textContent = p2Score;
}