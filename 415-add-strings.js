/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:
The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

 '12' 
'137'

  12
[1,0]

convert a1 to a string arr
convert a2 to a string arr

map the values from 0 to 9 

'0', 0
'1', 1
.....

going from n to 0
*/



function countNode(node,low,high){
  let count = 0;
  
  function countNodeHelper(node,low,high)
  {
    if(node===null)
      return 
    if(node.val >=low || node.val <=high)
        count++
    
     countNodeHelper(node.left,low,high,count)
     countNodeHelper(node.right,low,high,count)
  }
  
  countNodeHelper(node,low,high)
  
  return count
}




let test = {
  left: {left:null,right:null,val:1},
  right:{left:null,right:null,val:2},val:3
  
}

console.log(test);

console.log(test.left);

console.log(test.right);



console.log(countNode(test,1,3))

/*
LRU cache

picture your amazon past





*/




