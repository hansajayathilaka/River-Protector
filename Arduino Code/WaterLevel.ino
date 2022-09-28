int SensorPin= A0;
void waterLevel(){
  if (millis() - waterLevelTimer > 500){
    waterLevelTimer = millis();
    waterLevelVal = analogRead(SensorPin);
    Serial.print("Water Level : ");
    Serial.println(waterLevelVal);
  }
}
