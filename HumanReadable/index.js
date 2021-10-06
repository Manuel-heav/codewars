function formatDuration (seconds) {
  if(seconds < 60){
    console.log() `${seconds} second`;
  }else if(seconds >= 60 && seconds < 3600){
        if(seconds % 60 == 0){
            if(seconds/60 == 1){
                console.log(`${seconds/60} minute`)         
            }
          console.log( `${seconds/60} minutes`)
        }
    console.log() `${Math.floor(seconds/60)} minute and ${seconds%60} seconds`
  }else if(seconds >= 3600 && seconds < 86400){
        if(seconds % 3600 == 0){
          if(seconds/3600 == 1){
            console.log(`${seconds/3600} hour`) 
          }
          console.log( `${seconds/3600} hours`)
        }
    else console.log(`${Math.floor(seconds/3600)} hour, and `)
  }
}


function formatDuration1(seconds){
  function toMinute(seconds){
    if(seconds >= 60 && seconds < 3600){
      if(seconds % 60 == 0){
          if(seconds/60 == 1){
              console.log(`${seconds/60} minute`)         
          }else
        console.log( `${seconds/60} minutes`)
      }else
  console.log( `${Math.floor(seconds/60)} minutes and ${seconds%60} seconds`)
  }
}

  function toHour(seconds){
      if(seconds >= 3600 && seconds < 86400){
      if(seconds % 3600 == 0){
        if(seconds/3600 == 1){
          console.log(`${seconds/3600} hour`) 
        }
        console.log( `${seconds/3600} hours`)
      }
      else console.log(`${Math.floor(seconds/3600)} hour, and ${toMinute(seconds % 3600)} minutes and ${}`)
    }
  }

}

formatDuration1(3005)