function digitize(n) {
    let f = n.toString().split('').reverse();
    const reversed = f.map(Number);
    return reversed;
  }