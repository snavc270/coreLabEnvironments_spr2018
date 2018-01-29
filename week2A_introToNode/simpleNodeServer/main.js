//loads the http module from the already installed node package
var http = require("http"); 

//specify what port we want to listen to 
const PORT=8080; 

//create a function to handle our request and response (remember our client, server diagram!)
var count = 0; 
function handleRequest(request, response){
    response.end('It works!! Path Hit: ' + request.url);

    count ++ ; 
    console.log("I am refreshed " + count + " times!");
    //why does it count by two's? 
}

//create our local server 
var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	//creates a listening event on our server
	//when our server has connected with our port (establish connection with the server and client)
	//--> then execute our function 
	//simple function of console logging 
	//to see if this is working, navigate to your http://localhost:8080

	//this message will appear on your terminal window
    console.log("Server listening on: http://localhost:%s", PORT);
});
