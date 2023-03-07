function findSecondMax(arr){
    let secondMax;
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondMax = max;
            max = arr[i];
        }
        else if(arr[i]>secondMax){
            secondMax = arr[i];
        }
    }
    return secondMax
}

let values = [0,0,4,7,8,9,30,10,20,25,21,22]
let numbers = [9,8,6,4,3,2]
let num = [2,3,4,5,7, 21]
console.log(findSecondMax(values));