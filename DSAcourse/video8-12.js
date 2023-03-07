// class LinkedList{
//     constructor(value) {
//         this.head = {
//             value : value,
//             next : null
//         }
//         this.tail = this.head;
//         this.length = 1
//     }
//     append(value){
//         const newNode = {
//             value : value,
//             next : null
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }

//     prepend(value){
//         const newNode = {
//             value : value,
//             next : null
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this
//     }
//     printedList(){
//         const arrray = [];
//         let currentNode = this.head;
//         while(currentNode !== null){
//             arrray.push(currentNode.value);
//             currentNode = currentNode.next
//         }
//         return arrray;
//     }
//     insert(index,value){
//         if(index >= this.length){
//             return this.append(value)
//         }
//         const newNode = {
//             value: value,
//             next : null
//         };
//         let leader = this.traverseToIndex(index-1)
//         const holdPointer = leader.next
//         leader.next = newNode;
//         newNode.next = holdPointer;
//         this.length++;
//         return this.printedList();
//     }
//     traverseToIndex(index){
//         let counter = 0;
//         let currentNode = this.head;
//         while(counter != index){
//             currentNode = currentNode.next;
//             counter++
//         }
//         return currentNode;
//     }

    
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(423)
// myLinkedList.prepend(54);
// // console.log(myLinkedList);
// // console.log( myLinkedList.printedList());
// console.log(myLinkedList.insert(1,33));







//EXAMPLE TWO

// class LinkedList{
//     constructor(value) {
//         this.head = {
//             value : value,
//             next : null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value){
//         const newNode = {
//             value : value,
//             next : null
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++
//         return this;
//     }
//     prepend(value){
//         const newNode = {
//             value : value,
//             next : null
//         }
//         newNode.next = this.head,
//         this.head = newNode
//     }
//     insert(index,value){
//         if(index >= this.length ){
//             return this.append(value)
//         }
//         const newNode = {
//             value : value,
//             next : null
//         }
//         let leader =  this.traverseToIndex(index-1);
//         let holdPointer = leader.next;
//         leader.next = newNode;
//         newNode.next = holdPointer;
//         this.length++;
//         return this.pritList()
//     }
//     traverseToIndex(index){
//         let count = 0;
//         let currentNode = this.head
//         while(count !== index){
//           currentNode = currentNode.next;
//           count++;   
//         }
//         return currentNode;
//     }
//     pritList(){
//         let arrray = [];
//         let currentNode = this.head;
//         while(currentNode !== null){
//             arrray.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         return arrray
//     }
// }

// const myLinkedList = new LinkedList(10)
// myLinkedList.append(33);
// myLinkedList.prepend(47)
// console.log(myLinkedList.insert(1,83));
//console.log(myLinkedList);


class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = {
            value : value,
            next : null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        let newNode = {
            value : value,
            next : null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }
    insert(index,value){
        if(index>=this.length){
            return this.append
        }
        const newNode = {
            value : value,
            next : null
        }
        let leader = this.traverseToIndex(index-1);
        let holdPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdPointer;
        this.length++;
        return this;
    }
    remove(index){
        let leader = this.traverseToIndex(index-1);
        let unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
        return this.printedList();
    }
    traverseToIndex(index){
        let currentNode = this.head;
        let count = 0;
        while(index > count){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
    reverse(){
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
           let temp = second.next;
           second.next = first;
           first = second;
           second = temp;
        }
        return this.printedList()
    }
    printedList(){
        let arrray = [];
        let currentNode = this.head;
        while(currentNode !== null){
            arrray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arrray;
    }
}

const myLinkedList = new LinkedList(10);
const mylist = new LinkedList(10);
// myLinkedList.append(37);
// myLinkedList.prepend(28);
// myLinkedList.insert(1,55)
// console.log(myLinkedList.remove(1));
console.log(myLinkedList);
console.log(mylist);
const arr = []
while(myLinkedList.head){
    arr.push(myLinkedList.head.value)
    myLinkedList.head = myLinkedList.head.next
}
console.log(arr)
//console.log(myLinkedList.reverse());
console.log(myLinkedList == mylist);
//console.log(myLinkedList.printedList());


// remove(index){
//     let leader = this.traverseToIndex(index-1)
//     let unWantedNode = leader.next;
//     leader.next = unWantedNode.next;
//     this.length--;
// }

reverse(){
    let first = this.head;
    this.tail = this.head;
    let second = first.next
    while(second){
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
}