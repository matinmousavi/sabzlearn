import { useState, useEffect } from "react";

const LandingCounter = ({ count }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 5);

    if (counter === count) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [counter, count]);

  return <span className="landing-status__count">{counter}</span>;
};

export default LandingCounter;
