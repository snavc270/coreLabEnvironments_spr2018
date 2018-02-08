int switchState = 0;
int lastSwitchState=0;
int ledPin = 13;
int switchPin=2;

void setup() {
  
  Serial.begin(9600);
  
  pinMode(ledPin,OUTPUT);
  pinMode(switchPin,INPUT);

  
  
}

void loop() {

        switchState = digitalRead(switchPin);

        Serial.println(switchState);
//
//        if (switchState == 0){
//          Serial.println("on"); //print the state to serial
//        }else{
//          Serial.println("off");
//        }
      
//    if(Serial.available()){
//
//        
//
//    
//    char inByte = Serial.read();
//    
//    // mousedown event
//    if(inByte=='1'){
//      
//    
//      digitalWrite(ledPin, HIGH);
//
//    }
//    
//    // mouseup event
//    else if(inByte=='0'){
//      
//      // send the color to the browser, then turn the LED off
//  
//      digitalWrite(ledPin, LOW);
//
//
//    }
//  }


}
