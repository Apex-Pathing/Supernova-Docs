# Localization Test

The localization test allows you to preview your robot's localization system by verifying motor directions, encoder directions, and odometry pod configuration. You drive the robot around the field and compare your actual position to the coordinates reported by the localizer.

## What It Tests

- Motor directions (are your motors spinning the right way?)
- Encoder directions (are your encoders counting in the right direction?)
- Odometry pod type (two-wheel, three-wheel, etc.)

## How to Run

1. Open the `LocalizationTest` op mode on your Driver Station
2. Place your robot at a known position on the field (typically the origin)
3. Drive the robot forward — the X coordinate should increase
4. Drive the robot left — the Y coordinate should increase
5. Rotate the robot counterclockwise — the heading should increase

## What to Look For

| Action | Expected Result |
|---|---|
| Drive forward | X increases |
| Drive left (strafe) | Y increases |
| Rotate CCW | Heading increases |

If any of these are flipped, you'll need to negate the corresponding motor or encoder direction in your config.

## Works With

- ✅ Mecanum Drive
- ✅ Swerve Drive

::: tip
Run this test **before** any other tuner. If your localization is off, every other tuner will produce bad results.
:::