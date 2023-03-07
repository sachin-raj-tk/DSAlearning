const ques = [3,5,8,22,15];



//function to find sum using reduce method

// function arraySum(arr){
//     const sum = arr.reduce((x,y)=>x+y);
//     return sum;
// }

//console.log(arraySum(ques));



// function to find sum using custom function

function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    }
    return sum;
}

console.log(findSum(ques));