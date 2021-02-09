import { Myactions } from "./actions";
import axios from "axios";
export const Fetching = () => {
  return {
    type: Myactions.FETCH,
  };
};
export const Recieving = (payload) => {
  return {
    type: Myactions.RECIEVE,
    payload,
  };
};

const URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
export const FETCHING = () => {
  return async function (dispatch) {
    dispatch(Fetching());
    const result = await axios.get(URL);
    const quote = await result.data.quotes;
    dispatch(Recieving(quote));
  };
};
