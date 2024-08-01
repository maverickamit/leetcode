/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class KthLargest {
  private minHeap: number[] = [];
  private k: number;
  constructor(k: number, nums: number[]) {
    this.k = k;
    nums.forEach((num) => this.add(num));
  }
  private getParentIndex = (elemIndex: number) => {
    return Math.max(Math.floor((elemIndex + 1) / 2) - 1, 0);
  };

  private getSmallerChildIndex = (elemIndex: number, heap: number[]) => {
    const leftChildIndex = (elemIndex + 1) * 2 - 1;
    const rightChildIndex = (elemIndex + 1) * 2;
    const leftChild = heap[leftChildIndex];
    const rightChild = heap[rightChildIndex];

    if (rightChild === undefined || leftChild < rightChild) {
      return leftChildIndex;
    }
    return rightChildIndex;
  };

  add(val: number): number {
    if (val > this.minHeap[0] || this.minHeap.length < this.k) {
      this.minadd(val);
      const res =
        this.minHeap.length > this.k
          ? this.mindelete(this.minHeap)
          : this.minHeap;
      this.minHeap = res;
    }
    return this.minHeap[0];
  }

  private minadd(val: number) {
    this.minHeap.push(val);
    let elemIndex = this.minHeap.length - 1;

    while (elemIndex > 0) {
      const parentIndex = this.getParentIndex(elemIndex);
      if (val < this.minHeap[parentIndex]) {
        this.minHeap[elemIndex] = this.minHeap[parentIndex];
        this.minHeap[parentIndex] = val;
        elemIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private mindelete(heap: number[]): number[] {
    const lastElem = heap.pop() as number;
    heap[0] = lastElem;
    let elemIndex = 0;

    while (elemIndex < heap.length - 1) {
      const smallerChildIndex = this.getSmallerChildIndex(elemIndex, heap);
      if (lastElem > heap[smallerChildIndex]) {
        heap[elemIndex] = heap[smallerChildIndex];
        heap[smallerChildIndex] = lastElem;
        elemIndex = smallerChildIndex;
      } else {
        break;
      }
    }
    return heap;
  }
}

// Function to run test cases
function runTests() {
  function assertEqual(actual: any, expected: any, message: string) {
    if (actual !== expected) {
      console.error(
        `Assertion Failed: ${message}. Expected ${expected}, but got ${actual}`
      );
    } else {
      console.log(`Assertion Passed: ${message}`);
    }
  }

  // Test case 1
  const kthLargest1 = new KthLargest(3, [4, 5, 8, 2]);
  assertEqual(
    kthLargest1.add(3),
    4,
    "After adding 3, the 3rd largest element should be 4"
  );
  assertEqual(
    kthLargest1.add(5),
    5,
    "After adding 5, the 3rd largest element should be 5"
  );
  assertEqual(
    kthLargest1.add(10),
    5,
    "After adding 10, the 3rd largest element should be 5"
  );
  assertEqual(
    kthLargest1.add(9),
    8,
    "After adding 9, the 3rd largest element should be 8"
  );
  assertEqual(
    kthLargest1.add(4),
    8,
    "After adding 4, the 3rd largest element should be 8"
  );

  // Test case 2
  const kthLargest2 = new KthLargest(2, [1, 2]);
  assertEqual(
    kthLargest2.add(3),
    2,
    "After adding 3, the 2nd largest element should be 2"
  );
  assertEqual(
    kthLargest2.add(4),
    3,
    "After adding 4, the 2nd largest element should be 3"
  );

  // New test case
  const kthLargest3 = new KthLargest(1, []);
  assertEqual(
    kthLargest3.add(-3),
    -3,
    "After adding -3, the 1st largest element should be -3"
  );
  assertEqual(
    kthLargest3.add(-2),
    -2,
    "After adding -2, the 1st largest element should be -2"
  );
  assertEqual(
    kthLargest3.add(-4),
    -2,
    "After adding -4, the 1st largest element should be -2"
  );
  assertEqual(
    kthLargest3.add(0),
    0,
    "After adding 0, the 1st largest element should be 0"
  );
  assertEqual(
    kthLargest3.add(4),
    4,
    "After adding 4, the 1st largest element should be 4"
  );
  //Test case 4
  const kthLargest4 = new KthLargest(2, [0]);
  assertEqual(
    kthLargest4.add(-1),
    -1,
    "After adding -1, the 2nd largest element should be -1"
  );
  assertEqual(
    kthLargest4.add(1),
    0,
    "After adding 1, the 2nd largest element should be 0"
  );
  assertEqual(
    kthLargest4.add(-2),
    0,
    "After adding -2, the 2nd largest element should be 0"
  );
  assertEqual(
    kthLargest4.add(-4),
    0,
    "After adding -4, the 2nd largest element should be 0"
  );
  assertEqual(
    kthLargest4.add(3),
    1,
    "After adding 3, the 2nd largest element should be 1"
  );
}

// Run the tests
runTests();
