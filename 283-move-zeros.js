/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

nums = [0, 1, 0, 3, 12]
	0  1  2  3  4

	[0, 1, 0, 3, 12]
	 i, j
	i 0 - 0
	j 1 - 1
	sawp(i,j)

	[1,0,0,3,12]
	   i,j        
           i 1 - 0
	   j 2 - 0
	   i++
           i 3 - 3
           j 2 - 0 

	[1,0,3,0,12] 
	   1	

	[0, 1, 0, 3, 12]
	 i  zero pointer, only moves when 
	two pointers, one for zero, one for none zero

	keep scanning for a none zero, move it to the front (swap)
	

	[0, 1, 0, 3, 12]
	 
	if a[i] not  == 0 i moves 
	if a[j] not  == none zero j moves
	
	swap(i,j)



[1,3,12,0,0]

nums = [0, 1, 0, 3, 12]

[1,0,0,3,12]
[1]
*/

var moveZeroes = function (nums) {
	let j = 0
	for (let i = 0; i < nums.length; i++) {
		console.log(nums)
		if (nums[i] !== 0) {
			let temp = nums[i]
			nums[i] = nums[j]
			nums[j] = temp
			j++
		}
	}


};