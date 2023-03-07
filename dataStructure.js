const nemo = ['nemo'];
// const large = new Array(1000).fill('nemo')
// function findNemo(input){
//     let t0 = performance.now();
//    for(let i= 0;i<input.length;i++){
//      if(input[i]=='nemo'){
//         console.log('found nemo')
//      }
//    }
//    let t1 = performance.now();
//  console.log('call to find nemo took '+ (t1-t0) + ' milliseconds')
// }

// findNemo(large);


const findNemo2 = input1 => {
   input1.forEach(value => {
    if(value== 'nemo'){
       console.log('nemo found')
    }
   }) 
}

findNemo2(nemo);

const findNemo3 = input2 => {
  for(let i of input2){
    if(i == 'nemo'){
      console.log('nemo caught')
    }
  }
}

findNemo3(nemo)