import latestCandle from "./latestCandle";

export default (candles, key) => latestCandle(candles).bid[key];
