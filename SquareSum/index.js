function squareSum(numbers){
    const totalP = numbers.reduce((total, number) => {
      return total + number**2;
    }, 0)
    return totalP;
  }