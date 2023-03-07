function deltePrime(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
      flag = 0;
      for (let j = 2; j < arr[i] / 2; j++) {
        if (arr[i] % j == 0) {
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        for (j = i; j < arr.length; j++) {
          arr[j] = arr[j + 1];
          arr.length--;
        }
      }
    }
  }
  return arr;
}

let ques = [2,3,9, 17, 8, 33, 37];

console.log(deltePrime(ques));
