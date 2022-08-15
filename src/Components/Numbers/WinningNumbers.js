const WinningNumbers = (props) => {
  let numbers = [];

  for (let i = 0; i < 6; i++) {
    let num = Math.round(Math.random() * 90);
    if (numbers.includes(num)) {
      num = Math.random() * 90;
    } else {
      numbers.push(num);
    }
  }

  return numbers.sort((a, b) => a - b);
};

export default WinningNumbers;
