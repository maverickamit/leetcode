class Stack<T> {
  private items: T[] = [];

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

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  //   const stack: number[] = [];
  const stack = new Stack();
  const map = new Map<number, number>();

  // Iterate through nums2 to fill the map with the next greater element for each number
  nums2.forEach((element) => {
    while (!stack.isEmpty() && stack.peek()! < element) {
      map.set(stack.pop()!, element);
    }
    stack.push(element);
  });

  // Map each element in nums1 to its next greater element in nums2 using the map
  return nums1.map((item) => map.get(item) ?? -1);
}
let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
