//START WITH THIS EXAMPLE FILE 
//Step 1. 
//Lists Serialports available

var SerialPort = require('serialport');
SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName); //prints each port to console. 
  });
});

//Step 2. 
// Choose the correct serialport from the list.
// Copy the serial port patch and replace '/dev/cu.usbmodem1411'
// with yours.
// Uncomment the following code, and restart the server.



var port = new SerialPort('/dev/tty.usbmodem1411', { //paste your port path here
  baudRate: 9600,
  parser: new SerialPort.parsers.Readline('\n')
});
//this won't print anything now because we haven't sent anyting to our serial port 
port.on('data', function (data) {
  console.log('Data: ' + data);
});
