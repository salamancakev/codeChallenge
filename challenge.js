function compareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function calculateMinSum(coinsArray = []){
coinsArray.sort(compareFn);
let sum = 0;
for (let i = 0; i < coinsArray.length; i++) {
sum = sum + coinsArray[i];
if(sum < coinsArray[]){

}
}
}