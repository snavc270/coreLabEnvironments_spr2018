{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf820
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 Here are all of the serial communication tools to connect your Arduino to your local web browsers. \
\

\fs48 Browser side \

\fs24 \
To setup your project folder \
1. cd theFolderYouWantToRun \
2. npm install \
3. npm install serialport \
4. npm install socket.io\
(Only the first time. Once these modules are installed you don\'92t need to install them again)\
\
After modules are installed, run your server: \
1. cd theFolderYouWantToRun\
2. Make sure your serialPort path is correct in your server.js file  \
2. node server.js (or whatever your js file is named)\
\

\fs48 Arduino side\

\fs24 \
1. Set up circuit according to diagram in project folder \
2. Upload Arduino code \
\

\fs48 Troubleshooting \

\fs24 If you\'92re having trouble connecting with socket connections, make sure your Serial monitor is not running in your Arduino IDE. \
\
2. Check to see your serialPort path is correct in the server.js file. You can run the listPorts example to confirm your path. \
\
3. If you\'92re not getting an output to Arduino, make sure everything is wired correctly (most common thing is switching power and ground) }