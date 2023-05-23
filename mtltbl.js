var readlineSync=require("readline-sync")
let number = readlineSync.question("enter the number need to be mutiplied")
number=parseInt(number)
for(let i=1;i<=10;i++){
    console.log(i,"*",number,"=",i*number);
}