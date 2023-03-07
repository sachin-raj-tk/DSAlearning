class TrieNode {
  constructor(character) {
    this.character = character;
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!current.children[char]) {
        current.children[char] = new TrieNode(char);
      }

      current = current.children[char];
    }

    current.isEnd = true;
  }

  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!current.children[char]) {
        return false;
      }

      current = current.children[char];
    }                                                                                                                                                                                                                                                                             
    return current.isEnd;
  }
  

  startsWith(prefix){
    let current = this.root;
    
      const char = prefix
      if(!current.children[char]){
        return false;
      }
      current = current.children[char];
      
      return true;
      
    
  }
}

const trie = new Trie();
trie.insert("hello");
trie.insert("world");

// console.log(trie.search("hell")); // true
// console.log(trie.search("world")); // true
// console.log(trie.search("hey")); // false


console.log(trie.startsWith("w"))


