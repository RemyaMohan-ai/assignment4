 var readlineSync=require("readline-sync");
 var n = readlineSync.question("enter the size of the array");
//  console.log("enter the values")
 const a=[];
 let even=0;
 for(let i =0; i<n ;i++){
     a[i]=readlineSync.question("enter the number")
     if (a[i]%2==0){
        even=even+1
     }

 }
 console.log("number of even numbers =",even)