import { useState } from "react";

interface props {
  initialCount: number;
}
const useCounter = ({ initialCount }: props = { initialCount: 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = (incrementBy?: number) => {
    setCount((pre) => pre + (incrementBy ?? 1));
  };
  const decrement = (decrementBy?: number) => {
    setCount((pre) => pre - (decrementBy ?? 1));
  };

  return { count, increment, decrement };
};

export default useCounter;
