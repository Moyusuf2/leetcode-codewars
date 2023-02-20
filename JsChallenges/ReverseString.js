
let string = "Hello World";

function reverse(str){
  return str.split("").reverse().join("");
}

let result = reverse(string);
console.log(result);

// OR

function reverseIT(str) {
    let newString = '';
    for(let i = str.length -1 ; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}

let testIt = reverseIT(string);

console.log(testIt);