var readlineSync = require("readline-sync");
var n = readlineSync.question("enter a number");
let flag =0
for(let i = 2;i<n;i++){
    if (n%i==0){
        flag=1
    }
}
    if(flag==0){

        console.log(n , "is prime number")
    }else{
        console.log(n ,"is not a prime number");
    }

