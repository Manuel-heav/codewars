function task(w, n, c) {
    let obj = [{name: 'James', day: 'Monday'},
               {name : 'John', day: 'Tuesday'}, 
               {name : 'Robert', day: 'Wednesday'},
               {name : 'Michael', day: 'Thursday'},
               {name : 'William', day: 'Friday'}
              ];
    let x = '';
    obj.map(ob => {
      if(w === ob.day){
         x += `It is ${w} today, ${ob.name}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`;
       }
    })
    return x;
  }