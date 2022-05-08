function pigIt(str){
    var sliced  = str.split(' ');
    let c = [];
    sliced.map(slice => {
      if(slice === '!' || slice === '.' || slice === '?'){
        c.push(slice)
      }else{
      const firstLet = slice[0];
      const len = slice.length;
      const  a = slice.substring(0, len) + firstLet + slice.substring(len).replace(firstLet, '');
      const b =  a.replace(firstLet, '') + 'ay';
      c.push(b);
        }
    });
    
      const joined = c.join(' ');
      return joined;
  }