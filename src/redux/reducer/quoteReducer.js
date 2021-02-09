import { Myactions } from "../actions/actions";

export const quoteReducer = (state = { q: [], length: 0 }, action) => {
  switch (action.type) {
    case Myactions.FETCH: {
      return state;
    }
    case Myactions.RECIEVE: {
      return { q: action.payload, length: action.payload.length };
    }
    default:
      return state;
  }
};
