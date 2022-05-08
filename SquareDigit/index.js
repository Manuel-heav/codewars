squareDigits = (num) => {
    let numbers = [];
    num.toString().split("").map(n => {
      const number = parseInt(n)**2;
      numbers.push(number)
    })
    return parseInt(numbers.join(""));
  }