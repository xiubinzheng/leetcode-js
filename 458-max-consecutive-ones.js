/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

[1,1,0,1,1,1]
 1,2,2,
	1 2 3

temp = 0
1 
temp = 1
1
temp = 2
0

temp = 2
ogcounter = 0

counter = 1,2,   (3)

fn maxones(arr)
	max = counter = 0
	linearly scan the array
		when we see a 1:
		 	increase counter
		when we see a 0:
			if(max<counter):
		   	set max to counter

			reset the counter to zero
			
*/
var findMaxConsecutiveOnes = function(nums) {
	let max= 0,counter = 0
	for(let i=0;i<nums.length;i++){
		if(nums[i]===1){
			counter++
		if(max<counter){
			max = counter
			}
		}else{
			counter = 0
		}	

	}
    	return max
};


let test = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(test));