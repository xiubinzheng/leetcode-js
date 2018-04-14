/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

38  - 3 8 - 11, 1 1  = 2

38 num, '38'

sum = num(3)+num(8)

fn sumitup(num)
  convert the num to string numstr
    sum = 0;// counter
    loop the numstr by character
      sum increment by numstr.charAt(i).toNumber

    if(String(sum).length > 1 )
        sumitUP(sum)

fn sumitUP(num)
  return the sum
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let numstr = String(num);
  let sum = 0;
  for(let i =0;i<numstr.length;i++){
  sum +=Number(numstr.charAt(i));

  }

  if(String(sum).length>1){
    return addDigits(sum);
  }

  return sum;
};






var addDigits2 = function(num) {
  if(num===0){
    return 0;
  }else{
    if(num%9===0){
      num=9;
    }else{
      return num=num%9;
    }

  }
  return num;
};
console.log(addDigits2(38));

console.log(addDigits2(22222));

console.log(addDigits2(44444));


for(let i=-1;i<0;i--){
  console.log(addDigits2(addDigits2(i)+addDigits2(i)));
}