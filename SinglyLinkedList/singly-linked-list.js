class SLNode {
  value;
  next;
  constructor (value) {
    this.value = value;
  }
  setNext (next) {
    this.next = next;
  }
}

class SinglyLinkedList {
  head;
  constructor (head) {
    this.head = head;
  }

  append (node) {
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = node;
  }

  prepend (node) {
    if (this.head === null) {
      this.head == node;
      return;
    }
    let tmp = this.head;
    this.head = node;
    this.head.next = tmp;
  }

  find (node) {
    let cur = this.head;
    if (this.head.value === node.value) {
      return true;
    }
    while (cur.next !== null && cur.next.value !== node.value) {
      cur = cur.next;
    }
    if (cur.value === node.value) return true;
    return false;
  }

  remove (node) {

    if (this.head.value === node.value) {
      if (this.head.next !== null) {
        let newHead = this.head.next;
        this.head = newHead;
        return;
      } else {
        this.head = null;
        return;
      }
    }

    let cur = this.head;
    let pcur;
    
    while (cur.next !== null && cur.next.value !== node.value) {
      pcur = cur;
      cur = cur.next;
    }
    
    if (cur.value !== node.value) {
      return;
    } else {
      pcur.next = (cur.next === null)? null : cur.next;
    }
  }

  isListEmpty () {
    return this.head === null;
  }
}