function getRealFloor(n) {
    if(n === 0){
      return 0;
    }else if(n >= 13){
      return n - 2;
    }else if(n < 13 && n > 0){
      return n - 1;
    }else{
      return n;
    }
  }