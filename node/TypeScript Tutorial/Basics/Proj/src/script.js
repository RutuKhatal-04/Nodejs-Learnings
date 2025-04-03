"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var anchor = document.querySelector('a');
//!this tells that this is going to return some value not a null so
console.log(anchor.href);
// if(anchor){console.log(anchor.href)}
console.log(anchor.href);
//type casting
var form = document.querySelector('.new-item-form');
console.log(form.children);
//input
var type = document.querySelector('#type');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var tofrom = document.querySelector('#tofrom');
var ul = document.
    form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevent default page refreshing as we submit the form 
    console.log(type.value, tofrom.value, details.value, amount.value);
    //anothe way
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
});
//Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " ows Rs.").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var inOne = new Invoice('mario', 'salary', 50000);
var inTwo = new Invoice('lario', 'salary', 5000);
console.log(inOne, inTwo);
//ARRAY OF INVOICES
var invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
inOne.client = 'Rutu';
inTwo.amount = 3000;
console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
//inclass all attrivutes and functions are public by default
//same class below with scope
// class Invoic{
//     readonly client:string;
//     private details:string;
//     public amount:number;
//     constructor(c:string,d:string,a:number){
//         this.client=c;
//         this.details=d;
//         this.amount=a;
//     }
//     format(){
//         return `${this.client} ows Rs.${this.amount} for ${this.details}`
//     }
// }
// const inOne=new Invoice('mario','salary',50000);
// const inTwo=new Invoice('lario','salary',5000);
// console.log(inOne,inTwo)
// //ARRAY OF INVOICES
// let invoices:Invoice[]=[];
// invoices.push(inOne);
// invoices.push(inTwo);
// inOne.client='Rutu'
// inTwo.amount=3000
// console.log(invoices)
// invoices.forEach(inv=>{
// console.log(inv.client,inv.details,inv.amount,inv.format());
// });
