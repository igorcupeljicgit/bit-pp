// Write a function that capitalizes the first letter of each string argument it receives.
// 	Function arguments: 'hello', 'there', 'ES', 6
// 	Output: 'Hello', 'There', 'ES'

// const newArray = (...array) => array .filter(element => typeof element ==="string").map(element => `${element[0].toUpperCase()}${element.slice(1)}`);


// const temp=newArray("milentije","heloo","dragica",4,5);
// console.log(temp);


// Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24


// const price= n => n/5 ;

// console.log(price(120));


// Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

// const newValue = (arr,n) => arr.map(element => element*n);

// console.log(newValue([3,4,6,7,8],3));





// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

// const evenNumbers = (...array) => array.filter(element => element%2===0);

// console.log(evenNumbers(6,11,9,0,3));


// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

// const arrNumb2= (...array) => array.filter(element => element.includes("js"));

// console.log(arrNumb2('compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'));


// Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]


// const integerNumb = (array) => array.filter(Element => Element%1===0);

// console.log(integerNumb([1.6, 11.34, 9.23, 7, 3.11, 8]));


// Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: [45, 553]


// const integerNumb = (...array) => array.filter(Element => Element%1===0).map(Element => Element.toString()).filter(Element => Element.includes("5")).map(Element => parseInt(Element)) ;
// console.log(integerNumb(23, 11.5, 9, 'abc', 45, 28, 553));


// Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5
// // 

// const indexGreater= (...array) => array.filter(Element => Element>10);

// console.log(indexGreater( 1.6, 11.34, 29.23, 7, 3.11, 18));                        ///// Nije zavrsenoooo//////


// Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48

// const summOfInteger= (arr) => arr.reduce(Element => Element+Element);

// console.log(summOfInteger([3,4,5]));



