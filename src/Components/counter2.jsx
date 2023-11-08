import { useState } from "react";

export default function Counterr() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge((prevState) => prevState + 1);
  }
  function decrement() {
    setAge((prevState) => prevState - 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          decrement();
          decrement();
          decrement();
        }}
      >
        -3
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -1
      </button>
    </>
  );
}
