import { useDispatch, useSelector } from "react-redux";
import { increment, decrement/*, reset */ } from "./redux/counterSlice";
import "./App.css";


function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter)

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  // const handleReset = () => {
  //   dispatch(reset());
  // };

  return (
    <div>
      <h1>Counter value: {counter.value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      {/* <button onClick={handleReset}>Reset</button> */}
    </div>
  );
}

export default App;
