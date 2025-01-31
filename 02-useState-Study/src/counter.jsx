import { useState } from "React";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>Counter component is created and completed</h2>
      <div>
        <div>Count: {count}</div>
        <div>
          <button onClick={handleIncrement}>Increment count</button>
          <button onClick={handleDecrement}>Decrement count</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
