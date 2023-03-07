function bfs(graph, startNode) {
    const visited = {}; // an object to keep track of visited nodes
    const queue = [startNode]; // initialize the queue with the start node
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (!visited[currentNode]) {
        visited[currentNode] = true;
        console.log(currentNode); // do something with the node
        graph[currentNode].forEach(neighbor => {
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
        });
      }
    }
  }



  function dfs(graph, startNode, visited = {}) {
    visited[startNode] = true;
    console.log(startNode); // do something with the node
    graph[startNode].forEach(neighbor => {
      if (!visited[neighbor]) {
        dfs(graph, neighbor, visited);
      }
    });
  }