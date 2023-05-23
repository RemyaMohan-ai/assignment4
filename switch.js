var readlineSync=require("readline-sync");
var digit = readlineSync.question("enter the day number");
digit= parseInt(digit)
switch(digit){
    case 1 :
        console.log("sunday");
        break;
    case 2 :
        console.log("monday");
        break;
    case 3 :
        console.log("tuesday");
        break;
    
    case 4 :
        console.log("wednesday");
        break;
    case 5 :
        console.log("thursday");
        break;
    case 6 :
        console.log("friday");
        break;
    case 7 :
        console.log("saturday");
        break;
    default:
        console.log("invaid entry");
        break;

}