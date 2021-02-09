import { Myactions } from "./actions";
export const Change = (payload) => {
  return {
    type: Myactions.CHANGE,
    payload,
  };
};
