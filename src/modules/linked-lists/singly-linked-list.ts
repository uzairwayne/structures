import { SinglyLinkedListNode } from './node';

export class SinglyLinkedList<T> {
  private head: SinglyLinkedListNode<T> | null;

  constructor() {
    this.head = null;
  }

  public add(data: T): void {
    const newNode = new SinglyLinkedListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // TODO: pop method, this function will remove the last element from the linked list
  public pop() {}

  // TODO: Implement the remove method
  public remove(index: number) {}

  // TODO: Implement the reverse method, this function will reverse the linked list
  public reverse() {}

  // TODO: Implement the at method, this function will returns the node at the given index
  public at() {}

  public toArray(): Array<T> {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}
