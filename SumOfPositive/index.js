function positiveSum(arr) {
  
    const val = arr.reduce((total, ar) =>{
       if(Math.sign(ar) == 1){
        return total + ar;
         }else{
           ar = 0;
           return total + ar;
         }
      }, 0)
      return val;
    }