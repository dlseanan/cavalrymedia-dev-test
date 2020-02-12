export default (candles, key) =>
  candles
    .map(candle => candle.bid)
    .map(bid => bid[key])
    .reduce((a, b) => Number(a) + Number(b), 0) / candles.length;
