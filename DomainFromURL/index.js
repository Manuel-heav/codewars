function domainName(url){
    if(url.indexOf('https://www.') == 0){
      var rpl1 = url.replace('https://www.', '');
      var rpl12 = rpl1.substring(0, rpl1.indexOf('.'));
      return rpl12;
    }
    else if(url.indexOf('www.') == 0){
      var rpl2 = url.replace('www.', '');
      var rpl22 = rpl2.substring(0, rpl2.indexOf('.'));
      return rpl22;
    }
    else if(url.indexOf('http://www.') == 0){
      var rpl3 = url.replace('http://www.', '');
      var rpl32 = rpl3.substring(0, rpl3.indexOf('.'));
      return rpl32;
    }
    else if(url.indexOf('https://') == 0){
      var rpl4 = url.replace('https://', '');
      var rpl42 = rpl4.substring(0, rpl4.indexOf('.'));
      return rpl42;
    }
    else if(url.indexOf('http://') == 0){
      var rpl5 = url.replace('http://', '');
      var rpl52 = rpl5.substring(0, rpl5.indexOf('.'));
      return rpl52;
    }
    else{
      var rpl62 = url.substring(0, url.indexOf('.'));
      return rpl62; 
    }
    }