import React from "react";
import NumberCard from "./NumberCard";

const NumbersArray = (props) => {
  const randomNumbersArray = props.numbersArray.sort((a, b) => a - b);
  //   console.log(randomNumbersArray);
  console.log(props);
  return (
    <div>
      {randomNumbersArray.map((number, index) => (
        <NumberCard 
        key={index}
        num = {number}
        />
      ))}
      {/* <NumberCard individualNumber={randomNumbersArray[0]} /> */}
    </div>
  );
};

export default NumbersArray;
