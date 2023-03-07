 function mostRepeated(arr){
   
   let topCount = 0;
   let num;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
            arr[i]= arr[i]+arr[j];
            arr[j]= arr[i]-arr[j];
            arr[i]= arr[i]-arr[j];
        }
        }
    }
    let count = 1;
    for(i=0;i<arr.length;i++){
        
        if(arr[i]==arr[i+1]){
            count++;
            if(count>topCount){
                topCount = count;
                num = arr[i];
            }

        }else{
            count = 1;
        }
    }
    console.log(arr);
    console.log(topCount);
    console.log(num);
 }

 let data = [3,5, 8, 3,9,3, 2,5,5,5, 5, 6,7,3, 5];

 //console.log(mostRepeated(data));
 mostRepeated(data)