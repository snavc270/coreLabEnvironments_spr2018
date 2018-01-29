//we use the exports function to create a function that is accesible to all modules in our program 
//similar to create a public variable or function 
//we create a simple console.log function, but you can excecute whatever javascript you need in this function 

exports.world = function(){
	console.log('Hello World'); 

	//simple equation; exactly the same as we typed directly into the terminal 
	var x = 20; 
	var y = 10; 
	console.log(x + y); 
}