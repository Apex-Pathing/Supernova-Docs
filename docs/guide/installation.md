# Installing Apex Pathing

## Prerequisites
* Your robot must have a common drivetrain option. Holonomic options supported are Swerve or Mecanum. Tank drive is also supported, but it will not unlock the full potential of Apex Pathing
* A localization system: We currently support Gobilda Pinpoint, Three Wheel Localizer, and 2 Wheel + IMU Localizer
* Must have Android Studio and be comfortable coding in java or kotlin.
* Patience to tune the pathing library

## Adding Apex Pathing to your existing repository
Add Jitpack to your `build.gradle` repositories:
```java 
repositories {
    maven { url 'https://jitpack.io' }
}
```
add the dependency:
```java 
dependencies {
    implementation 'com.github.MooseX-Pathing:ApexPathing:TAG'
}
```
Replace TAG with a release tag or commit hash. Make sure to Gradle sync afterwards.

## Fork the quickstart
You can also fork the quickstart to quickly gain access if you want to test Apex Pathing or start a new project.
**This option is currently unsupported as we are still developing and Apex Pathing is still in beta**



