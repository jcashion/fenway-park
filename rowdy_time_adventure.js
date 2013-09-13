script.js
confirm("Now entering Amicus HQ");
var userAnswer = prompt ("Do you work here?");
if (userAnswer === yes)
console.log("well howdy friend!")
else console.log("then GTFO")
console.log("You've been working hard. In fact, you just closed a deal with color of change! Congratulations!")
console.log("In your happy glow you approach the ping pong table. You decide whether or not to play.")
var pongAnswer = prompt ("Do you want to play ping pong?")
if (pongAnswer === yes)
console.log("Sorry, it's not rowdy time! No you can't play ping pong!")
else console.log ("Good choice. Go play chess or take a nap")
var feedback = prompt ("Rate how much fun this is from 1 to 10")
if (feedback > 7)
console.log("Then you're in the right place")
else console.log("You're too rowdy for your own good")