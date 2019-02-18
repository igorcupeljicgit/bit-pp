// Functions practicals

// Write a program that calculates the maximum of two given numbers. 
// function maxNumber(a,b){
//     if(a>b){
//         c=a;
//         return c;
//     }
//     else{
//         c=b;
//         return c;
//     }
// }
// var res=maxNumber(5,7);
// console.log(res);


// Write a program that checks if a given number is odd.
// function isOdd(a) {
//     if (a % 2 !== 0) {
//         console.log("odd");
//         return true;

//     }
//     else {
//         console.log("even");
//         return false;

//     }
// }
// isOdd(9)

// Write a program that checks if a given number is a three digit long number.
/*function digit(a) {
    if (a >= 100 && a < 1000) {
        console.log("YES")
    } else {
        console.log("No")
    }
}digit(211); */


// Write a program that calculates an arithmetic mean of four numbers.
/*function arith(a, b, c, d) {
    var sum = 0
    var res = 0

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
        res = sum / arguments.length
    }
    return res

}

var res = arith(4, 5, 7, 8);
console.log(res) */


// Write a program that calculates a number of digits of a given number. 

// function calc(a){
//     var str = '' + a
//     var res = str.length;
//     return res
// }

// var res = calc(1354);
// console.log(res) 

// Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

// var a = [2, 4, 7, 8, 7, 7, 1];
// var n = 7
// var res = 0

// function calculate(arr, num) {

//     for (var i = 0; i < arr.length - 1; i++) {
//         if (num === arr[i]) {
//             res++;
//         }
//     }
//     return res

// }
// var res = calculate(a, n)
// console.log(res)


// Write a program that calculates the sum of odd elements of a given array.
// var a = [2, 3, 4, 5, 6, 7];
// var sumElements = 0;

// function sumArray(array) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 1) {
//             sumElements += array[i];
//         }
//     }
//     console.log(sumElements)
// }

// sumArray(a)


// Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.


// function sumOfleter(str) {
//     var sumOfa = 0; var sumofA = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === "a") {
//             sumOfa++
//         }

//         if (str[i] === "A") {
//             sumofA++;
//         }
//     }
//     console.log('Number of "a": ' + sumOfa, 'Number of "A": ' + sumofA);

// }

// var string = ("lorem fsaff sf aklfdfkso a da ss ska A A A A  Aa a sda");
// sumOfleter(string)



// Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 


// function strRep(str, rep) {
//     var res = ''
//     for (var i = 0; i < rep; i++) {
//         res += str
//     }
//     console.log(res)
// }
// var string = 'abc'

// strRep(string, 6)



// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// PROBA

// var arr = ["1", "21", undefined, "42", "1e+3", Infinity]
// var b = [];
// function numCon(a) {
//     for (var i = 0; i < a.length; i++) {
//         if (typeof a[i] === 'string')
//             a[i] = parseInt(a[i])
//             b[i] = a[i]

//     } console.log(b);
// }

// numCon(arr)