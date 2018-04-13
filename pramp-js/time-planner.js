/*
Examples:
                  s1[0],40  s1[1],60   s2[2],70     
input:  slotsA = [[10, 50], [60, 120], [140, 210]]

                  s2[15]    s2[1],10  
        slotsB = [[0, 15], [60, 70]]
        dur = 5    8
output:  [10,15]         [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: null # since there is no common slot whose duration is 12


also check that the two starting time meet the condition that one of them is eariler or both are at the same time


diff1  

fn meeting:
  for i to n in slota
      diff1 = slota[i][1] - slota[i][0]
      
      for j to n in slotb
      diff2 = slotb[i][1] - slotb[b][0]
      
      if(diff1 >=diff2)
        we know that we have 
*/

/*
function meetingPlanner(s1, s2, dur) {
  // your code goes here
  
  
  for(let i=0;i<s1.length;i++){
    diff1 = s1[i][1] - s1[i][0];
    for(let j=0;j<s2.length;j++){
      diff2 = s2[i][1] - s2[i][0];
      
      
      if( dur <= Math.abs(diff1-diff2)){
          let val = Math.max(s1[i][0],s2[i][0]);
            return [val,val+dur];
         }
    }
  }
  return [];
}
*/
function meetingPlanner(s1, s2, dur) {
    // your code goes here
    let i =0, j = 0;
    while(i<s1.length && j<s2.length){
      let start = Math.max(s1[i][0],s2[j][0]);
      let end = Math.min(s1[i][1],s2[j][1]);
     
      if(start + dur <= end){
        return [start,start + dur];
      }
      if(s1[i][1]<s2[j][1])
      i++;
      else
      j++;
      
      
    }
    return [];
  }
  
  
  
  