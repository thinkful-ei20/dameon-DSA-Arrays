'use strict';


const Mem = require('./memory');

const Memory = new Mem();



class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }
  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}
//Array.SIZE_RATIO = 3;

function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let TammysArr = new Array();

  //add an item to the array
  
  TammysArr.push(3);
  console.log(TammysArr);
  //The length is 1, Capasity is 3 , Mem Address is 0
  
  TammysArr.push(5);
  //The length is 2, Capasity is 3 , Mem Address is 0
  
  TammysArr.push(15);
  //The length is 3, Capasity is 3 , Mem Address is 0
  
  TammysArr.push(19);
  console.log(TammysArr);
  //The length is 4, Capasity is 12 , Mem Address is 3
  //This item creates a copy of the first array, finds the next available spot, puts the new Array there
  
  TammysArr.pop();
  //The length is 3, Capasity is 12 , Mem Address is 3
  //Even though the length has gone down , nothing is done

  TammysArr.pop();
  //The length is 2, Capasity is 12 , Mem Address is 3

  TammysArr.pop();
  console.log(TammysArr);
  //The length is 1, Capasity is 12 , Mem Address is 3
  
  console.log(TammysArr.get(0));
  TammysArr.remove(0);
  TammysArr.push('Tauhida');
  console.log(TammysArr.get(0));
  console.log(TammysArr);
  return TammysArr;
}
let tammysArr = main();
//console.log(tammysArr.get(0));
//Visual example of memory allocations.
//Item one starts at 0, Item 4 starts at 3, Item 13 starts at 12.



//let item1 = [1,0,0]
//let item4 =        ^[3,0,0,0,0,0,0,0,0,0,0,0,0]
//let item13 =                                   ^[1,2,3,4,5,6,7,8,9,10,11,12,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

