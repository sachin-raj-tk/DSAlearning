// function quickSort(arr, start = 0, end = arr.length - 1) {
//     if (start < end) {
//         const pivotIndex = pivot(arr, start, end)
//         quickSort(arr, start, pivotIndex - 1)
//         quickSort(arr, pivotIndex + 1, end)
//     }
//     return arr;

// }
// function swap(arr, a, b) {
//     const temp = arr[a]
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// function pivot(arr, start = 0, end = arr.length - 1) {
//     const pivot = arr[start];
//     let swapIdx = start;
//     for (let i = start + 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             swapIdx++;
//             swap(arr, i, swapIdx)
//         }
//     }
//     swap(arr, start, swapIdx)
//     console.log(arr);
//     return swapIdx;
// }
// console.log(quickSort([4, 6, 1, 2, 5, 8, 7, 9, 3]))


//        _
// [2,3,1,4,6,5,7,9,8]







//swapindex      f  f f                    
//            [1,2,3,4,5,8,7,9,6]

// function quickSort(arr, start = 0, end = arr.length - 1){
//     if(start < end){
//         const pivotIndex = pivot(arr,start,end)
//         quickSort(arr,start,pivotIndex-1)
//         quickSort(arr,pivotIndex+1,end)
//      }
// }

// function swap (arr,a,b) {
//     const temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// function pivot (arr,start = 0, end = arr.length-1){
//     const pivot = arr[start];
//     let swapIndex = start;
//     for(let i = start+1; i < arr.length; i++){
//         if(pivot > arr[i]){
//             swapIndex++;
//             swap(arr,i,swapIndex)
//         }
//     }
//     swap(arr,start,swapIndex)
//     console.log(arr);
//     return swapIndex;
// }


// console.log(quickSort([4, 6, 1, 2, 5, 8, 7, 9, 3]))


// function swap (arr,a,b){
//     const temp = arr[a]
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// function pivot (arr,start = 0,end = arr.length-1){
//     const pivot = arr[start];
//     let swapIndex = start;
//     for(let i = start+1; i <= end ; i++){
//         if(pivot > arr[i]){
//             swapIndex++;
//             swap(arr,swapIndex,i)
//         }
//     }
//     swap(arr,start,swapIndex);
//     // console.log(arr);
//     return swapIndex;
// }

// function quickSort (arr,start = 0, end = arr.length-1){
//     if(start < end){
//         const pivotIndex = pivot(arr,start,end)
//         quickSort(arr,start,pivotIndex-1);
//         quickSort(arr,pivotIndex+1,end)
//     }
//     return arr;
// }

// console.log(quickSort([4, 6, 1, 2, 5, 8, 7, 9, 3]));




function swap (arr,a,b){
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


function pivot(arr,start,end){
    let pivot = arr[start];
    let swapIndex = start;
    for(let i = start +1; i <= end ; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i)
        }
    }
    swap(arr,start,swapIndex);
    console.log(arr);
    return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length -1){
    if(start < end){
        const pivotIndex = pivot(arr,start,end)
        quickSort(arr,start,pivotIndex-1);
        quickSort(arr,pivotIndex+1,end);
    }
    return arr;
}


console.log(quickSort([4, 6, 1, 2, 5, 8, 7, 9, 3]));