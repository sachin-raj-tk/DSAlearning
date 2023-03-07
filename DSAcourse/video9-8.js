
// // stack implementaion using linked list

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }
//     peek(){
//        return this.top;
//     }
//     push(value){
//        const newNode = new Node(value);
//        if(this.length === 0){
//         this.top = newNode;
//         this.bottom = newNode;
        
//        }
//        else{
//         const holdPointer = this.top;
//         this.top = newNode;
//         this.top.next = holdPointer;
//     }
//     this.length++;
//     return this;
//     }
//     pop(){
//        if(!this.top){
//          return null;
//        }
//        if(this.top === this.bottom){
//         this.bottom = null;
//         return this;
//        }
//         const holdPointer = this.top;
//         this.top = this.top.next
//         this.length--;
//         return holdPointer;
       
//     }
// }

// const myStack = new Stack();
// console.log(myStack.push('udemy'));
// console.log(myStack.push('insta'));
// console.log(myStack.push('google'));
// console.log(myStack.peek());
// console.log(myStack.pop());





class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value)
        if(!this.top){
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
            return this
        }
        const holdPointer = this.top;
        this.top = newNode;
        this.top.next = holdPointer;
        this.length++;
        return this;        
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
            this.length--;
            return this;
        }
        // const holdPointer = this.top
        this.top = this.top.next;
        this.length--;
        return this;
    }
}


const myStack = new Stack();
console.log(myStack.push(5));