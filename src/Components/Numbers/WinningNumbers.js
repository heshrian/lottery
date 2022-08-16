import React from "react";
import NumbersArray from "./NumbersArray";

const WinningNumbers = (props) => {
  let numbers = [];

  const generate = () => {
    for (let i = 0; i < 5; i++) {
      let num = Math.round(Math.random() * 90);
      if (numbers.includes(num)) {
        generate()
      } else {
        numbers.push(num);
      }
    }
  };

  generate()

  return (
    <div>
      <NumbersArray numbersArray={numbers} />
    </div>
  );
};

export default WinningNumbers;
