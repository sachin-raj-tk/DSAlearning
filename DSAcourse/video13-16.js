const num = [8, 234, 54, 2, 34, 32, 123, 33, 3, 2, 3, 38, 4, 5, 6, 11, 10, 9,86];

// function mergeSort(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }
//   // split array into left and right
//   const length = arr.length;
//   const middle = Math.floor(length / 2);
//   const left = arr.slice(0,middle);
//   const right = arr.slice(middle)
//   console.log('left :',left);
//   console.log('right :',right);

//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )

// }



// function merge(left,right){
//     const result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     console.log('hai');
//     while(leftIndex < left.length && rightIndex <right.length){
//         if(left[leftIndex] < right[rightIndex]){
//             result.push(left[leftIndex]);
//             leftIndex++;
//         }else{
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     // console.log("result",result);
//     console.log('result :',result);
//     console.log('leftone',left);
//     console.log('rightone',right);
//     console.log("return value",result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)));
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); 
// }

// console.log(mergeSort(num));




// function mergeSort(arr){
//   let length = arr.length
//   if(length === 1){
//     return arr;
//   }

//   let middle = Math.floor(length/2);
//   let left = arr.slice(0,middle);
//   let right = arr.slice(middle);
  
//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )
// }


// function merge(left,right){
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while(leftIndex < left.length && rightIndex < right.length){
//       if(left[leftIndex] < right[rightIndex]){
//         result.push(left[leftIndex])
//         leftIndex++;
//       }else{
//         result.push(right[rightIndex])
//         rightIndex++;
//       }
//     }
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }




// function mergeSort(arr){
//   let length = arr.length;
//   if(length === 1){
//     return arr;
//   }
//   let middle = Math.floor(length/2)
//   let left = arr.slice(0,middle);
//   let right = arr.slice(middle);
//   return merge(mergeSort(left),mergeSort(right));
  
// }


// function merge(left,right){
//   let result = []
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while(leftIndex < left.length && rightIndex < right.length){
//     if(left[leftIndex] < right[rightIndex]){
//       result.push(left[leftIndex]);
//       leftIndex++;
//     }else{
//       result.push(right[rightIndex])
//       rightIndex++;
//     }
//   }
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

// }

// console.log(mergeSort(num));




function mergeSort(arr){
  let length = arr.length
  if(length === 1){
    return arr;
  }
  let middle = Math.floor(length/2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left),mergeSort(right));
}


function merge(left,right){
  let result = [];
  let leftIndex = 0;
  let rightindex = 0;
  while(leftIndex < left.length && rightindex < right.length){
    if(left[leftIndex] < right[rightindex]){
      result.push(left[leftIndex]);
      leftIndex++;
    }else{
      result.push(right[rightindex]);
      rightindex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightindex))
}


console.log(mergeSort(num));

