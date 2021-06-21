 /*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

 //  function sumOfnumbers(n1, n2) {
 //     let sum 
 //     sum = n1 + n2

 //      if (n1 === n2) {
 //          console.log(sum * 3)
 //      } else {
 //          console.log(sum)
 //      }
 //  }


 //  sumOfnumbers(4, 4)

 /*
 2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

 // function numCheck (n1,n2){
 //     if(n1,n2 === 50 || n1 + n2 === 50){
 //         console.log("true")
 //     }
 //     else{
 //         console.log("False")
 //     }
 // }

 // numCheck(1,0)

 /*
 3)
 Create a function to remove a character at the specified position of a given string and return the new string.
 */

 // function removeChar(){
 //     let string = "hey how are you"
 //     let newStr += string.replace("r","")
 // }

 // removeChar(newStr)

 /*
 4)
  Create a function to find the largest of three given integers.
 */

 // function largestInt(int1, int2, int3){

 //     if(int1 > int2 && int3){
 //         console.log("largest number = ", int1)
 //     }

 //     else if(int2 > int1 && int3){
 //         console.log("largest number = ",int2)

 //     }

 //     else if(int3 > int1 && int2){
 //         console.log("largest number = ",int3)
 //     }

 // }

 // largestInt(10,10,101)

 /*
 5)
 Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
 */

 function numbersInRange(num1, num2) {
     if ((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
         (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)) {
         return true;
     } else {
         return false;
     }
 }

 console.log(numbersInRange(44, 56));

 /*
 6) Create a function to create a new string of specified copies (positive number) of a given string.
 */

 function strCopy(str, n) {
     if (n < 0)
         return false;
     else
         return str.repeat(n);
 }
 console.log(strCopy("abc", 5));

 /*

7) Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function city(str) {
    if (str.length >= 3 && ((str.substring(0, 3) === 'Los')
        || 
       (str.substring(0, 3) === 'New')))
     
        {
            return str;
      }
  
    return '';
  }
  
  console.log(city("New York"));
  console.log(city("Los Angeles"));

  
/*
8) Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/