//For Loop

// for  (let i =1; i <= 5; i++){
//      console.log("i =", 1)// 5 execute
// }

//  console.log("i")

//Calculate sum of 1 to 5
// let sum = 0;
// let n = 0; 
// for(let i = 1; i <=n; i++) {                                          
//      sum = sum+i ; //sum = 14                                          
// }

// console.log("sum =", sum)
// console.log("loop has ended")

//while loop
// let i= 1;
// while (i<= 10){
//     console.log("Apna College")
//     i++;
// }

//while loop
// let i= 1;
// do {
//     console.log("i <=",i);
//     i++;
// }while(i<=5) 

//for-of loop
// let str = "JavaScript";

// let size = 0;
// for(let val of str){
//       console.log("val=", val);
//       size++;   //10                                      
// }

let student = {
    name:"Umar haris",
    age:17,
    cgpa: 7.5,
    isPass:true
};

for(let key in student){
     console.log("key=", key, "value=", student[key]);
}  