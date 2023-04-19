function calculateMinSum(coinsArray = []) {
  coinsArray.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < coinsArray.length; i++) {
    if (coinsArray[i] > sum + 1) {
      return sum + 1;
    }
    sum = sum + coinsArray[i];
  }
  return sum + 1;
}

// Test Case 1
let coins = [5, 7, 1, 1, 2, 3, 22];
let result = calculateMinSum(coins);
console.log("Test case 1");
console.log("Result: " + result);

// Test Case 2
coins = [1, 1, 1, 1, 1];
result = calculateMinSum(coins);
console.log("Test case 2");
console.log("Result: " + result);

// Test Case 3
coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
result = calculateMinSum(coins);
console.log("Test case 3");
console.log("Result: " + result);
