narcissistic = (value) => {
    const arr = value.toString().split("");
    const num = arr.length;
    let sum = 0;
    arr.map((value) => {
      sum+= (parseInt(value) ** num)
    })
    return sum == value ? true : false;
  }