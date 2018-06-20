'use strict';

// O(n)-----------------------------------------
let URLify = string => string.replace(/ /g,'%20');
console.log(URLify('string of strings of strings'));

// O(n)------------------------------------------
let filterArray = (array) => {
  let array1 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]>=5) {
      array1.push(array[i]);
    }
  }
  return array1;
};
console.log(filterArray([1,2,3,4,5,6,7,8,9]));


// O(n)------------------------------------------
//unsure if this was suppose to be continuous from 0 or any continuous
let maxSumInArray = (array) => {
  let sum = 0;
  let highest = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
    if(sum>highest){
      highest = sum;
    }
  }
  return highest;
};
console.log(maxSumInArray([4,6,-3,5,-2,1]));
console.log(maxSumInArray([-1,23,10,-15,1,4,7,-7]));


// O(n)----------------------------------------------
let mergeArrays = (arr1,arr2) => arr1.concat(arr2).sort((a, b) => a - b);
console.log(mergeArrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));


// O(n)----------------------------------------------
function removeChars(str, filter) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!filter.includes(str[i])) result += str[i];
  }
  return result;
}
console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


// O(n^2)-----------------------------------------
let arrayOfNumbers = (array) => {
  let arrayToReturn =[];
  for (let i =0; i < array.length; i++){
    let number=1;
    for (let j =0; j < array.length; j++){
      if( j !== i)
        number *= array[j];
    }
    arrayToReturn.push(number);
  }
  return arrayToReturn;
};
console.log(arrayOfNumbers([1, 3, 9, 4]));




//O(2^n)??
function twoDArray(arr) {

  //create a shallow copy to work with
  let result = arr.map((a) => a.slice());
  
  // loops over the first demension
  for (let x = 0; x < arr.length; x++) {

    //loops over the second demension of arrays
    for (let y = 0; y < arr[x].length; y++) {

      //if character at dimension [x] position [y] is 0
      if (arr[x][y] === 0) {

        //sets all of the rows values to 0
        for (let a = 0; a < arr[x].length; a++) {
          result[x][a] = 0;         
        }

        //sets all of the columns to 0
        for (let b = 0; b < arr.length; b++) {
          result[b][y] = 0;
         
        }
      }
    }
  }

  return result;
}

// console.log(twoDArray([
//   [1, 0, 1, 1, 0],
//   [0, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 1]
// ]));


//O(n)--------------------------------------------------
let stringRotation = (str1,str2) => (str1.substring(2)+ str1.slice(0,2) === str2) ? true : false;
console.log(stringRotation('hello','lloeh'));
