let character='mario';
let age=30;

character='asd';


const circ=(diameter:number)=>{
    return diameter*Math.PI;

}

console.log(circ(8));
console.log(circ(2));



//arrays
let names=['abc','def','ghi'];
// will not work as it is initially array and we are trying to convert it into string not possible
// names='hello' 
names.push('jkl')
// names.push(0) not possible in ts but work in js


names[0]='yui';
console.log(names)


let mixed=['abc',0,'pqr',23,'ert'];
mixed.push('oiu')
mixed.push(6)
mixed[0]=8
console.log(mixed)





//objects
// In this type of object as well as its properties can not be changed means belt should hold string value only number are not allowed in it
let ninja={
    name:'mario',
    belt:'black',
    age:30
};

ninja.age=90;

// ninja.age='asd'//not possible
// ninja.skills=['java','py']//not possible as not defined in previous


// ninja={
//     name:'priti',
//     belt:'blue',
//     // if we dont add age property know then also not possible 
//     // and if we add skills property then also not possible

// }





//Explicitly
let chara:string;
let ag:number;

// chara=30 //not possible
chara='30' //possible


let ninj:string[]=[];
// ninj=[1,2,] //not possible
ninj=['a','b'] //possible




//union types
let mix:(string|number)[]=[];
mix.push(20)//possible
mix.push('asd')//possible
// mix.push(false)//not possible





let uid:string|number
uid='asd'
uid=80
// uid=false not possible



//objects
let ninjaOne:object;
ninjaOne={name:'yoshi',age:'30'}

//Dynamic (any) types

let marks:any=20;
marks='60';
marks=false;


let dyno:any[]=[];
dyno.push(20)
dyno.push('asd')
dyno.push(true)


let dyno1:{
    name:any,
    age:any
}

dyno1={
    name:'mario',
    age:true,
}
console.log(dyno1)
