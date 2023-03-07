function logAllPairs(boxes){
    for(i=0;i<boxes.length;i++){
        for(j=0;j<boxes.length;j++){
            console.log(boxes[i],boxes[j])
        }
    }
}

const box = [2,3,5,0]

logAllPairs(box);