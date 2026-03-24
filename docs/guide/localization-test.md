# Localization Test

The localization test allows you to preview your robot's localization system by verifying motor directions, encoder directions, and odometry pod configuration. You drive the robot around the field and compare your actual position to the coordinates reported by the localizer.

## What Does Localization Test Do?

- Verifies motor directions
- Verifies odometry pod offsets, directions, and pod type
- Verifies IMU direction if applicable

## How to Run

1. Open the `LocalizationTest` Op Mode on your Driver Station
2. Place your robot at the center of the field
3. Drive the robot forward — the X coordinate should increase
4. Drive the robot left — the Y coordinate should increase
5. Rotate the robot counterclockwise — the heading should increase



::: tip
Run this test **before** any other tuner. If something is off, every other tuner will produce bad results.
:::