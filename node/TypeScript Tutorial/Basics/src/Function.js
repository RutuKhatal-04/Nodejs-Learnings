"use strict";
let greet;
//greet='hello';
greet = () => {
    console.log('helo,again');
};
const add = (a, b, c) => {
    console.log(a + b);
    // console.log();
};
//when we want to give optinal parameter means if we want then add otherwise dont add not worries (at that time use ? as used for c)
// Or we can give default value also 
console.log(add(5, 10));
const ad = (a, b, c = 10) => {
    console.log(a + b + c);
    // console.log();
};
console.log(ad(10, 20, 60));
//we cannot reassign the value of the return value variable
const minus = (a, b) => {
    return a - b;
    // console.log();
};
let result = minus(10, 7);
// result='asd' //can not assign
//We can give return type also
const minu = (a, b) => {
    return a + b;
    // console.log();
};
// let res=minus('asd','f')
