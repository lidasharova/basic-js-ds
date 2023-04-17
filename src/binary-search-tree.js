const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.three = null;
  }

  // Возвращает корневой узел дерева
  root() {
    return this.three;
  }

  // Добавляет узел с data в дерево
  add(data) {
    const newNode = new Node(data);

    if (this.three === null) {
      this.three = newNode;
      return;
    }
    let currentNode = this.three;

    while (currentNode !== null) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }

        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        // Узел уже существует
        break;
      }
    }
  }

  //возврат корня
  root() {
    return this.three;
  }

  //проверка наличия узла
  has(data) {
    let currentNode = this.three;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.three;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }


//поиск ноды
  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }


  remove(data) {
    this.root = this.removeNode(this.three, data);
  }



  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // found node to remove
      if (node.left === null && node.right === null) {
        // node is a leaf
        node = null;
        return node;
      } else if (node.left === null) {
        // node has one right child
        node = node.right;
        return node;
      } else if (node.right === null) {
        // node has one left child
        node = node.left;
        return node;
      } else {
        // node has two children
        const minNode = this.findMinNode(node.right);
        node.data = minNode.data;
        node.right = this.removeNode(node.right, minNode.data);
        return node;
      }
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  min() {
    if (this.three === null) {
      return null;
    } else {
      return this.findMinNode(this.three).data;
    }
  }

  max() {
    if (this.three === null) {
      return null;
    } else {
      let node = this.three;
      while (node.right !== null) {
        node = node.right;
      }
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
