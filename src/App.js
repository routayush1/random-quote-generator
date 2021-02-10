import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { FETCHING } from "./redux/actions/FetchAction";
import { Change } from "./redux/actions/changeActions";

const App = () => {
  const { quotes, myObject } = useSelector((state) => state);
  const [unique, color] = myObject;
  const Allquotes = quotes.q;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FETCHING());
  }, []);
  const handleClick = () => {
    dispatch(Change(Allquotes.length));
  };
  return (
    <div
      style={{ background: color }}
      className="flex flex-col  w-screen h-screen justify-center items-center"
    >
      <div className="w-2/4 h-2/4 bg-gray-50 p-4 rounded-md shadow-md flex flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-row">
            <span className="text-3xl m-2 font-semibold">
              {Allquotes[unique]?.quote}
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center w-full p-8">
          <span className="text-xl">-{Allquotes[unique]?.author}</span>
        </div>

        <button
          className="m-4 p-4 rounded-sm outline-none"
          onClick={handleClick}
          style={{ background: `${color}` }}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default App;
