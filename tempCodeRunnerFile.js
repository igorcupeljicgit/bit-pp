const newArray = (...array) => array .filter(element => typeof element ==="string").map(element => `${element[0].toUpperCase()}${element.slice(1)}`);


const temp=newArray("milentije","heloo","dragica",4,5);
console.log(temp);
