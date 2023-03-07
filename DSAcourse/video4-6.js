arr1 = ['a','b','c','d']
arr2 = ['x','y','z'];


function checkCommonItem(array1,array2){
    let map = {};
    for(i=0;i<array1.length;i++){
        if(!map[array1[i]]){
            let item = array1[i];
            map[item] = true;
        }
    }
    for(j=0;j<array2.length;j++){
        if(map[array2[j]]){
            return true;
        }
    }
    return false;
}

//console.log(checkCommonItem(arr1,arr2));

function checkCommon(array1,array2){
    return array1.some(item=>array2.includes(item))
}


console.log(checkCommon(arr1,arr2));