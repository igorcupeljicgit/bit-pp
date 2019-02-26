// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]


// var array1=["1", "21", undefined, "42", "1e+3", Infinity];
// var arrayNew=[];

// function makeNewArray(){

//     for(var i=0;i<array1.length;i++){
//      var a=parseFloat(array1[i]);

//      if(array1[i]!== undefined && array1[i] !== Infinity){
//          arrayNew[arrayNew.length]=a;


//      }

//     }
//     console.log(arrayNew);
// }


// var array1=["1", "21", undefined, "42", "1e+3", Infinity];
// makeNewArray(array1)




// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”


// var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];


// function makeString(array) {
//     var newString = "";
//     for (var i = 0; i < array.length; i++) {

//         if (isNaN(array[i]) !== true && typeof (array[i]) !== undefined && typeof (array[i] !== null)) {

//             newString += "" + array[i];

//         }


//     }
//     console.log(newString)
// }

// var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// makeString(arr)


// Write a program to filter out falsy values from the array.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]


// var arr2 = [NaN, 0, 15, false, -22, '', undefined, 47, null];

// function filter(smt) {
//     var newArr2 = [];

//     for (var i = 0; i < arr2.length; i++) {

//         if (!!arr2[i]) {

//             newArr2[newArr2.length] = arr2[i];
//         }
//     }
//     console.log(newArr2)
// }

// var arr2 = [NaN, 0, 15, false, -22, '', undefined, 47, null];

// filter(arr2)


// Write a program that calculates a number of integer values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3



// function calculate(somearray) {
//     var sum = 0;

//     for (var i = 0; i < somearray.length; i++) {

//         if (somearray[i] === parseInt(somearray[i])){

//             sum++;
//         }


//     }
//     console.log(sum);
// }

// var vac = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
// calculate(vac)


// Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2


// function calcFloat(somearray) {
//     var sum = 0;

//     for (var i = 0; i < somearray.length; i++) {

//         if (somearray[i] === parseFloat(somearray[i]) && somearray[i] !== parseInt(somearray[i])) {

//             sum++;
//         }


//     }
//     console.log(sum);
// }

// var vac = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
// calcFloat(vac)


// Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false


// function isString(str) {

//     if (typeof str === "string") {
//         console.log("-> True!");
//     }
//     else {
//         console.log("-> False!");
//     }
// }

// isString(33)



// Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false


// function isStringBlank(str) {

//         if (typeof str === "string" && str==="") {
//             console.log("-> True!");
//         }
//         else {
//             console.log("-> False!");
//         }

//     }



// isStringBlank(12)


// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"


// function concatString(str, n) {

//     var strnew = "";
//     for (var i = 0; i < n; i++) {
//         strnew += str;


//     }
//         console.log(strnew);

//     }
//     concatString("Ha", 8)



// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2


// function numbOfLeter(str, a) {
//     var sum = 0;
//     for (var i = 0; i< str.length; i++) {
//         if (str[i] === "a"){
//             sum++;
//         }
//     }
//     console.log(sum);
// }

// numbOfLeter("dasdsdsdsdafawawd3fafwaafa","a")

// Write a function to find the position of the first occurrence of a character in a string.The result should be in human numeration form.If there are no occurrences of the character, the function should return -1

// function numbOfLeter(str, a) {
//     var sum;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == a) {
//             sum = i + 1;
//             break;
//         }
//         else {
//             sum = -1;
//         }



//     }
//     console.log(sum);

// }

// numbOfLeter("dasdsdsdsdafcawawd3fafwaafarrrra", "c")


// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.



// NIJE ZAVRSEN


// function numbOfLeter(str, a) {
//     var sum;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == a) {
//             sum = i + 1;

//         }
//         else {
//             sum = -1;
//         }



//     }
//     console.log(sum);

// }

// numbOfLeter("dasdsdsdcrracaa", "c")


// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa

// function firstTwoLetters(arr) {
//     var res = "";

//     for (var i = 0; i < arr.length; i++) {
//         var curentStr = arr[i];

//         if (curentStr.length >= 2) {
//             for (var j = 0; j < 2; j++) {


//                 res += curentStr[j];
//             }

//         }
//     }
//     return res;

// }

// var scale = firstTwoLetters(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]);
// console.log(scale);


// Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).


// function printCombination(n) {

//     for (var i=1;i<=n;i++){

//         for(var j=1;j<=n;j++){
//             if(i==j){
//                 console.log("they are equal");
//             }
//             else{
//                 console.log(i,j);

//             }

//         }

//     }

// }

// var vitomir=printCombination(7);
// console.log(vitomir);


// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

/*
function primeNumb(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
    }
    return true;
}


var prime = primeNumb(4);
console.log(prime);
*/

//Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
/*
function comondivisor(a, b) {
    var min = 0;

    if (a < b) {
        min = a;

    }
    else {
        min = b;
    }
    for (var i = 0; i < min; i++) {

        if (a % i == 0 && b % i == 0) {
            var broj = i;
        }

    } return broj;
}
var Div = comondivisor(192, 42);
console.log(Div);*/
/*
Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true*/
/*
function palindrom(str) {
    var result = "";
    for (var i = 0, j = str.length - 1; i < str.length; i++ , j--) {
        if (str[i] === str[j]) {
            result = true;
        } else {
            result = false;
        }

    }
    return result;

}
palindrom("a nut for a jar of tuna");
var final = palindrom("ana voli milovana");
console.log(final);
/*

/////Write a function that combines two arrays by alternatingly taking elements.*/
/*
var letter = ['a', 'b', 'c'];
var num = [1, 2, 3];
function together(letter, num) {
    var newArr = [];
    for (i = 0; i < letter.length; i++) {
        newArr[newArr.length] = letter[i];
        newArr[newArr.length] = num[i];

    } return newArr;
}
var result = together(letter, num);
console.log(result);*/
/*
Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

// function rotateList(arr,num){
//     var res=[];
//     for( var i=num;i<arr.length;i++){
//         res[res.length]=arr[i]

//     }
//     for(i=0;i<num;i++){
//         res[res.length]=arr[i];

//     }
//     return res


// }   
// var final=rotateList([1,2,3,4,5,6], 3);
// console.log(final);



