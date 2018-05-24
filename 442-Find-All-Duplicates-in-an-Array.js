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


var findDuplicates = function (nums) {
    let temp = nums.pop();
    let res = new Array();
    while (nums.length > 0) {
        if (nums.includes(temp))
            res.push(temp);
        temp = nums.pop();
    }
    return res;
};


console.time('findup 1');
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.timeEnd('findup 1');


var findDuplicates2 = function (nums) {
    let set = new Set();
    let res = new Array();
    for (let i = 0; i < nums.length; i++) {

        if (set.has(nums[i])) {
            res.push(nums[i]);
        } else
            set.add(nums[i]);
    }
    return res;
};

console.time('findup 2');
console.log(findDuplicates2([4, 3, 2, 7, 8, 2, 3, 1]));
console.timeEnd('findup 2');

var findDuplicates3 = function (nums) {
    let res = new Array();
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0)
            res.push(Math.abs(index + 1));
        nums[index] = -nums[index];
    }
    return res;
};

console.time('findup 3');
console.log(findDuplicates3([4, 3, 2, 7, 8, 2, 3, 1]));
console.timeEnd('findup 3');