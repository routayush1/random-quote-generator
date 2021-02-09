import { Myactions } from "../actions/actions";

const change = (length) => {
  var random = Math.floor(Math.random() * length);
  var r = Math.floor(256 * Math.random());
  var g = Math.floor(256 * Math.random());
  var b = Math.floor(256 * Math.random());
  var o = Math.random() * 1;
  return [random, `rgba(${r},${g},${b},${o})`];
};

export const changeReducer = (state = [0, "#1a1c20"], action) => {
  switch (action.type) {
    case Myactions.CHANGE: {
      return change(action.payload);
    }
    default:
      return state;
  }
};
