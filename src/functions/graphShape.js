export default ({ candles }) => ({
  key: "",
  values: candles.map(candle => ({
    date: candle.time,
    open: Number(candle.bid.o),
    high: Number(candle.bid.h),
    low: Number(candle.bid.l),
    close: Number(candle.bid.c)
  }))
});
