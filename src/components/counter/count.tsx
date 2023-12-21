import React, { useState } from "react";

const Count: React.FC = () => {
  const [currentCount, setCurrentCount] = useState(0);

  return (
    <div>
      <p>count: {currentCount}</p>
      <button
        onClick={() => {
          setCurrentCount((pre) => pre + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default Count;
