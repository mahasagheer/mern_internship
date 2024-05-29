import { useEffect, useState } from "react";

function App() {
  let [change, setChange] = useState(1);

  const changeIn = () => {
    if (change <= 0) {
      setChange(change);
    } else {
      setChange(--change);
    }
  };
  const changeOut = () => {
    if (change >= 10) {
      setChange(change);
    } else {
      setChange(++change);
      alert("Do you want to add a new product?");
    }
  };
  useEffect(() => {}, [changeOut]);
  return (
    <>
      <h1>Count </h1>
      <button onClick={changeIn}>-</button>
      <p>{change}</p>
      <button onClick={changeOut}>+</button>
    </>
  );
}

export default App;
