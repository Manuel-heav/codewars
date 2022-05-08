digital_root = (n) => {
    const arr = n.toString().split("");
    let sum = 0;
    let sum2 = 0;
    let sum3 = 0;
    for(let i = 0; i <  n.toString().split("").length; i++){
      sum += parseInt(arr[i]);
    }
    if(sum.toString().split("").length >= 2){
      sum.toString().split("").map(value => {
          sum2 += parseInt(value)
      })
          if(sum2.toString().split("").length <= 2){
            sum2.toString().split("").map(value => {
              sum3 += parseInt(value)
            })
            return sum3;
          }else{
            return sum2;
          }
    }else{
      return sum;
    }
  }
  