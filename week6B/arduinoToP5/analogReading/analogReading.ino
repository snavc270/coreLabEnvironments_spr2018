void setup() {
 Serial.begin(9600); // initialize serial communications @ 9600
}
 
void loop() {
 int potentiometer = analogRead(A0);                  // read the input pin
 int mappedPot = map(potentiometer, 0, 1023, 0, 255); // remap the pot value to fit in 1 byte
 //Serial.write(mappedPot);                             // write mappedPot value to the serial port (1 byte)
 Serial.println(potentiometer);                // *or* use println to print out raw potentiometer value with newline as data separator
                                  // slight delay to stabilize the ADC
}
