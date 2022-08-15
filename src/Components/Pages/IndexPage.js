import "./IndexPage.css";
import React, { useState } from "react";
import WinningNumbers from "../Numbers/WinningNumbers";

const IndexPage = (props) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const getNumbers = (array) => {
    // console.log(array.map(e => e))
  }

  const initialPage = (
    <div className="starting_">
      <button className="button_" type="submit" onClick={handleClick}>
        <WinningNumbers getNumbers={getNumbers} />
        Click for the winning Lottery Numbers!
      </button>
    </div>
  );

  const winningPage = (
    <div className="starting_">
      <h2>The winning numbers are</h2>
      <button onClick={handleClick} className="button_"> Thank you!</button>
    </div>
  );
  return (
    <div>
      {isShown && initialPage}
      {!isShown && winningPage}
    </div>
  );
};

export default IndexPage;
