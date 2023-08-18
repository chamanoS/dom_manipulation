// function longestString(str){

//     return str.split('').reverse().join('');

// }
// console.log(longestString('hello'));


function uniqueValues(arr){

    if(arr.length == 0){
        return 0;
    }

    let count = 1;
    let uniqueArray = [0];

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] !== uniqueArray){
            count ++;
            uniqueArray = arr[i];
        }
        
    }
    return uniqueArray;

}
const inputArray = [1,1,1,2,3,3,4,4,5];
console.log(uniqueValues(inputArray))