class carFleetStack {
  private stack: number[] = [];
  constructor() {}
  push(val: number) {
    if (!this.length()) {
      this.stack.push(val);
      return;
    }
    while (val >= this.peek()) {
      this.pop();
    }
    this.stack.push(val);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.length() - 1];
  }

  length() {
    return this.stack.length;
  }
}

function carFleet(target: number, position: number[], speed: number[]): number {
  const stack = new carFleetStack();
  const combined = position.map((item, index) => ({
    position: item,
    speed: speed[index],
  }));

  combined.sort((a, b) => a.position - b.position);
  combined.forEach((item) => stack.push((target - item.position) / item.speed));

  return stack.length();
}

// Test cases
function runTests() {
  const tests = [
    {
      target: 12,
      position: [10, 8, 0, 5, 3],
      speed: [2, 4, 1, 1, 3],
      expected: 3,
    },
    { target: 20, position: [6, 2, 17], speed: [3, 9, 2], expected: 2 },
    { target: 10, position: [3], speed: [3], expected: 1 },
    { target: 100, position: [0, 2, 4], speed: [4, 2, 1], expected: 1 },
    { target: 10, position: [6, 8], speed: [3, 2], expected: 2 },
    { target: 10, position: [], speed: [], expected: 0 },
    { target: 10, position: [0], speed: [1], expected: 1 },
  ];

  tests.forEach((test, index) => {
    const result = carFleet(test.target, test.position, test.speed);
    console.log(
      `Test ${index + 1}: ${
        result === test.expected
          ? "Passed"
          : `Failed: result:${result}, expected:${test.expected}`
      }`
    );
  });
}

// Run the tests
runTests();
