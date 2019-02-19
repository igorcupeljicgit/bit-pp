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