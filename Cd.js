var character = document.getElementById('character');
var block     = document.getElementById('block');
var animate   = document.getElementById('animate')
var counter =0;
function jump(){
	if (character.classList.add == animate) {return}
	character.classList.add("animate");
	setTimeout(function (){
		character.classList.remove("animate");
	}, 300);
}

var checkDead = setInterval(function(){
	var characterTop = 
	parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockLeft = 
	parseInt(window.getComputedStyle(block).getPropertyValue("left"));

   if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
             block.style.animation = "none";
             block.style.display = "none";
             alert("Game over Score: " +Math.floor(counter/100));
             counter = 0;
             block.style.animation = "block 1s infinite linear";
   }
   else{
   	counter++;
   	document.getElementById("scorespan").innerHTML = Math.floor(counter/100);
   }
}, 10)