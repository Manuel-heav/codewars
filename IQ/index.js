function iqTest(numbers){
    const arr = [];
    const evenArr = [];
    const oddArr = [];
    numbers.split(" ").map((number, index) =>{
          const obj = {number: number, index: index + 1};
          arr.push(obj)
      })
      
    arr.filter(a => {
      if(!(parseInt(a.number) % 2)){
        evenArr.push(a)  
      }else{
        oddArr.push(a)
      }
    })
   if(evenArr.length > oddArr.length){
    const oddNumber = oddArr.map(odd => odd.index)
    return oddNumber[0];
   }else{
     const evenNumber = evenArr.map(even => even.index);
     return evenNumber[0]
   }
}