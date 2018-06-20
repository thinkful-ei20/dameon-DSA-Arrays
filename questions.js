'use strict';


let URLify = (string) => {
  let newt = string.replace(/ /g,'%20');
  return newt;
};
console.log(URLify('string of strings of strings'));

