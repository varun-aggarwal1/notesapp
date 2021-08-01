var array = [];
 const cellElements = document.querySelectorAll('.col');


//function to capture the right-click and turn the cell to !
function flag(element, index){
	if(element.innerHTML==""){
	element.innerHTML = "!";
	element.style.color = "red";
  }
}

//initialising values to array
for(var i = 0;i<81; i++){
	array[i] = i;
}

//counter to store the guesses
var ctr = 0;

//console.log(array);

var bomb = [];

//indices of array containing bomb 
function genrandom(){

for(var i = 0;i<9; i++){
	bomb[i] = Math.floor(Math.random() * 81);
}
}

genrandom();
//function to check if clicked index has a bomb
function isBomb(index){
	var flag = 0;
	for(var i = 0;i<9;i++){
		if(index==bomb[i]){
			flag = 1;
		}
	}
	if(flag==1){
		return true;
	}
	else{
		return false;
	}
}







//restart function
function restart(){
	document.getElementById("congo-banner").innerHTML = "";
	document.getElementById("score").innerHTML= "";
	enable();
	document.getElementById("win").classList.remove('show');
	ctr = 0;
    
  	for(var i=0;i<81;i++)
  {
  	document.getElementById(i).style.backgroundColor = "rgb(189, 191, 184)";
  	document.getElementById(i).innerHTML = "";
  }
  genrandom();
 
  
}


function checkRect(index){
	var c = 0;
  if(index%9==0&&index!=0){
	  	if(isBomb(index+1)){
	  		c++;
	  	}
	  	if(isBomb(index-9)){
	  		c++;
	  	}
	  	if(isBomb(index+9)){
	  		c++;
	  	}
	  	if(isBomb((index-9)+1)){
	  		c++;
	  	}
	  	if(isBomb((index+9)+1)){
	  		c++;
	  	}
  }

  else if(index%9==8&& index!=8){
  		if(isBomb(index-1)){
	  		c++;
	  	}
	  	if(isBomb(index-9)){
	  		c++;
	  	}
	  	if(isBomb(index+9)){
	  		c++;
	  	}
	  	if(isBomb((index-9)-1)){
	  		c++;
	  	}
	  	if(isBomb((index+9)-1)){
	  		c++;
	  	}

  }

  else if(index==0){
  	if(isBomb(index+1)){
  		c++;
  	}
  	if(isBomb(index+9)){
	  		c++;
	  }

	 if(isBomb((index+9)-1)){
	  		c++;
	  }
  }

  else if(index==8){
  	if(isBomb(index-1)){
	  		c++;
	  	}
	if(isBomb(index+9)){
	  		c++;
	  	}
    if(isBomb((index+9)-1)){
	  		c++;
	  }  
  }

  else{
  	if(isBomb(index+1)){
	  		c++;
	  	}
	  	if(isBomb(index-9)){
	  		c++;
	  	}
	  	if(isBomb(index+9)){
	  		c++;
	  	}
	  	if(isBomb((index-9)+1)){
	  		c++;
	  	}
	  	if(isBomb((index+9)+1)){
	  		c++;
	  	}
	  	if(isBomb(index-1)){
	  		c++;
	  	}
	  	if(isBomb((index-9)-1)){
	  		c++;
	  	}
	  	if(isBomb((index+9)-1)){
	  		c++;
	  	}
  }


  return c;
}


//to change the color of box which is not a bomb to green
function changeGreen(element, index){
	var x = 0;
	
	//check neighbors
	x = checkRect(index);
	element.style.backgroundColor = "green";
	element.style.color = "white";
	++ctr;
	element.innerHTML = x;
	document.getElementById("score").innerHTML = "SCORE: " + ctr;
}

//to change the color of all boxes of bomb cell to red
function changeRed(element){
  element.style.backgroundColor = "red";
  for(var i=0;i<9;i++)
  {
  	document.getElementById(bomb[i]).style.backgroundColor = "red";
  	//document.getElementById(bomb[i]).style.backgroundImage = "url('https://superawesomevectors.com/wp-content/uploads/2018/06/flat-bomb-icon-800x566.jpg')";

  }
  makeDisable();
  setTimeout(function(){ document.getElementById("congo-banner").innerHTML = "Game Over! Restart to play again";
  document.getElementById("win").classList.add('show'); }, 100);
  
   
}


//to show the winning message on the screen
function displayWin(){
	setTimeout(function(){ document.getElementById("congo-banner").innerHTML = "Congratulations!! You Have won the game, Restart to play again.";
 
     documentgetElementsByClassName("winning-message").classList.add('show'); }, 100);
  
}


//called when a cell is clicked
function change(element,index){
	if(element.innerHTML==""||element.innerHTML=="!"){
	if(ctr==72){
		makeDisable();
		displayWin();

	}
	else if(!isBomb(index)){
		changeGreen(element, index);
	}
	else{
		changeRed(element);
	}
}
}

function makeDisable(){
    for (var i = 0; i < array.length; i++) {
    	
    	document.getElementById(array[i]).classList.add("disabled");

    	}
}

function enable(){
   for (var i = 0; i < array.length; i++) {
    	
    	document.getElementById(array[i]).classList.remove("disabled");

    	}
}


