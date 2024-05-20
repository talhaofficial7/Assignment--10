//1. Write a js program to find maximum between two numbers.
var n = 10;
i =1;
while (i <= n) {
   console.log(i);
   i++;
   
}
//c2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
var n =370;
i =1;
while (n >= i) {
   console.log(n);
   n=n - 2;
}
//3. Write a js program to print all alphabets from a to z. - using while loop

let char= 'a';
while( char <= 'z'){
   console.log(char);
   char++;
   
}
//4. Write a js program to print all even numbers between 1 to 100. - using while loop
let num= 100;
i = 2
while (i <=  100){
    console.log(i);
  
  i++;
}

//5. Write a js program to print all odd number between 1 to 100.
 var odd = 100;
 i = 1
 while(i <= odd){
   console.log(i);
   i++;
 }

 //6. Write a js program to find sum of all natural numbers between 1 to n.
 var  n =100;
 i =1 
 sum = 0
 while (i <= n) {
   sum = sum +i;
   i = i + 1;
   
 }
 console.log(sum);

 //7. Write a js program to find sum of all even numbers between 1 to n.
 var n = 100;
 i =2;
 sum = 0
 while (i <= n) {
   sum = sum +i;
   i = i + 2;
   
 }
 console.log(sum);
 //8. Write a js program to find sum of all odd numbers between 1 to n.
 var n = 100;
 i =1;
 sum = 0
 while (i <= n) {
   sum = sum +i;
   i = i + 2;
   
 }
 console.log(sum);

 //If-else exercise
//1. Write a js program to find maximum between two numbers.
var a = 10;
var b = 20;
if(a > b){
   console.log(a);
}
else{
   console.log(b + "maximum num is" + a);
}

//2. Write a js program to find maximum between three numbers.
var a = 10;
var b = 20;
var c = 30;
if (a > b && a > c) {
   console.log("maximum num is"+ a);
   
}
else if( b > c){
   console.log("maximum num is"+ b);

}
else{
   
   console.log("maximum num is"+ c);


}

//3. Write a js program to check whether a number is negative, positive or zero.
 var a = 0;
 if (a < 0) {
   console.log( " number is negative");

   
 }
 else if (a < 0) {
   console.log(" num is positive");
   
 }
 else{
   console.log(" num is zero");
 }
 //4. Write a js program to check whether a number is divisible by 5 and 11 or not.
var b = 6;
if (b % 5 ==0 && b % 11 ==0) {
   console.log("number is divisible by 5 and 11");
   
}
else{
   console.log("number is not divisible by 5 and 11");

}

//5. Write a js program to check whether a number is even or odd.
var c = 8;
if( a % 2===0){
   console.log(" num is even");

}
else{
   console.log(" num is odd");
}

//6. Write a js program to check whether a year is leap year or not.

var a = 2024;
if (a % 4 == 0)  {
   console.log("year is a leap year");
   
}
else{
   console.log( "year is not leap year");
}

