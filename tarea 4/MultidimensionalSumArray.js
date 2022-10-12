function mdArraySum(arr, sum = 0) {
  // Your code here:
  return arr.reduce(
    (sum, e) => sum + (typeof e === "number" ? e : mdArraySum(e)),
    0
  );
}
// Complejidad temporal: "O(n)"

console.log(mdArraySum([[1, 2], 3, 4])); //(10)
//console.log(mdArraySum([1, 2, 3, 4])); //(10)
//console.log(mdArraySum([[2, 4], [1], [4, 2, 1]])); //(14)
//console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]])); //(26)

// function mdArraySum(arr, sum = 0) {
//   // Your code here:
//   console.log(arr);
//   //                   ^------^     ^
//   //                        ^
//   //console.log(arr.flat(2));
//   // Recursión: Corte! Llamado recursivo!
//   //let sum = 0;

//   for (const element of arr) {
//     console.log(element);
//     if (typeof element === "number") {
//       sum += element;
//     } else {
//       sum += mdArraySum(element, sum);
//     }
//   }
//   return sum;
// }
// Complejidad temporal: "O(n)"

module.exports = mdArraySum;
