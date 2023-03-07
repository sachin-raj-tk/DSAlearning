// let cars  
// console.log("hai"+cars+typeof(cars));


// curl 'https://api.twilio.com/2010-04-01/Accounts/AC29e682715b21fa69d2047af579936a8f/Messages.json' -X POST \
// --data-urlencode 'To=+919048610194' \
// --data-urlencode 'MessagingServiceSid=MGb9964a2691ac00e7df2384402875b4d9' \
// --data-urlencode 'Body=Hello' \
// -u AC29e682715b21fa69d2047af579936a8f:[Redacted]




class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }else{
            let currentNode = this.root
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                }
                if(value > currentNode.value){
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    return this;
    }
}

const tree = new BinarySearchTree()

console.log(tree.insert(9))
console.log(tree.insert(2))
