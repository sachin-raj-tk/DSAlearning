// class Graph {
//     constructor() {
//         this.numberOfNodes = 0;
//         this.adjacentList = {};
//     }

//     addVertex(node){
//         this.adjacentList[node] = [];
//         this.numberOfNodes++;
//     }

//     addEdge(node1,node2){
//         this.adjacentList[node1].push(node2);
//         this.adjacentList[node2].push(node1);
//     }

//     showConnections(){
//         const allNodes = Object.keys(this.adjacentList);
//         for(let node of allNodes){
//             let nodeConnections = this.adjacentList[node];
//             let connections = "";
//             let vertex;
//             for(vertex of nodeConnections){
//                 connections += vertex + " ";
//             }
//             console.log(node + "--->" + connections);
//         }
//     }
// }

// const myGraph = new Graph();

// myGraph.addVertex(0);
// myGraph.addVertex(1);
// myGraph.addVertex(2);
// myGraph.addVertex(3);
// myGraph.addVertex(4);
// myGraph.addVertex(5);
// myGraph.addVertex(6);
// myGraph.addEdge("3","1")
// myGraph.addEdge("3","4")
// myGraph.addEdge("4","2")
// myGraph.addEdge("4","5")
// myGraph.addEdge("1","2")
// myGraph.addEdge("1","0")
// myGraph.addEdge("0","2")
// myGraph.addEdge("6","5")


// myGraph.showConnections();




// class Graph{
//     constructor(){
//         this.noOfNodes = 0;
//         this.adjacentList ={};
//     }

//     addVertex(node){
//         this.adjacentList[node] = [];
//         this.noOfNodes++;
//     }

//     addEdge(node1,node2){
//         this.adjacentList[node1].push(node2);
//         this.adjacentList[node2].push(node1);
//     }

//     seeConnections(){
//         const allNodes = Object.keys(this.adjacentList);
//         for(let node of allNodes){
//            let nodeConnections = this.adjacentList[node];
//            let connections = "";
//            let vertex;
//            for(vertex of nodeConnections){
//               connections += vertex+" "
//            }
//            console.log(node+ "-->" + connections);
//         }
//     }

//     breadthFirstSearch(graph,startNode){
//          const visited = {};
//          const visitedArray = [];
//          const queue = [startNode];
//          while(queue.length > 0){
//             const currentNode = queue.shift();
//             if(!visited[currentNode]){
//                 visited[currentNode] = true;
//                 visitedArray.push(currentNode)
//                 console.log(currentNode);
//                 graph[currentNode].forEach(neighbour =>{
//                     if(!visited[neighbour]){
//                         queue.push(neighbour)
//                     }
//                 })
//             }
//          }

//          return visitedArray;
//     }

//     depthFirstSearch(graph,startNode,visited = {},visitedArray = []){
         
//         visited[startNode] = true;
//         visitedArray.push(startNode);
//         console.log(startNode);
//         graph[startNode].forEach(neighbour=>{
//             if(!visited[neighbour]){
//                 this.depthFirstSearch(graph,neighbour,visited,visitedArray)
//             }
//         })
//         return visitedArray;
//     }


// }


// const myGraph = new Graph();

// myGraph.addVertex(0);
// myGraph.addVertex(1);
// myGraph.addVertex(2);
// myGraph.addVertex(3);
// myGraph.addVertex(4);
// myGraph.addVertex(5);
// myGraph.addVertex(6);

// myGraph.addEdge("1","0")
// myGraph.addEdge("1","2")
// myGraph.addEdge("0","2")
// myGraph.addEdge("1","3")
// myGraph.addEdge("3","4")
// myGraph.addEdge("2","4")
// myGraph.addEdge("4","5")
// myGraph.addEdge("5","6")

// myGraph.seeConnections()

// console.log(myGraph.breadthFirstSearch(myGraph.adjacentList,"0"));

// console.log(myGraph.depthFirstSearch(myGraph.adjacentList,"0"));





// class Graph {
//     constructor(){
//         this.noOfNodes = 0;
//         this.adjacentList = {};
//     }


//     addVertex(node){
//         this.adjacentList[node];
//         this.noOfNodes++;
//     }

//     addEdge(node1,node2){
//         this.adjacentList[node1].push(node2);
//         this.adjacentList[node2].push(node1);
//     }

//     breadthFirstSearch(graph,startNode){
//        let visited = {};
//        let visitedArray = [];
//        let queue = [startNode];
//         while(queue.length > 0){
//             let currentNode = queue.shift();
//             if(!visited[currentNode]){
//                 visited[currentNode] = true;
//                 visitedArray.push(currentNode);
//                 graph[currentNode].forEach(neighbour=>{
//                     if(!visited[neighbour]){
//                         queue.push(neighbour);
//                     }
//                 })
//             }
//         }
//         return visitedArray;
//     }

//     depthFirstSearch(graph,startNode,visited={},visitedArray=[]){
//         visited[startNode] = true;
//         visitedArray.push(startNode)
//         graph[startNode].forEach(neighbour=>{
//             if(!visited[startNode]){
//                 this.depthFirstSearch(graph,neighbour,visited,visitedArray)
//             }
//         })
//         return visitedArray;
//     }
// }


// const myGraph = new Graph();

// myGraph.addVertex(0);
// myGraph.addVertex(1);
// myGraph.addVertex(2);
// myGraph.addVertex(3);
// myGraph.addVertex(4);
// myGraph.addVertex(5);
// myGraph.addVertex(6);

// myGraph.addEdge("1","0")
// myGraph.addEdge("1","2")
// myGraph.addEdge("0","2")
// myGraph.addEdge("1","3")
// myGraph.addEdge("3","4")
// myGraph.addEdge("2","4")
// myGraph.addEdge("4","5")
// myGraph.addEdge("5","6")

// console.log(myGraph.depthFirstSearch(myGraph.adjacentList,"0"));

// console.log(myGraph.depthFirstSearch(myGraph.adjacentList,"0"));







class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1,node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    breadthFirstSearch(graph,startNode){
        let visited = {};
        let visitedArray = [];
        let queue = [startNode];
        while(queue.length > 0){
            let currentNode = queue.shift();
            if(!visited[currentNode]){
                visited[currentNode] = true;
                visitedArray.push(currentNode);
                graph[currentNode].forEach(neighbour=>{
                    if(!visited[neighbour]){
                        queue.push(neighbour)
                    }
                })
            }
        }
        return visitedArray;
    }

    depthFirstSearch(graph,startNode,visited={},visitedArray=[]){
        visited[startNode] = true;
        visitedArray.push(startNode);
        graph[startNode].forEach(neighbour=>{
            if(!visited[neighbour]){
                this.depthFirstSearch(graph,neighbour,visited,visitedArray)
            }
        })
        return visitedArray;
    }
}


const myGraph = new Graph();

myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);


myGraph.addEdge("1","0")
myGraph.addEdge("1","2")
myGraph.addEdge("0","2")
myGraph.addEdge("1","3")
myGraph.addEdge("3","4")
myGraph.addEdge("2","4")
myGraph.addEdge("4","5")
myGraph.addEdge("5","6")


console.log(myGraph.breadthFirstSearch(myGraph.adjacentList,"0"));
console.log(myGraph.depthFirstSearch(myGraph.adjacentList,"0"))

