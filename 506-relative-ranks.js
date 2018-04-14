 
/*
Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:

Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.


[5 4 3 2 1 ]

[g s b 4 5 ]

is it sorted if not, sort the array [1 2 3 4 5]

map <int,string> 0,g,1,s,2,b

1 2 3 
arr.length -i
5  -        0 5
5  -        1 4
	      3
      5 - i = 2 
      5 - i = 1
      5 - i = 0

fn ranking(arr):
	
	sort the arr.reverse()
	res ultarr of string
	for i from n to n-3:
		put the value in the map 0,g
		put the value in the result but with
		if n-1 g
		if n-2 s
		       b

	for i from n-3 to 0
		put the value in the result	
		i + n

*/

var findRelativeRanks = function(nums) {
    let temp = Array.from(nums)
        temp.sort(function(a,b){return a-b})
        let rankMap = new Map()
        let len = nums.length
        for(let i = len-1;i>=0;i--){
            if(i== len-1){ 
            rankMap.set(temp[i],"Gold Medal")
            }
            else if(i== len-2){ 
            rankMap.set(temp[i],"Silver Medal")
            }
            else if(i== len-3){ 
            rankMap.set(temp[i],"Bronze Medal")
            }
            else{
                rankMap.set(temp[i],String(len-i))
            }
        }
        let result = new Array(len)
        for(let i=0;i<len;i++){
            result[i] = rankMap.get(nums[i])
        }
        return result
}

console.log(findRelativeRanks([5,4, 3, 2, 1 ]));


for(let i=0;i>=-1;i++){
	console.log(findRelativeRanks([i,4, 3, 2, i ]));
}