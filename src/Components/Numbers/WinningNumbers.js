const WinningNumbers = (props) => {
  let numbers = [];

  for (let i = 0; i < 5; i++) {
    let num = Math.round(Math.random() * 90);
    if (numbers.includes(num)) {
      num = Math.random() * 90;
    } else {
      numbers.push(num);
    }
  }

  return props.getNumbers(numbers.sort((a, b) => a - b));
//   return props.getNumbers([1,2,5,7]);
};

export default WinningNumbers;
