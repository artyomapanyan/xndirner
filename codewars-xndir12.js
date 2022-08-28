

function sumPairs(ints, s) {
    // let a = [];
    // for (let i = 0; i < ints.length; i ++) {
    //   for (let j = i+1; j < ints.length; j ++) {
    //     if (ints[i] + ints[j] === s) {
    //       a.push(ints[i], ints[j]) 
    //     }
    //   }
    // }
  
    // let b = [];
    // for (let f = 1; f < a.length; f += 2) {
    //   b.push(ints.lastIndexOf(a[f]))
    // }
    // let c = Math.min(...b);
    // let g = [];
    // g.push(s - ints[c], ints[c])
    
    // if(a.length === 0) {
    //   return undefined;
    // }
    // return g
  
    
    var ans=[];
    for (var i=ints.length-1; i>0; --i)
      for (var j=i-1;j>=0; --j)
        if (ints[i]+ints[j]==s)
          ans.push([ints[j],ints[i]]);
    return ans.length==0?undefined:ans[ans.length-1];
  }