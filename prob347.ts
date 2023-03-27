interface FrequencyCounter {
  [key: string]: number; //eg. {"1":2} i.e. no of times the key "1" appears in the provided array
}
interface InvertedFrequencyCounter {
  [key: number]: string[]; //eg. {2:["2","3"]} i.e. an array of numbers that appear exactly 2 times in the provided array
}

function topKFrequent(nums: number[], k: number): number[] {
  let frequencyCounter: FrequencyCounter = {};
  let invertedFrequencyCounter: InvertedFrequencyCounter = {};
  let ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (frequencyCounter[nums[i]]) {
      frequencyCounter[nums[i]]++;
    } else {
      frequencyCounter[nums[i]] = 1;
    }
  }

  for (const [key, value] of Object.entries(frequencyCounter)) {
    if (invertedFrequencyCounter[value]) {
      invertedFrequencyCounter[value].push(key);
    } else {
      invertedFrequencyCounter[value] = [key];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - i;
    if (invertedFrequencyCounter[j]) {
      invertedFrequencyCounter[j].forEach((val) => {
        if (ans.length < k) {
          //Make sure length of answer is not greater than k
          ans.push(+val);
        }
      });
    }
  }

  return ans;
}
