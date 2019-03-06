// // // // Write a function to convert a number from one base (radix) to another.
// // // // Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

// // // // 'ff', 16, 8 -> 377

// // // Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// // // 	12345 -> 54321

// // function rev(num) {
// //     var stringOfnums = num.toString();
// //     var arreyOfnumbs = stringOfnums.split('');
// //     var reversOfnumbs = arreyOfnumbs.reverse();
// //     var joinNumbs = reversOfnumbs.join();
// //     return joinNumbs;

// // }
// // console.log(rev(12345))

// // Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// // Note: Assume punctuation, numbers and symbols are not included in the passed string.

// // “Webmaster” -> “abeemrstw”

// function passedString(str) {
//     var lowercase = str.toLowerCase();
//     var split = lowercase.split('');
//     var sort = split.sort();
//     var join = sort.join("");

//     return join;

// }
// console.log(passedString("Webmaster"));


// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

// function sortString(str) {
//     var newstring = '';
//     var newArray = [];
//     newArray = str.split(" ");
//     var newarr2 = [];

//     for (var i = 0; i < newArray.length; i++) {
//         var curentElement = newArray[i];
//         var sorted = curentElement.split("").sort().join('');
//         newarr2.push(sorted);
//     }
//     return newarr2.join(" ");
// }
// var y = sortString("republika od Srbijeee")
// console.log(y);


// Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]

// function splitString(str){
//     var arr=str.split(" ");
//     return arr

// }
// console.log(splitString("John Snow"));


// Write a function that can pad (left, right) a string to get to a determined length.

// 	'0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000




















// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."

// function convString(str) {

//     var ind = str.lastIndexOf(" ");
//     ind += 2;
//     var news = str.slice(0, ind) + ".";



//     return news;

// }
// var y = convString("konj jovanovic nnenen");
// console.log(y);

// function convString(str) {

//     var ind = str.indexOf(" ");
//     ind += 2;
//     var news = str.slice(0, ind) + ".";



//     return news;

// }
// var y = convString("konj jovanovic nnenen");
// console.log(y);



// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"


// function newSentence(str) {
//     var newString = '';

//     var newchar = str.charAt(0);
//     var t = newchar.toUpperCase();
//     var d = str.slice(1);

//     newString += t + d;


//     return newString;
// }
// console.log(newSentence("novi string je lud."));


// Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "...@example.com"

// function newEmail(email) {
//     var newString = "";
//     var monkey = email.indexOf("@");

//     var t = email.slice(monkey);
//     return email.slice(0, 5) + "..." + t
// }
// console.log(newEmail("somerandomaddress@example.com"))



// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"


function accString(str) {
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < str.length; i++) {

        if ( )

    }



}
console.log(accString("The Quick Brown Fox"));


