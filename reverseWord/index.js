let str = "Learning is the base of life, said John."
let s = str.split(" ")
let ans =""; 

    for (var i = s.length-1; i >= 0; i--) { 
        ans += s[i] + " ";
    } 
console.log(ans.slice(0,ans.length-1)+".");