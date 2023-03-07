class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }



  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parrentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parrentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value > currentNode.value) {
        parrentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        if (currentNode.right === null) {
          if (!parrentNode) {
            this.root = currentNode;
          } else {
            if (currentNode.value < parrentNode.value) {
              parrentNode.left = currentNode.left;
            } else if (currentNode.value > parrentNode.value) {
              parrentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left === null) {
          if (!parrentNode) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            //if parent > current,  make currentNode.right, right child of the parent
            if (currentNode.value < parrentNode.value) {
              parrentNode.left = currentNode.right;
            }else if (currentNode.value > parrentNode.value){
              parrentNode.right = currentNode.right
            }
          }
        }else{
          // find the right childs left most child
          let leftmost = currentNode.right.left;
          let leftmostParrent = currentNode.right;
          while(leftmost.left !== null){
            leftmostParrent = leftmost;
            leftmost = leftmost.left
          }
          // Parents left subtree is now leftmost's right subtree
          leftmostParrent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parrentNode === null){
            this.root = leftmost;
          }else{
            if(currentNode.value < parrentNode.value){
              parrentNode.left = leftmost;
            }else if(currentNode.value > parrentNode.value){
              parrentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }


  breadthFirstSearch(){
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while(queue.length > 0){
      currentNode = queue.shift();
      console.log(currentNode.value);
      list.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }
    return list;
  }

  breadthFirstSearchRecursive(queue,list){
    if(!queue.length){
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left){
      queue.push(currentNode.left)
    }
    if(currentNode.right){
      queue.push(currentNode.right)
    }
    return this.breadthFirstSearchRecursive(queue,list)
  }

  DFSInorder(){
     return traverseInOrder(this.root,[])
  }

  DFPostorder(){
    return traversePostOrder(this.root,[])
  }
  DFSPreorder(){
    return traversePreOrder(this.root,[])
  }
}

function traverseInOrder(node,list) {
  console.log(node.value);
  if(node.left){
    traverseInOrder(node.left,list)
  }
  list.push(node.value)
  if(node.right){
    traverseInOrder(node.right,list)
  }
  return list;
}

function traversePreOrder(node,list){
  console.log(node.value);
  list.push(node.value);
  if(node.left){
    traversePreOrder(node.left,list);
  }
  if(node.right){
    traversePreOrder(node.right,list)
  }
  return list
}

function traversePostOrder(node,list){
  console.log(node.value);
  if(node.left){
    traversePostOrder(node.left,list)
  }
  if(node.right){
    traversePostOrder(node.right,list)
  }
  list.push(node.value);
  return list;
}


function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();


//       9
//   4       20
//1    6  15    170


tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookup(90));
// console.log(tree.remove(170))
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchRecursive([tree.root],[]));
// console.log(tree.DFSInorder());
// console.log(tree.DFSPreorder());
console.log(tree.DFPostorder());

//inorder result [1,4,6,9,15,20,170]
//preorder result [9,4,1,6,20,15,170]
//postorder result [1,6,4,15,170,20,9]
