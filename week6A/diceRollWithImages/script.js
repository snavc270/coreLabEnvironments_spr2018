
function onWindowLoaded(event){
	var myButton = document.getElementById("myButton");
	myButton.addEventListener("click", onButtonClick);
	console.log("loaded"); 

	loadImages(images);
}

var images = [
	"assets/0.jpg",
	"assets/1.jpg",
	"assets/2.jpg",
	"assets/3.jpg",
	"assets/4.jpg",
	"assets/5.jpg"
];

function loadImages(imgArr, targetId){
    for(var i=0; i< imgArr.length; i++) {
        console.log(imgArr[i]);
        var img = new Image();
            img.src = imgArr[i];
    }
}


function onButtonClick(event){
	//update the value of our dice roll
	if(!diceRollElement){
		createdDiceElement();
	} 
	updateDiceValue(); 
}
var diceRollElement; 

function createdDiceElement(){
	diceRollElement = document.createElement("img");
	diceRollElement.style.color = "blue"; 
	diceRollElement.style.fontSize = "24px"; 
	document.body.appendChild(diceRollElement); 
}

function updateDiceValue(){
	var diceRollValue = Math.random()*6;
	diceRollValue = Math.floor(diceRollValue); 

	for(var i = 0; i<images.length; i++){
		diceRollElement.src = images[diceRollValue]; 
	}

}

window.addEventListener("load", onWindowLoaded);