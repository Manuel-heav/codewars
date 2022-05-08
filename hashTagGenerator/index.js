function generateHashtag (str) {
    const hash = '#';
    const fullString = str.replace(/\s/g, ''); 
      console.log(fullString.split(''),fullString.split("").length)
    if(fullString.split('').length == 0 || fullString.split("").length >= 140){
      return false;
    }else{
    const uppercaseWordsFunc = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
      const uppercaseWords = uppercaseWordsFunc(str);
      const sentence = uppercaseWords.split(" ").join('');
      return hash+sentence;
    }
  }