function bmi(weight, height) {
    const cal = weight/ height ** 2;
    if(cal <= 18.5){
      return "Underweight";
    }else if(cal <= 25){
      return "Normal";
    }else if(cal <= 30){
      return "Overweight";
  }else if(cal > 30){
    return "Obese";
  }
    
    }