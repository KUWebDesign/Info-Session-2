/*
Curiosity killed the cat
*/
let cat = "Meeko"; //string
let fur = 'Tuxedo'; //string still
let age = 6; //Int
let pi = 3.14159; //Float
let isCute = true; //Boolean
let kitties = ["Meeko", "Ariel", "Jasmine", "Boo", "Marbles"]; //Array
let things = ["Glass", "Lamp", "Catnip", "Clean Towels", "Sunny Spot"];//Also Array

function catApproved(num)
{
     if(num < 2)
     {
          return(cat + " disapproves of " + things[num]);
     }
     else if(num > 4)
     {
          return(cat + " disapproves of your trickery");
     }
     else//2 <= num > 5
     {
          return(cat + " approves of " + things[num]);
     }
}
