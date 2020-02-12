import { max, isEqual } from "date-fns";

export default candles =>
  candles.find(candle =>
    isEqual(
      new Date(candle.time),
      max(candles.map(candle => new Date(candle.time)))
    )
  );
