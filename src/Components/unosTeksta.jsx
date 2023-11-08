import React, { useState } from "react";

const UnosTeksta = () => {
  const [text, setText] = useState("Bok");
  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("Bok!")}>Reset</button>
    </div>
  );
};

export default UnosTeksta;
