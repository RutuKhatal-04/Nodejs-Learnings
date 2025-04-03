import{HasFormatter} from '../classes/HasFormatter.ts';


const anchor =document.querySelector('a')!;


//!this tells that this is going to return some value not a null so
console.log(anchor.href);
// if(anchor){console.log(anchor.href)}
console.log(anchor.href)



//type casting
const form =document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);



//input
const type=document.querySelector('#type')as HTMLSelectElement;
const details=document.querySelector('#details')as HTMLSelectElement;
const amount=document.querySelector('#amount')as HTMLSelectElement;
const tofrom=document.querySelector('#tofrom')as HTMLSelectElement;


const ul =document.
form.addEventListener('submit',(e:Event)=>{
 e.preventDefault(); //prevent default page refreshing as we submit the form 
 console.log(type.value,tofrom.value,details.value,amount.value)




 //anothe way
 let doc:HasFormatter;
 if(type.value==='invoice'){
    doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber)
 }
 else{
    doc=new Payment(tofrom.value,details.value,amount.valueAsNumber)

 }
});






//Classes

class Invoice{
        client:string;
        details:string;
        amount:number;


        constructor(c:string,d:string,a:number){
            this.client=c;
            this.details=d;
            this.amount=a;
        }


        format(){
            return `${this.client} ows Rs.${this.amount} for ${this.details}`
        }
}



const inOne=new Invoice('mario','salary',50000);
const inTwo=new Invoice('lario','salary',5000);

console.log(inOne,inTwo)


//ARRAY OF INVOICES
let invoices:Invoice[]=[];
invoices.push(inOne);
invoices.push(inTwo);

inOne.client='Rutu'
inTwo.amount=3000
console.log(invoices)

invoices.forEach(inv=>{
    console.log(inv.client,inv.details,inv.amount,inv.format());
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




