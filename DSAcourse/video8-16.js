class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next : null,
            prev : null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = {
            value : value,
            next : null,
            prev : null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        let newNode = {
            value : value,
            next : null,
            prev : null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
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
            next : null,
            prev : null
        }
        let leader = this.traverseToIndex(index-1);
        let follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
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
myLinkedList.append(37);
myLinkedList.prepend(28);
myLinkedList.insert(1,55)
// console.log(myLinkedList.remove(1));
console.log(myLinkedList);