import React, { useState, useMemo } from "react";

const multiplyBy2 = (num) => {
  console.log("In multiplyBy2 function =>", num);
  return num * 2;
};

function UseMemoExample() {
  const [num, setNum] = useState(1);

  // useMemo to memoize the result based on `num`
  const result = useMemo(() => multiplyBy2(num), [num]);

  const handleChange = (e) => {
    setNum(Number(e.target.value)); // Convert to number
  };

  return (
    <div>
      <div>
        <label>Multiplied number: {result}</label>
      </div>
      <div>
        <input type="number" onChange={handleChange} value={num} />
      </div>
    </div>
  );
}

export default UseMemoExample;
