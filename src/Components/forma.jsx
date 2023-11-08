import { useState } from "react";

const Forma = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(28);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <button onClick={() => setAge(age - 1)}>Decrement age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </div>
  );
};

export default Forma;
