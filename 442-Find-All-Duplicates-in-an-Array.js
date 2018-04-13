/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]


Input:
[4,3,2,7,8,2,3,1]
                 

temp - top element 
1, check if nums has 1, no
3,  check if nums has 3, yes
2, yes
8, no
7, no
2
3
4

for i from 0 to n-1
    pop the element as we go	


fn dup(num)
	temp  = nums.pop
	while nums not null
		check if temp is in nums
		if so push to res
		
	temp = nums.pop

	return res 


Output:
[2,3]

*/


var findDuplicates = function(nums) {
	let temp = nums.pop();  
	let res = new Array(); 
	while(nums.length>0)
	{
	if(nums.includes(temp))
		res.push(temp);
		temp = nums.pop();	
	}	
	return res;
};