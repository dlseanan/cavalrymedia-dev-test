import React, { useEffect } from "react";
import * as d3 from "d3";
import ez from "d3-ez";

const CandleGraph = ({ data }) => {
  useEffect(() => {
    const chart = ez
      .base()
      .width(750)
      .height(400)
      .chart(ez.chart.candlestickChart());
    d3.select("#chartholder")
      .datum(data)
      .call(chart);
  }, [data]);

  return <div id="chartholder" />;
};

export default CandleGraph;
