import React, { useState } from "react";

const Checkbox = () => {
  const [liked, setLiked] = useState(true);
  function handleChange(e) {
    setLiked(e.target.checked);
  }
  return (
    <div>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />i liked
        this
      </label>
      <p>You {liked ? "liked" : "did not like"} this</p>
    </div>
  );
};

export default Checkbox;
