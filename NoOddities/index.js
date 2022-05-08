function noOdds( values ){
    let x = [];
    values.map(value => {
      if(value % 2 == 0){
        x.push(value)
      }
    })
    return x;
  }