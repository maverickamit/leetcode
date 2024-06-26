class Stack<T> {
  items: T[] = [];

  // Pushes an item onto the stack
  push(item: T): void {
    this.items.push(item);
  }

  // Removes and returns the top item of the stack
  pop(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.pop();
  }

  // Returns the top item of the stack without removing it
  peek(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  //Returns current items in an arrary

  // Returns true if the stack is empty, false otherwise
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Returns the number of items in the stack
  size(): number {
    return this.items.length;
  }

  // Clears the stack
  clear(): void {
    this.items = [];
  }
}

function dailyTemperatures(temperatures: number[]): number[] {
  const stack = new Stack<number>();
  const indexStack = new Stack<number>();
  const ans = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const element = temperatures[i];
    while (!stack.isEmpty() && element > stack.peek()!) {
      stack.pop();
      let stackTopIndex = indexStack.pop() as number;
      ans[stackTopIndex] = i - stackTopIndex;
    }
    stack.push(element);
    indexStack.push(i);
  }

  return ans;
}

let x = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(x));
