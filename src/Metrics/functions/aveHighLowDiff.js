export default candles => {
  const bids = candles.map(candle => candle.bid);
  const highs = bids.map(bid => bid.h);
  const lows = bids.map(bid => bid.l);
  return (
    highs
      .map((high, i) => Math.abs(Number(high) - Number(lows[i])))
      .reduce((a, b) => Number(a) + Number(b), 0) / candles.length
  );
};
