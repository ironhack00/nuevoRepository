// Solamente para arreglos ordenados!!!
function SumArray(arr, n) {
  // Your code here:
  console.log(arr);
  //  start               ^1
  //  end                    ^2
  console.log(n);

  let start = 0;
  let end = arr.length - 1;

  while (start !== end) {
    const sum = arr[start] + arr[end];
    console.log("start", start, "end", end);
    if (sum === n) return true;
    if (sum > n) end--;
    else start++;
  }

  return false;
}
// Complejidad Temporal: O(n)

console.log(SumArray([2, 4, 5, 9], 9)); //(true);
console.log(SumArray([2, 4, 5, 9], 12)); //(false);
console.log(SumArray([2, 5, 9], 4)); //(false);
// Desordenados
//console.log(SumArray([4, 2, 9, 5], 7))//(true);
//console.log(SumArray([5, 2, 9, 4], 12))//(false);

// Para Ordenados y Desordenados
// function SumArray(arr, n) {
//   // Your code here:
//   console.log(arr);
//   //                  ^
//   //                     ^
//   console.log(n);
//   for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i]);
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(arr[j]);
//       if (arr[i] + arr[j] === n) return true;
//     }
//   }
//   return false;
// }
// Complejidad Temporal: O(n^2)

module.exports = SumArray;
