var readlineSync=require("readline-sync");
console.log("1-for addition  2- for substraction  3-for multiplication  4- for division");
var opr=readlineSync.question("choose the operation")

 var num1 =readlineSync.question ("enter the first number");
 var num2 = readlineSync.question("enter the second number");
 num1 = parseInt (num1)
 num2=parseInt (num2)
opr=parseInt(opr)
function addition(a,b) {
    let sum= a+b;
    return sum;
    }
function substraction(a,b) {
    let dif=a-b;
    return dif;   
}
function multiplication(a,b) {
     let product=a*b;
    return product;
    
}
function division(a,b) {
    let divide = a /b  
    return divide ; 
}
 if(opr==1){
    sum = addition(num1, num2) ;
    console.log("sum is" , sum)
 }else if(opr==2){
    sub = substraction(num1 ,num2);
    console.log("difference is" , sub);
 }else if(opr ==3){
    mult= multiplication(num1, num2);
    console.log("product is",mult)
 }else if(opr == 4){
    div=division(num1 ,num2)
    console.log("coefficient is",div);
 }else{
    console.log("enter valid operation number");
 }