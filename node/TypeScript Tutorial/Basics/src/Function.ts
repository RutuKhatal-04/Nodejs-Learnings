let greet:Function;

//greet='hello';

greet=()=>{
    console.log('helo,again');

}



const add=(a:number,b:number,c?:number|string)=>{
    console.log(a+b);
    // console.log();
}


//when we want to give optinal parameter means if we want then add otherwise dont add not worries (at that time use ? as used for c)
// Or we can give default value also 
console.log(add(5,10))



const ad=(a:number,b:number,c:number=10)=>{
    console.log(a+b+c);
    // console.log();
}

console.log(ad(10,20,60))



//we cannot reassign the value of the return value variable


const minus=(a:number,b:number)=>{
    return a-b
    // console.log();
}
let result=minus(10,7)


// result='asd' //can not assign


//We can give return type also


const minu=(a:string,b:string):string=>{
    return a+b
    // console.log();
}
// let res=minus('asd','f')




//Function signatures'

let gret:(a:string,b:number)=>void;

//not possible
// gret=(a:string,b:string)=>{
//     console.log(a,b)
// }


//possible
gret=(a:string,b:number)=>{
    console.log(a,b)
}


//example 2
let cal:(a:number,b:number)=>number;

//chnage of parameter name is allowed while redefining
cal=(p:number,q:number)=>{
return p+q
}


//example 3
let log:(obj:{name:string,age:number})=>void
log=(ninja:{name:string,age:number})=>{
    return age
}