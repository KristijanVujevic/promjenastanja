import React from "react";

const Eventi = () => {
  const handleButtonClick = (event) => {
    console.log("Button click!");
  };
  const changeText = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Klikni me!</button>
      <input type="text" className="inputbox" onChange={changeText}></input>
    </div>
  );
};

export default Eventi;
