import React from "react";
import Card from "../UI/Card";

const NumberCard = (props) => {
  return (
    // <div>
    //   <h2>{props.individualNumber}</h2>
    // </div>
    <Card>
      <h2>{props.num}</h2>
    </Card>
  );
};

export default NumberCard;
