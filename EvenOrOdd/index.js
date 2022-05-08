function evenOrOdd(str) {
    let odd = 0;
    let even = 0;
    str.split("").map(s => {
      parseInt(s) % 2 == 0 ? even += parseInt(s) : odd += parseInt(s);
    })
    if(odd === even){
      return "Even and Odd are the same"
    }else if(odd > even){
      return "Odd is greater than Even"
    }else{
      return "Even is greater than Odd"
    }
  }