function friend(friends){
  
    var check = []
    friends.filter(friend => {
      if(friend.length === 4){
        check.push(friend)
      }
    });
    return check;
  }