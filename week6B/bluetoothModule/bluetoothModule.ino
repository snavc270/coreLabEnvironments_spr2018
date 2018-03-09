#include <SoftwareSerial.h>
SoftwareSerial BT(8,9); 

void setup(){
  BT.begin(9600); 
  for(int i = 0; i<=3200; i++){
    BT.print("hola!"); 
    BT.println(i); 
    delay(50); 
  }
}

void loop(){
  
}

