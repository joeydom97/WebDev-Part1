var button = document.querySelector("button");
var body = document.querySelector("body");
var test = false;
button.addEventListener("click", function(){
	if(test === false){
	body.style.background = "yellow";
	test = true;
	}
	else{
		body.style.background = "white";
		test = false;
	}
	
})