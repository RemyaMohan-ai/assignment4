var readlineSync=require("readline-sync");
var limit = readlineSync.question("enter a limit");
let sum=0
for(let i =1;i<=limit;i++){
    if(i%2 !=0){
       sum = sum+i
    }
    
}
console.log("sum of odd numbers","=" ,sum) 
