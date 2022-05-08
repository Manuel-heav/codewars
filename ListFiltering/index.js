function filter_list(l) {
    // Return a new array with the strings filtered out
    console.log(l)
    let returned = [];
    l.map((arr) => {
      if(typeof arr == 'number'){
        returned.push(arr);
      }
    })
    console.log(returned);
    return returned;
  }