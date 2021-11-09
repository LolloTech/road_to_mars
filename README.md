# Mars Rover

# Description

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

Requirements

• You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
• The rover receives a character array of commands.
• Implement commands that move the rover forward/backward (f,b).
• Implement commands that turn the rover left/right (l,r).
• Implement wrapping from one edge of the grid to another. (planets are spheres after all)
• Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.


#### How to Run the program
For running the script, is sufficient to cd in the /src folder of the project, and launch:
> node main.js

I have tested the code with node v10.16.0 .
#### What route to call for passing the commands to the Rover?
The route to call is the following?
> http://{ipaddress}:{port}/parseCommands

For example, with the defaults parameters in the configuration:
> http://localhost:3005/parseCommands
#### How to this route?
You have to pass an array parameter, with a javascript-like array as a parameter.
An example:
>http://localhost:3005/parseCommands?array=["GoFrontCommand","GoLeftCommand"]
#### What commands are supported?
These is the list of the supported commands( they are char-sensitive! ):
> - GoFrontCommand 
> - GoBackCommand 
> - GoLeftCommand 
> - GoRightCommand
> - GoRotateClockwiseCommand
> - GoRotateReverseClockwiseCommand

#### Reference system used in the program
This program uses this type of system reference:

![image](./resource/reference.png)

All the movements made by the rover (front, left, rotations) are made based on his point of view.
For example:
>If the Rover is pointing at NORTH, and it wants to make a LEFT movement, it will move by -1 pixel at its left(its left means
effectively x= x MINUS 1 for our system of reference).

>If the Rover is pointing at SOUTH, and it wants to make a LEFT movement, it will move by -1 pixel at its left(its left means
effectively x= x PLUS 1 for our system of reference).



