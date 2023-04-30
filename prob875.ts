function minEatingSpeed(piles: number[], h: number): number {
  let maxValuePile = 0;
  for (let i = 0; i < piles.length; i++) {
    const element = piles[i];
    if (element > maxValuePile) maxValuePile = element;
  }
  const findHoursNeeded = (k: number) => {
    let h = 0;
    piles.forEach((num) => (h += Math.ceil(num / k)));
    return h;
  };
  let startValue = 1;
  let endValue = maxValuePile;
  let ans = endValue;
  let middleValue: number, hoursNeeded: number;

  while (startValue <= endValue) {
    middleValue = Math.floor((startValue + endValue) / 2);
    hoursNeeded = findHoursNeeded(middleValue);
    if (hoursNeeded <= h) {
      ans = middleValue;
      endValue = middleValue - 1;
    } else {
      startValue = middleValue + 1;
    }
  }
  return ans;
}
