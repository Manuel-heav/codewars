function countSheeps(arrayOfSheep) {
    const a = [];
    arrayOfSheep.filter(sheep => {
      if(sheep == true){
        a.push(sheep)
      }
    })
    return a.length;
  }