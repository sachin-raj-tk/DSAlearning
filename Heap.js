class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (element < parent) {
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}

let heap = new MinHeap();
heap.insert(100);
heap.insert(200);
heap.insert(50);
heap.insert(20)

console.log(heap.heap); // [1, 3, 10, 5]







