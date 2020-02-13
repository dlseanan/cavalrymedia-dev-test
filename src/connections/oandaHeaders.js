console.log(process.env);
const APIKey = process.env.REACT_APP_OANDA_API_KEY.replace(/'/g, "");

export default {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${APIKey}`
};
