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
  let ans = 0;
  let startValue = 1;
  let endValue = maxValuePile;
  let middleValue: number, hoursNeeded: number;

  while (endValue - startValue > 1) {
    middleValue = Math.floor((startValue + endValue) / 2);
    hoursNeeded = findHoursNeeded(middleValue);
    ans = middleValue;
    if (hoursNeeded > h) {
      startValue = middleValue;
    } else if (hoursNeeded < h) {
      endValue = middleValue;
    } else {
      break;
    }
  }
  while (findHoursNeeded(ans) <= h) {
    ans--;
  }
  while (findHoursNeeded(ans) > h) {
    ans++;
  }
  return ans;
}
