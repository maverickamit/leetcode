function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  for (
    let buyPriceIndex = 0, sellPriceIndex = 1;
    sellPriceIndex < prices.length;
    sellPriceIndex++
  ) {
    let buyPrice = prices[buyPriceIndex];
    let sellPrice = prices[sellPriceIndex];
    let profit = sellPrice - buyPrice;

    if (buyPrice > sellPrice) {
      buyPriceIndex = sellPriceIndex;
    } else if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}
