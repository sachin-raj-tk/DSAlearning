function uniqueArray(arr){
    const set = new Set(arr)
    if(set.size==arr.length){
        return true;
    }else{
        return false;
    }
    
}


let values = [2,3,4,5,6];

console.log(uniqueArray(values))