import React, { useState, useEffect } from "react";

const EffectHook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  useEffect(() => {
    return () => {
      console.log(firstName + " " + lastName);
    };
  });

  return (
    <>
      <h2>Podaci o osobi</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
    </>
  );
};

export default EffectHook;