//write a js program to check whether a character is alphabet or not.
var a = "a";
if ((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z')) {
   console.log("character is alphabet");

}
else{
   console.log("character is not alphabet");
}

//8. Write a js program to input any alphabet and check whether it is vowel or consonant.

var alphabet = "a";

if (alphabet === 'a' || alphabet === 'e' || alphabet === 'i' || alphabet === 'o' || alphabet === 'u')
   {
      console.log( " character is vowel");
   }
   else{
      console.log("character is consoanant");
   }

   //9. Write a js program to input any character and check whether it is alphabet, digit or special character.

   var a ="a";
   if (a >= "a" && a <= "z" || a >= "A" && a <= "Z" ) {
      console.log("char is alphabet");
      
   }
   else if (a == num) {
      console.log("char is digit");
      
   }
   else{
      console.log("char is special char");
   }
//10. Write a js program to check whether a character is uppercase or lowercase alphabet.
var a ="A";
if (a >= "a" && a <= "Z") {
   console.log("char is lowercase alphabet");
   
}
else if (a >= "A" && a <= "Z") {
   console.log("char is upercase alphabet");
   
}
else {
   console.log(a +" is no alphabet");
}

// 11. Write a js program to input week number and print week day.

var weekdays = 7;
switch (weekdays) {
   case 1:
      console.log("sunday");
      
      break;

      case 2:
      console.log("monday");
      
      break;

      case 3:
      console.log("tuesday");
      
      break;

      case 4:
      console.log("wensday");
      
      break;

      case 5:
      console.log("thursday");
      
      break;

      case 6:
      console.log("friday");
      
      break;
      case 7:
      console.log("saturday");
      
      break;
      

   default:
      break;
}
//12. Write a js program to input month number and print number of days in that month.
var month = 9;
switch (month) {
   case 1:
      case 3:
         case 5:
            case 7:
               case 8:
                  case 10:
                     case 12:
                        console.log("month has 31 days");
      
      break;
      case 4:
         case 6:
            case 9:
               case 11:
                  console.log("month has 30 days");
                  break;
                  case 2:
                     console.log("month has 29 and 28 days");
                     break;






   default:
      break;
}
//13. Write a js program to count total number of notes in given amount.

var amount = 1000;
var notes = 0;
if (amount >=500) {
   amount = amount/500;
   amount = amount % 500;
   console.log(notes +" notes of 500");
   
}
//15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
 var a = 60;
 var b = 60;
 var c = 60;
 if (a + b + c ===180) {
   console.log("triangle is valid");
   
 }
 else{
   console.log(" trianlge is not valid");
 }
 //15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

 var a = 60;
 var b = 90;
 var c = 180;
 if ( a +b > c && b +c >a && c + a > b ) {
   console.log( "triangle is valid");
   
 }
 else{ 
   console.log("triangle is not valid");
 }
//16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
var a = 10;
var b = 20;
var c= 30;
if (a === b && b === c) {
   console.log("triangle is equilateral");

} 
else if (a === b || b === c || c === a) {
   console.log("triangle is isosceles");
 } 
 else {
   console.log("triangle is scalene ");
 }
//17. Write a js program to find all roots of a quadratic equation.
let root1, root2;


var a = 100;
var b = 20;
var c = 30;

let discriminant = b * b - 4 * a * c;


if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
//18. Write a js program to calculate profit or loss.
 var sellingprice = 1000;
 var costprice = 500;
 if ( sellingprice > costprice) {
   profit = sellingprice   + costprice;
   console.log(" profit is" + profit);
   
 }
 else if (sellingprice < costprice) {

   loss = costprice - sellingprice;
   console.log(" loss is"+ loss);
   
 }
 else{
   console.log(" no profit and no loss");
 }
 //19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
//ercentage >= 90% : Grade A
//Percentage >= 80% : Grade B
//Percentage >= 70% : Grade C
//Percentage >= 60% : Grade D
//Percentage >= 40% : Grade E
//Percentage < 40% : Grade F
 
  

 var Physics = 60;
var Chemistry = 50;
var Biology = 70;
var Mathematics = 40;
var Computer = 10
var percentage = (Physics + Chemistry + Biology + Mathematics + Computer)/5;

if (percentage >= 90) {
  console.log("Grade A");
} else if (percentage >= 80) {
  console.log("Grade B");
} else if (percentage >= 70) {
  console.log("Grade C");
} else if (percentage >= 60) {
  console.log("Grade D");
} else if (percentage >= 40) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}
//20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95%

var basic = 10000;
var hra = 0;
var da = 0;
var Gross = 0;

if (basic <= 10000) {
  hra = (basic * 20) / 100;
  da = (basic * 80) / 100;
} else if (basic <= 20000) {
  hra = (basic * 25) / 100;
  da = (basic * 90) / 100;
} else {
  hra = (basic * 30) / 100;
  da = (basic * 95) / 100;
}

Gross = basic + hra + da;

console.log("Gross salary: " + Gross);

//21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
//For first 50 units Rs. 0.50/unit
//For next 150 units Rs. 0.75/unit
//For next 100 units Rs. 1.20/unit
//For unit above 250 Rs. 1.50/unit
var units = 200;
var bill = 0;

if (units <= 50) {
  bill = units * 0.50;
} else if (units <= 150) {
  bill = 50 * 0.50 + (units - 50) * 0.75;
} else if (units <= 100) {
  bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
} else {
  bill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
}

console.log("Total bill is " + bill);
