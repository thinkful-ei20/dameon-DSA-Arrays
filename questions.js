'use strict';


let URLify = (string) => {
  return string.replace(/ /g,'%20');
   
};
console.log(URLify('string of strings of strings'));

