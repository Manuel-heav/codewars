function find_average(array) {
    let sum = 0;
    if(array.length == 0){
      return 0;
    }else{
      array.map(arr => sum+=arr)
      return sum/array.length
    }
  }