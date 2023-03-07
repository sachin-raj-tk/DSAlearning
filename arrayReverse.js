function arrayReverse(arr){
    let j = arr.length-1
    for(let i=0;i<j;i++,j--){
        arr[i]=arr[i]+arr[j];
        arr[j]=arr[i]-arr[j];
        arr[i]=arr[i]-arr[j];
    }
    return arr;
}


let values = [2,4,6,8,9,11,15];

console.log(arrayReverse(values));