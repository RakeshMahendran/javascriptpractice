console.log("Hi")
// constructors are used over functions for efficient memory management ,


class Node {
    constructor(value) {
       this.value = value;
       this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    isEmpty() {
     return  this.size === 0
    }

    getSize() {
        return this.size
    }
}

const list = new LinkedList

console.log(list.isEmpty())