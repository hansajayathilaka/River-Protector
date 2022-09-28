void waterFlow ()
{
  currentTime = millis();
  // Every second, calculate and print litres/hour
  if (currentTime >= (cloopTime + 1000))
  {
    cloopTime = currentTime; // Updates cloopTime
    if (flow_frequency != 0) {
      // Pulse frequency (Hz) = 7.5Q, Q is flow rate in L/min.
      l_minute = (flow_frequency / 7.5); // (Pulse frequency x 60 min) / 7.5Q = flowrate in L/hour
      Serial.print("Rate: ");
      Serial.print(l_minute);
      Firebase.setInt("FlowSpeed", l_minute);
      Serial.println(" L/M");
      l_minute = l_minute / 60;
      vol = vol + l_minute;
      Serial.print("Vol:");
      Serial.print(vol);
      flow_frequency = 0; // Reset Counter
      Serial.print(l_minute, DEC); // Print litres/hour
      Serial.println(" L/Sec");
    }
    else {
      Serial.print("flow ");
      Serial.println( flow_frequency );
      Firebase.setInt("FlowSpeed", flow_frequency);
      Serial.print("Vol:");
      Serial.println(vol);
    }
  }
}
