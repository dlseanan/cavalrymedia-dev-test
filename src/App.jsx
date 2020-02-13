import React, { useEffect, useState } from "react";
import "./App.css";
import { Dropdown, DropdownButton, Form, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Metrics from "./Metrics";
import CandleGraph from "./CandleGraph";
import { graphShape } from "./functions";
import { counts, granularities, instruments, prices } from "./constants";
import { headers } from "./connections";

const App = () => {
  const [data, setData] = useState(null);
  const [instrument, setInstrument] = useState("EUR_USD");
  const [price, setPrice] = useState("B");
  const [granularity, setGranularity] = useState("M5");
  const [count, setCount] = useState("100");

  useEffect(() => {
    setData(null);
    const fetchData = async () => {
      const endpoint = `https://api-fxpractice.oanda.com/v3/instruments/${instrument}/${"candles"}?price=${price}&granularity=${granularity}&count=${count}`;
      const response = await fetch(endpoint, {
        method: "GET",
        headers
      });
      const data = await response.json();
      await fetch("http://localhost:4000/", {
        method: "POST",
        body: data
      });
      setData(data);
    };
    fetchData();
  }, [count, granularity, instrument, price]);

  const [onlyCompleted, setOnlyCompleted] = useState(true);

  const filterCandles = ({ instrument, granularity, candles }) => ({
    instrument,
    granularity,
    candles: data.candles.filter(candle => candle.complete || !onlyCompleted)
  });

  return (
    <div className="App">
      <div className="toolbar">
        <DropdownButton title="Select Instrument">
          {instruments.map(item => (
            <Dropdown.Item key={item} onClick={() => setInstrument(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton title="Select Price">
          {prices.map(item => (
            <Dropdown.Item key={item} onClick={() => setPrice(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton title="Select Granularity">
          {granularities.map(item => (
            <Dropdown.Item key={item} onClick={() => setGranularity(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton title="Select Count">
          {counts.map(item => (
            <Dropdown.Item key={item} onClick={() => setCount(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Form.Check
          label="Only completed candles"
          checked={onlyCompleted}
          onChange={() => setOnlyCompleted(!onlyCompleted)}
        />
      </div>
      {data ? (
        <>
          <div className="metrics">
            <h2>Metrics</h2>
            <Metrics data={filterCandles(data)} />
          </div>
          <div className="graph">
            <CandleGraph data={graphShape(data)} />
          </div>
        </>
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
};

export default App;
