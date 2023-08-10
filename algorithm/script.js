// Reverse String

// function reverseStr(str){
//     return str.split('').reverse().join('');
// }

function reverseStr(str){
    var reverseStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseStr('hellos'))


function countUniqVal(){
    const uniqueVal = 0;

    return uniqueVal;
}

console.log(countUniqVal())