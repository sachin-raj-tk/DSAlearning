function swap(arr,a,b){
    let temp = arr[a]
    arr[a] = arr[b];
    arr[b] = temp;
}


function pivot(arr,start,end){
    let pivot = arr[start];
    let swapValue = start
    for(let i = start+1; i <=end; i++){
        if(pivot > arr[i]){
            swapValue++;
            swap(arr,swapValue,i)
        }

    }
    swap(arr,start,swapValue);
    return swapValue;
}

function quickSort(arr,start=0, end= arr.length-1){
    if(start < end){
        let pivotValue = pivot(arr,start,end)
        quickSort(arr,start,pivotValue-1);
        quickSort(arr,pivotValue+1,end)
    }
    return arr;
}


console.log(quickSort([3,8,11,35,2,8]));