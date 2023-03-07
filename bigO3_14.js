function justAnotherFunction(items){
    console.log(items[0]);
    var middleIndex = Math.floor(items.length/2);
    var index = 0;

    while(index < middleIndex){
        console.log(items[index]);
        index++;

    };

    for(var i=0;i<100;i++){
        console.log("hi")
    }
}


//big O  is = O(n)

// for a function with many constant steps also, big o is O(n), example:  O(n+ 50000000000000) = O(n),  O(n/2 + 50000) = O(n)