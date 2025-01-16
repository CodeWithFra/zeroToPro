import React, { useState } from "react";

export const UseStateAdvancedExample = () => {
  const [count, setCount] = useState(() => {
    return 2;
  });

  // useEffect(() => {
  //   console.log("useEffect called", count);
  // }, [count]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p>useState example initialization with a callback</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((c) => ++c)}>Click me</button>

      <p>Bach state update</p>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount((c) => c * 2);
          setCount((c) => c * 2);
          setCount((c) => c * 2);
          setCount((c) => c * 2);
        }}
      >
        Click me batch
      </button>
    </div>
  );
};
