#include <Servo.h>
#include <Wire.h>
#include <Adafruit_MotorShield.h>
#include <Adafruit_PWMServoDriver.h>
#include <SoftwareSerial.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

SoftwareSerial voiceSerial(10, 11);

Adafruit_MotorShield AFMS = Adafruit_MotorShield();
Adafruit_DCMotor *frontLeftMotor = AFMS.getMotor(1);
Adafruit_DCMotor *frontRightMotor = AFMS.getMotor(2);
Adafruit_DCMotor *backLeftMotor = AFMS.getMotor(3);
Adafruit_DCMotor *backRightMotor = AFMS.getMotor(4);
Adafruit_DCMotor *additionalLeftMotor = AFMS.getMotor(5);
Adafruit_DCMotor *additionalRightMotor = AFMS.getMotor(6);

const int buzzer = 9;
const int additionalMotorSwitchPin = 7;
Servo cameraServo;

const char *ssid = "YourWiFiSSID";
const char *password = "YourWiFiPassword";
const String serverUrl = "http://localhost:9000/api/rover-control";

void setup()
{
  AFMS.begin();
  frontLeftMotor->setSpeed(255);
  frontRightMotor->setSpeed(255);
  backLeftMotor->setSpeed(255);
  backRightMotor->setSpeed(255);
  voiceSerial.begin(9600);
  cameraServo.attach(9);

  // Set up additional motor switch
  pinMode(additionalMotorSwitchPin, INPUT);
  pinMode(buzzer, OUTPUT);


  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Initialize LiDAR, GPS, and computer vision components here
}

void loop()
{
  // Check for voice commands
  if (voiceSerial.available() > 0)
  {
    String voiceCommand = voiceSerial.readStringUntil('\n');
    processVoiceCommand(voiceCommand);
  }

  void checkServerCommands() {
  // Implement code to check for commands from the server
  // Example: You can use the HTTPClient to send a request to the server
  // and parse the response to get the rover control command.
  // Use the sendRoverControlRequest function for communication.
}

   checkServerCommands();

  // Implement autonomous navigation using computer vision, LiDAR, and GPS
  // Add code to handle motor control based on the autonomous navigation results

  // Check the additional motor switch state
  if (digitalRead(additionalMotorSwitchPin) == HIGH)
  {
    activateAdditionalMotors();
    additionalLeftMotor->setSpeed(255);
    additionalRightMotor->setSpeed(255);
  }
}

void processVoiceCommand(String command)
{
  command.toLowerCase();

  if (command.startsWith("hope"))
  {
    if (command.indexOf("move forward") != -1)
    {
      moveForward();
    }
    else if (command.indexOf("backward") != -1)
    {
      moveBackward();
    }
    else if (command.indexOf("turn right") != -1)
    {
      turnRight();
    }
    else if (command.indexOf("turn left") != -1)
    {
      turnLeft();
    }
    else if (command.indexOf("stop") != -1)
    {
      stop();
    }
    else if (command.indexOf("sound horn") != -1)
    {
      soundHorn();
    }
  }
  else if (command.startsWith("hope! this is lucky your master, good morning"))
  {
    greetMaster();
  }
}

void greetMaster()
{
  // Implement actions when the master is greeted
  // For example, you can make the rover respond in some way
}

void soundHorn()
{
  for (int i = 0; i < 3; ++i) {
    tone(buzzer, 1000);
    delay(3000);
    noTone(buzzer);
    delay(2000);
  }
}

void moveForward()
{
  frontLeftMotor->run(FORWARD);
  frontRightMotor->run(FORWARD);
  backLeftMotor->run(FORWARD);
  backLeftMotor->run(FORWARD);
}

void moveBackward()
{
  frontLeftMotor->run(BACKWARD);
  frontRightMotor->run(BACKWARD);
  backRightMotor->run(BACKWARD);
  backRightMotor->run(BACKWARD);
}

void turnLeft()
{
  frontLeftMotor->run(BACKWARD);
  frontRightMotor->run(FORWARD);
  backLeftMotor->run(BACKWARD);
  backRightMotor->run(FORWARD);
}

void turnRight()
{
  frontLeftMotor->run(FORWARD);
  frontRightMotor->run(BACKWARD);
  backLeftMotor->run(FORWARD);
  backRightMotor->run(BACKWARD);
}

void stop()
{
  frontLeftMotor->run(RELEASE);
  frontRightMotor->run(RELEASE);
  backLeftMotor->run(RELEASE);
  backRightMotor->run(RELEASE);
}

void activateAdditionalMotors()
{
  void moveForward()
  {
    additionalLeftMotor->run(FORWARD);
    additionalRightMotor->run(FORWARD);
  }
  void moveBackward()
  {
    additionalLeftMotor->run(BACKWARD);
    additionalRightMotor->run(BACKWARD);
  }
  void turnLeft()
  {
    additionalLeftMotor->run(BACKWARD);
    additionalRightMotor->run(FORWARD);
  }
  void turnRight()
  {
    additionalLeftMotor->run(FORWARD);
    additionalLeftMotor->run(BACKWARD);
  }
  void stop()
  {
    additionalLeftMotor->run(RELEASE);
    additionalRightMotor->run(RELEASE);
  }
}

void sendRoverControlRequest(String command)
{
  HTTPClient http;
  http.begin(serverUrl);
  http.addHeader("Content-Type", "application/json");
  String requestBody = "{\"command\": \"" + command + "\"}";
  int httpResponseCode = http.POST(requestBody);
  http.end();
}
