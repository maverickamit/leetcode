function characterReplacement(s: string, k: number): number {
  // Initialize pointers for the sliding window
  let startIndex = 0;
  let endIndex = 0;
  // Initialize variables to track the maximum frequency of a character in the current window and the maximum length of the window
  let maxFreq = 0;
  let maxLength = 0;

  // Map to keep track of character frequencies within the current window
  const charMap = new Map<string, number>();

  // Function to update the maximum length of a valid substring found
  function setMaxLength(start: number, end: number) {
    const length = end - start + 1;
    maxLength = Math.max(length, maxLength);
  }

  // Function to update the maximum frequency of any character in the current window
  function setMaxFrequency(freq: number) {
    maxFreq = Math.max(maxFreq, freq);
  }

  // Function to calculate the current window's length
  function getWindowLength() {
    return endIndex - startIndex + 1;
  }

  // Iterate over the string
  while (endIndex < s.length) {
    let elem = s[endIndex];
    // Update the frequency of the current character
    let currentCount = charMap.get(elem) ?? 0;
    charMap.set(elem, currentCount + 1);
    // Update the maximum frequency found so far
    setMaxFrequency(charMap.get(elem) ?? 0);

    // Check if the current window is valid (i.e., can be transformed into a string with all same characters using <= k operations)
    if (maxFreq + k >= getWindowLength()) {
      // If valid, possibly update the maximum length found so far
      setMaxLength(startIndex, endIndex);
    } else {
      // If not valid, move the start index of the window forward and adjust the frequency map accordingly
      let startElement = s[startIndex];
      charMap.set(startElement, charMap.get(startElement)! - 1);
      startIndex++;
    }
    // Move the end index of the window forward
    endIndex++;
  }
  // Return the maximum length of a valid substring found
  return maxLength;
}

let s = "AABABBA";
console.log(characterReplacement(s, 1));
