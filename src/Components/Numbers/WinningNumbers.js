import React from "react";
import NumbersArray from "./NumbersArray";

const WinningNumbers = (props) => {
  let numbers = [];

  const generate = () => {
    for (let i = 0; i < 5; i++) {
      let num = Math.round(Math.random() * 90);
      if (duplicatorChecker(num) || num === 0) {
        generate();
      } else {
        numbers.push(num);
      }
      if (numbers.length === 5){
        return
      }
    }
  };

  const duplicatorChecker = (number) => {
    if (numbers.includes(number)) {
      return true;
    } else {
      return false;
    }
  };

  generate();

  return (
    <div>
      <NumbersArray numbersArray={numbers} />
    </div>
  );
};

export default WinningNumbers;
