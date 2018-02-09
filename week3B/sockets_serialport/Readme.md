Arduino side

1. Set up circuit according to diagram in project folder 
2. Upload Arduino code 

To setup your project folder 

1. cd theFolderYouWantToRun 
2. npm install 
3. npm install serialport 
4. npm install socket.io
(Only the first time. Once these modules are installed you don't need to install them again)


After modules are installed, run your server: 

1. cd theFolderYouWantToRun
2. Make sure your serialPort path is correct in your server.js file  
3. node server.js (or whatever your js file is named)
4. Navigate to your local host in your browser (localhost:8080)


Troubleshooting 

1. If you're having trouble connecting with socket connections, make sure your Serial monitor is not running in your Arduino IDE.
2. Check to see your serialPort path is correct in the server.js file. You can run the listPorts example to confirm your path. 
3. If you're not getting an output to Arduino, make sure everything is wired correctly (most common thing is switching power and ground) 