var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
var SerialPort = require('serialport');
var serialVal;

const Readline = SerialPort.parsers.Readline; //how to read raw data
//add your path to the serialport
const mySerialPort = new SerialPort('/dev/cu.usbmodem1411' , {baudRate:9600}); 
const parser = mySerialPort.pipe(new Readline({ delimiter: '\n' })); //try adding different delimiter;
//the delimiter is where your parser will split your data 

//show to see raw bytes
//mySerialPort.on('data', console.log); 

parser.on('data', dataToSerialVal); 


function dataToSerialVal(data){
 	serialVal= data.toString();
 	console.log(serialVal);
 }


server.listen(port, function(){
	console.log('Server listening on ' + port);
});

io.on('connection',function(client){
	console.log('Socket connected...');
	client.emit('messages', {serialValue: serialVal});//inital value
	client.on('getSerialVal', function(){
		client.emit('messages', {serialValue: serialVal});

	});

});

app.get('/', function(req,res){
	console.log('serving index.html');
	res.sendFile(__dirname + '/digitalRead.html');

});

