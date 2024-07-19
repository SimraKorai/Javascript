// let nums = [67, 52, 39];

// nums.map((val) => {
//     console.log(val)
//});



// let arr = [1, 2, 3, 4, 5, 6, 7];

// let evenArr = arr.filter((val) => {
//      return val % 2 === 0;
// })

// console.log(evenArr);

let arr = [1, 2, 3, 4];

const output = arr.reduce((res, curr) => {
      return res + curr;
});

console.log(output);