


class Graph{
    constructor(){
        this.noOfNodes = 0;
        this.adjacentLIst = {};
    }

    addVertex(node){
        this.adjacentLIst[node] = [];
        this.noOfNodes++;
    }

    addEdge(node1,node2){
        this.adjacentLIst[node1].push(node2);
        this.adjacentLIst[node2].push(node1);
    }

    breadthFirstSearch(graph,startNode){
        let visited = {};
        let visitedArray = [];
        let queue = [startNode];
        while(queue.length > 0){
            let currentNode = queue.shift()
          if(!visited[currentNode]){
            visited[currentNode] = true;
            visitedArray.push(currentNode)
            graph[currentNode].forEach(neighbour=>{
                if(!visited[neighbour]){
                    queue.push(neighbour)
                }
            })
          }
          return visitedArray;
        }
    }
}