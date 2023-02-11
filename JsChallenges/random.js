/* 
function that takes in a string and returns as its opposite case
*/

function changeStringCase(str){
    //loop through string
    let newString = '';
    for(let i = 0; i < str.length; i ++){
        //check the current casing
        if(str[i] === str[i].toLowerCase()){
          newString += str[i].toUpperCase()
        }
        else {
            newString += str[i].toLowerCase()
          }
    }
    return newString;
}

console.log(changeStringCase('ChEcK'));