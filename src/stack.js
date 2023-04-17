const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];
  }

  //метод который проверяет, пуст ли стек
  isEmpty() {
    return this.items.length === 0;
  }

  // добавляет элемент в стек
  push(element) {
    this.items.push(element);
  }
  //возвращает и удаляет элемент из вершины стека
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
  //возвращает элемент, находящийся на вершине стека без его удаления
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack,
};
