import React from "react";
import { Badge } from "react-bootstrap";
import { aveHighLowDiff, averagePrice, latestPrice } from "./functions";

const Metrics = ({ data }) => {
  return (
    <div>
      <h4>
        Instrument: <Badge variant="secondary">{data.instrument}</Badge>
      </h4>
      <h4>
        Granularity: <Badge variant="secondary">{data.granularity}</Badge>
      </h4>
      <h4>
        Count: <Badge variant="secondary">{data.candles.length}</Badge>
      </h4>
      <h4>
        Latest High Price:{" "}
        <Badge variant="secondary">{latestPrice(data.candles, "h")}</Badge>
      </h4>
      <h4>
        Latest Low Price:{" "}
        <Badge variant="secondary">{latestPrice(data.candles, "l")}</Badge>
      </h4>
      <h4>
        Average Opening Price:{" "}
        <Badge variant="secondary">
          {averagePrice(data.candles, "o").toFixed(5)}
        </Badge>
      </h4>
      <h4>
        Average Closing Price:{" "}
        <Badge variant="secondary">
          {averagePrice(data.candles, "c").toFixed(5)}
        </Badge>
      </h4>
      <h4>
        Average High/Low Difference:{" "}
        <Badge variant="secondary">
          {aveHighLowDiff(data.candles).toFixed(5)}
        </Badge>
      </h4>
    </div>
  );
};

export default Metrics;
