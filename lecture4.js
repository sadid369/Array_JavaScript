// const arr1 = new Array(10);

// for (let i = 0; i < arr1.length; i++) {
//   arr1[i] = false;
// }
// console.log(...arr1);

// const arr2 = new Array(10);
// arr2.fill(0);
// console.log(...arr2);

// const response = new Array(9);
// response.fill(false);
// for (let i = 0; i < response.length; i++) {
//   const randomNum = Math.floor(Math.random() * 10 + 1);
//   response[i] = randomNum > 5 ? "X" : "O";
// }
// console.log(response);
const names = ["sadid", "touhid", "onim"];

function update(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }
  return arr;
}

update(names);
console.log(names);
