function lengthOfLongestSubstring(s: string): number {
  // Initialize a map to keep track of characters and their latest index.
  let charMap = new Map<string, number>();

  // Variable to store the maximum length of substring without repeating characters.
  let maxLength = 0;

  let startIndex = 0,
    endIndex = 0;

  // Use two pointers technique with a while loop, iterating until endIndex reaches the end of the string.
  while (endIndex < s.length) {
    const element = s[endIndex]; // Current character being considered.

    // If the current character is already in the map and its index is within the current window...
    if (
      charMap.has(element) &&
      (charMap.get(element) as number) >= startIndex
    ) {
      // Calculate the current window's length and update maxLength if it's larger.
      //1 is not added because current element s[endIndex] is not part of the substring to be considered
      const length = endIndex - startIndex;
      if (length > maxLength) maxLength = length;
      // Move the start index to the position right after the last occurrence of the current character.
      startIndex = (charMap.get(element) as number) + 1;
    }
    // Update the current character's latest index in the map.
    charMap.set(element, endIndex);

    // Increment endIndex for the next iteration of the loop.
    endIndex++;
  }
  // Calculate the current window's length and update maxLength if it's larger.
  // Here endIndex is actually one larger than the last index of the string because
  //at the end of the while loop endIndex is equal to s.length. That's why the loop terminates.

  const length = endIndex - startIndex;
  if (length > maxLength) maxLength = length;

  // Return the maximum length found.
  return maxLength;
}
let s = `abbad`;
console.log(lengthOfLongestSubstring(s));
