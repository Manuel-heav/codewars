function lastSurvivor(letters, coords) {
    let arr = [];
    letters.split("").forEach((letter) => arr.push(letter));  
    coords.map(coord => {
      arr.splice(coord,1);
    })
    return arr.join("")
  }