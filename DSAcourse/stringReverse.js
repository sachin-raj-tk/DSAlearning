// const str="reverse the string"
// function nemo(){
//     const newstr=[]
//     for(let i=str.length-1;i>=0;i--){
      
//       newstr.push(str[i])
//     }
//     return newstr.join('')
//     // return newstr
    
// }
// const nemo2=()=>{
//     return str.split('').reverse().join("")
// }
// console.log(nemo2())


// const str = "reverse the string"

// function StrinRev(){
//     const newstr = []
//     for(let i = str.length-1;i>=0;i--){
//         newstr.push(str[i])
//     }
//     return newstr.join('')
// }

// console.log(StrinRev());

const str = "reverse the string"

function stringRev(val){
    let newStr = []
    for(let i = val.length-1;i>=0;i--){
        newStr.push(val[i])
    }
    return newStr.join('')
}

console.log(stringRev(str));