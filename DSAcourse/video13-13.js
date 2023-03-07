const num = [8, 234, 54, 2, 34, 32, 123, 33, 3, 2, 3, 38, 4, 5, 6, 11, 10, 9,86];



// function insertionSort(arr){
//     const length = arr.length;
//     for(let i=0; i<length; i++){
//         if(arr[i] < arr[0]){
//             //move number to the first position
//             arr.unshift(arr.splice(i,1)[0]);
//         }else{
//             //find where number should go
//             for(let j=1; j<i; j++){
//                 if(arr[i] > arr[j-1] && arr[i]< arr[j]){
//                     //move number to the right spot
//                     arr.splice(j,0,arr.splice(i,1)[0]);
//                 }
//             }
//         }
//     }
// }



// console.log(insertionSort(num));
// console.log(num);


function insertionSort(arr){
    let length = arr.length
    for(i=0;i<length;i++){
        if(arr[i]<arr[0]){
            arr.unshift(arr.splice(i,1)[0])
        }else{
            for(j=1;j<i;j++){
                if(arr[i]>arr[j-1] && arr[i]<arr[j]){
                    arr.splice(j,0,arr.splice(i,1)[0])
                }
            }
        }
    }
}