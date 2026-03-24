# Current Limiting Test

The current limiting test runs your robot at different speeds and logs how much current the drivetrain pulls at each speed. This lets you set a safe current limit to prevent voltage dips that can cause erratic behavior during autonomous.

## Why It Matters

Swerve and mecanum drives can pull a large amount of current during aggressive acceleration, which causes your battery voltage to drop suddenly. Voltage dips can cause motors to behave inconsistently and throw off your localization. Setting a current limit prevents this.

## How It Works

This is an **automatic tuner**. The robot will run through a series of speed increments on its own and log the current draw at each step. You then use that data to decide on a safe current limit for your drivetrain.

## How to Run

1. Make sure your robot has a fully charged battery before running this test
2. Place your robot on a flat, open area of the field
3. Open the `CurrentLimitingTest` op mode on your Driver Station
4. Press Play — the robot will run automatically through its speed range
5. When complete, check the telemetry output or log file for the current readings

## Reading the Results

Look for the speed at which current draw spikes sharply. Set your current limit just below that spike:

| Speed | Current Draw | Notes |
|---|---|---|
| 25% | ~4A | Safe range |
| 50% | ~8A | Safe range |
| 75% | ~14A | Watch here |
| 100% | ~22A | Often too high |

*(Your actual values will vary based on your motors and battery)*

## Applying the Limit

Once you have your target value, set it in your drivetrain config:

```java
motor.setCurrentLimit(CurrentUnit.AMPS, 15); // example
```

::: tip
Running this test on a fresh battery gives the most accurate results. A low battery will show artificially low current readings.
:::

## Works With

- ✅ Mecanum Drive
- ✅ Swerve Drive