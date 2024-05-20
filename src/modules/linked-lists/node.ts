export class SinglyLinkedListNode<T> {
    data: T;
    next: SinglyLinkedListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class DoublyLinkedListNode<T> extends SinglyLinkedListNode<T> {
    prev: DoublyLinkedListNode<T> | null;

    constructor(data: T) {
        super(data);
        this.prev = null;
    }
}
