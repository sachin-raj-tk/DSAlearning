function finT(arr,target){
    console.log(arr)
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [arr[i],arr[j]];
            }
        }
        
    }
    return `does not add up to ${target}`
}

 let values=[2,4,3,3];


console.log(finT(values,6))