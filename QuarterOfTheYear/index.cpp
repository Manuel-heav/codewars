int quarter_of(int month){
 return month <= 3 ? 1 : 
  month >= 3 && month <= 6 ? 2 :
  month >= 6 && month <= 9 ? 3 :
  month >= 9 && month <= 12 ? 4: false;
    return 0;
}