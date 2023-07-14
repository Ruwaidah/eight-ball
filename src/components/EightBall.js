import "./EightBall.css";
import data, { startPoint } from "../data";
import { useState } from "react";
console.log(data);

const EightBall = () => {
  const [ball, setBall] = useState(startPoint);
  const changeBall = () => {
    const index = Math.floor(Math.random() * data.length);
    setBall(data[index]);
  };
  return (
    <div className="EightBall">
      <div
        className="EightBall-ball"
        style={{ backgroundColor: ball.color }}
        onClick={changeBall}
      >
        <p>{ball.msg}</p>
      </div>
      <button onClick={() => setBall(startPoint)} className="EightBall-restart">
        Restart
      </button>
    </div>
  );
};

export default EightBall;
