function myfunction (){
  console.log("Welcom to Apna College")
  console.log("We are learning javascript")
}
myfunction();

function msg(){
   console.log("I Love Javascript")
}

msg();

function sum (x,y){
  console.log(x + y)
  s = x + y;
  return s;
}

let val = sum (3, 4);
console.log(val)

//sum function
function sum (a, b){
    return a+b;
}

//multiplication function
function mul (a, b){
    return a*b;
}


const arrowSum = (a, b) =>{
   console.log(a+b);
}

const arrowMul = (a, b) =>{
        return a*b;                                           
}