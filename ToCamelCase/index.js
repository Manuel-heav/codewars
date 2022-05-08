function toCamelCase(str){
    let arr = []
    let arr2 = []
    let arr3 = []
    
    
    if(str ===''){
      return ''
    }else{
      if(str.charAt(0) === str.charAt(0).toUpperCase()){
            str.split(/[_-]/g).map((s, index) => {
        arr.push(s.charAt(0).toUpperCase()+s.slice(1))
      })
    return arr.join("")
      }else{
            str.split(/[_-]/g).filter((s, index) => {
                arr2.push(s)
            })
          arr3.push(arr2[0])
        for(let i = 0; i < (arr2.length - 1); i++){
            arr3.push(arr2[i + 1].charAt(0).toUpperCase() + arr2[i + 1].slice(1))
        }
        return arr3.join('')
            }
    }
    
      }