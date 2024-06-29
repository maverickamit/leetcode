class MyQueue {
  private queue: number[] = [];

  constructor() {}

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number | undefined {
    return this.queue.shift();
  }

  peek(): number {
    return this.queue[0];
  }

  size(): number {
    return this.queue.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }
}

class MyStack {
  private queue1 = new MyQueue();
  private queue2 = new MyQueue();

  push(x: number): void {
    this.queue1.isEmpty() ? this.queue2.push(x) : this.queue1.push(x);
  }

  pop(): number {
    if (!this.queue1.isEmpty()) {
      while (this.queue1.size() > 1) {
        this.queue2.push(this.queue1.pop());
      }
      return this.queue1.pop();
    } else {
      while (this.queue2.size() > 1) {
        this.queue1.push(this.queue2.pop());
      }
      return this.queue2.pop();
    }
  }

  top(): number {
    let lastElement;
    if (!this.queue1.isEmpty()) {
      while (this.queue1.size() > 0) {
        lastElement = this.queue1.pop();
        this.queue2.push(lastElement);
      }
    } else {
      while (this.queue2.size() > 0) {
        lastElement = this.queue2.pop();
        this.queue1.push(lastElement);
      }
    }
    return lastElement;
  }

  empty(): boolean {
    return this.queue1.isEmpty() && this.queue2.isEmpty();
  }
}
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
