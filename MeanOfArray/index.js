function getAverage(marks){
    const Average = marks.reduce((total, mark) => {return total + mark}, 0)
    return Math.floor(Average / marks.length);
   }