let num=30;
let guess=0;
do{
    guess=parseInt(prompt("Enter the number"))
    if(guess==num){
        alert('Welcome')
        break;
    }

}while(guess!=0)