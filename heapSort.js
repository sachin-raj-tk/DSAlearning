// obtained from chatgpt

// function heapSort(arr) {
//     function heapify(arr, length, i) {
//       let largest = i;
//       let left = 2 * i + 1;
//       let right = 2 * i + 2;
  
//       if (left < length && arr[left] > arr[largest]) {
//         largest = left;
//       }
  
//       if (right < length && arr[right] > arr[largest]) {
//         largest = right;
//       }
  
//       if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, length, largest);
//       }
//     }
  
//     for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//       heapify(arr, arr.length, i);
//     }
  
//     for (let i = arr.length - 1; i >= 0; i--) {
//       [arr[0], arr[i]] = [arr[i], arr[0]];
//       heapify(arr, i, 0);
//     }
  
//     return arr;
//   }





// obtanined from geeksforgeeks


function sort (arr) {
    var N = arr.length;
    


    function heapify(arr,N,i){
        let largest = i // initialize largest as the root
        let left =  2 * i + 1;
        let right = 2 * i + 2;

        if(left < N  && arr[left] > arr[largest]){
            largest = left
        }

        if(right < N && arr[right] > arr[largest]){
            largest = right
        }

        if(arr[i] !== arr[largest]){
            let swap = arr[i]
            arr[i]  = arr[largest]
            arr[largest] = swap;
            heapify(arr,N,largest)
        }

       
        
    }


    //build heap (by rearranging array)

    for(var i = Math.floor(N/2)-1; i >= 0; i--){
        heapify(arr,N,i)
    }

    //One by one extract an element from a heap

    for(var i = N - 1; i > 0; i--){
        //Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
       
        //call max heapify on the reduced heap

        heapify(arr,i,0)
    }

    


     // A utlity function to print array of size n

    function printArray(arr){
        console.log("The sorted array is :",arr);
    }

    printArray(arr);



}


let test = [12, 11, 13, 5, 6, 7];

sort(test);

// console.log(test);



function sort(arr){
    var N = arr.length;

    function heapify(arr,N,i){
        let largest = i;
        let left = 2*i+1;
        let right = 2*i+2

        if(left < N && arr[left] > arr[largest]){
            largest = left;
        }
        if(right < N && arr[right] > arr[largest]){
            largest = right
        }

        if(arr[i] !== arr[largest]){
            let swap = arr [i]
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr,N,largest)
        }
    }

    for(var i = N-1; i>0;i--){
        heapify(arr,N,i)
    }

    for(var i = N-1;i>0;i--){
        let temp = arr[0];
        arr[0]  = a [i]
        arr[i] = temp
        heapify(arr,i,0)
    }
}






function heapSort(arr){
    var N = arr.length;

    heapify(arr,N,i){
        let largest = i;
        let left = 2*i+1;
        let right = 2*i+2;
        if(left < N && arr[left] > arr[largest]){
            largest = left;
        }
        if(right < N && arr[right] > arr[largest]){
            largest = right;
        }

        if(arr[i] !== arr[largest]){
            let swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr,N,largest)
        }
    }
}