//variable declarations 
var diceRollElement;

//write a function here to console log when the window is loaded 
function onWindowLoaded(event) {
	//here we are manipulating the dom
	//"document" specifies go into our html file
	//.getElementById searches for an html tag with the id "myButton"
	//we then set the value of this to myButton variable 
	var myButton = document.getElementById("myButton"); 
	myButton.addEventListener("click", onButtonClick); 
	
    console.log("loaded");
}


//all of our functions 
function onButtonClick(event) {
	//if a diceRollElement hasn't been created, then create one
	if (!diceRollElement) {
        createDiceElement();
    }

    //update the value of our dice roll 
    updateDiceValue();
}

function createDiceElement() {
	//we can also create elements in our DOM 
	//here we create an H1 tag to store the value of our dice roll 
	diceRollElement = document.createElement("h1");

	//we can also change the styling of the element using javascript 
	//use .style then .(the property that you want to change )
	diceRollElement.style.color = "red";
    diceRollElement.style.fontSize = "50px";

    //here we are appending the body of our html document 
   	//we use the appendChild function because the diceRollElement is nested inside our body tag
    document.body.appendChild(diceRollElement);

    //in conclusion here, we created an h1 tag called "diceRollElement"
    //edited its styling 
    //and then inserted it into the body tag of our html 
}

function updateDiceValue() {
	//use math to calculate a random value from 1-6 
	var diceRollValue = Math.random() * 6;
    diceRollValue = Math.floor(diceRollValue);
    diceRollValue++;

    //set the value of that random number to our diceRollElement tag 
    //the text of our h1 tag is set to our random number from 1-6 	
    diceRollElement.innerHTML = diceRollValue;
}

//here we add what is called an event listener and attach it to our browser window 
//once the browser is loaded, it will execute the function onWindowLoaded 
window.addEventListener("load", onWindowLoaded);

