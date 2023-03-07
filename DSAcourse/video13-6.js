//BUBBLE SORT 

const num = [8,234,54,2,34,32,123,33,3,2,3,38,4,5,6,11,10,9]

// const bubblesorter=(arr)=>{
//     let length = arr.length
//     for(let i=0;i<length;i++){
//         for(let j=0;j<length;j++){
//             if(arr[j]>arr[j+1]){
//                 arr[j] = arr[j]+arr[j+1];
//                 arr[j+1] = arr[j]-arr[j+1];
//                 arr[j]= arr[j]-arr[j+1];
//             }
//         }
//     }
//     return arr
// }


// console.log(bubblesorter(num));


function myBubble(arr){
    let length = arr.length
    for(let i = 0; i<length; i++){
        for(let j= 0; j<length;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                 arr[j] = arr[j+1];
                 arr[j+1] = temp 
            }
        }
    }
    return arr
}
