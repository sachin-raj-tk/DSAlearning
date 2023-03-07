const num = [8,234,54,2,34,32,123,33,3,2,3,38,4,5,6,11,10,9]


// const selectionSorter = (arr) => {
//     let length = arr.length
//     for(let i = 0; i< length; i++){
//         let min = i;
//         let temp = arr[i]
//         for(let j=i+1;j< length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
                
//             }
//         }
//         arr[i] = arr[min]
//         arr[min] = temp
        
//     }
//     return arr
// }

// console.log(selectionSorter(num));


function mySelection(arr){
    let length = arr.lengt
    for(let i= 0;i<length;i++){
        let min = i;
        let temp = arr[i]
        for(j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j;
                
        }
    }
    arr[i] = arr[min]
    arr[min] = temp;
}