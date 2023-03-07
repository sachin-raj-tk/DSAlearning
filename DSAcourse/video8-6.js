//LINKED LIST

// 10-->5-->16

// let myLinkedList = {
//     head : {
//         value : 10,
//         next : {
//             value : 5,
//             next : {
//                 value : 16,
//                 next : null
//             }
//         }
//     }
// }

// class LinkedList {
//     constructor(value){
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
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
// }

// const myLinkedList = new LinkedList(10);

// myLinkedList.append(5);
// myLinkedList.append(16);

// console.log(myLinkedList);








// EXAMPLE TWO


// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList1 {
//     constructor(value){
//         this.head = {
//             value : value,
//             next : null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value){
//        const newNode = new Node(value)
//        this.tail.next = newNode;
//        this.tail = newNode;
//        this.length++
//        return this;
//     }


    
//     prepend(value){
//        const newNode = new Node(value)
        
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }

//     insert(index,value){
//         if(index >= this.length){
//            return this.append (value);
//         }
//         const newNode = {
//             value : value,
//             next : null
//         }
//         const leader = traverseToIndex
//     }
     
//     printList(){
//         const arrray = [] ;
//         let currentNode = this.head;
//         while(currentNode !== null){
//             arrray.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         return arrray;
//     }
// }

// const myLinkedList1 = new LinkedList1(20);

// myLinkedList1.append(59)
// myLinkedList1.prepend(22);
// console.log( myLinkedList1.printList());
// console.log(myLinkedList1);




// EXAMPLE THREE

// class LinkedList3{
//     constructor(value){
//         this.head = {
//             value: value,
//             next : null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
// }


// const myLinkedList3 = new LinkedList3(10)
// console.log(myLinkedList3);




//EXAMPLE FOUR

