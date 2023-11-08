import React, { useState } from "react";
import Stateless from "./stateless";

const Statefull = () => {
  const state = { color: "red", count: 0 };
  const [counter, setCounter] = useState(state.count);
  return (
    <div>
      <Stateless
        count={counter}
        color={state.color}
        onButtonClick={() => setCounter(counter + 1)}
      />
    </div>
  );
};

export default Statefull;
