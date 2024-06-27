class MinStack {
  //main stack
  stack: number[];
  //min stack that stacks the minimum value encountered till then to the corresponding height of the main stack
  min: number[];

  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (!this.min.length) {
      this.min.push(val);
    } else {
      this.min.push(Math.min(val, this.getMin()));
    }
  }

  pop(): void {
    this.stack.pop();
    this.min.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }
}

var obj = new MinStack();
obj.push(2);
console.log(obj);
obj.push(0);
console.log(obj);
obj.push(3);
console.log(obj);
obj.push(3);
console.log(obj);

obj.pop();
console.log(obj);
obj.pop();
console.log(obj);

obj.pop();
console.log(obj);

var param_3 = obj.top();
console.log(param_3);

var param_4 = obj.getMin();
console.log(param_4);
