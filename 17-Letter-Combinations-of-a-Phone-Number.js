/*

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.

1 - ?
2 - a b c 
3  d e f 
4 ghi
5 j k l
6 m n o
7 p q s
8 t u v
9 w x y z

0  - ?
array of string  - KEYS

	  23       

       /      \      
      a        b
     /|  \     / \  \
   ad af  ae  bd be bf

	   /
	   c
	/  \  \
	cd ce cf 
	
'23'

function letterCombinations(nstr){
	result = []
	for i from 0 to nstr.length-1
		val =  nstr.charAt(i) from the array //  abc   --- 2 
				helper(val,pair,KEYS[val].length)				
		
}

helper(combostr, list<string> pair, length, res )
	if combostr.length is equal to length
		push onto the array  
	for i from 0 to pair length - 1
		combstr+= 
		
	

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
let KEYS = ['0','1','abc','def','ghi','jkl','mno','pqs','tuv','wxyz'];

var letterCombinations = function(digits) {

	let res = new Array();
	for(let i=0;i<digits.length;i++)
	{
		let val = digits.charAt(i)
		helper(val, pairs,KEYS[String(val)].length,res)	
	}
    	return res
};

function helper(combostr,pair,length,res)
{	if(combostr.length === length)
		{
			res.push(combostr)
			return
		}
	for (let i=0;i<pair.length;i++)
	{
		combostr+=pair[i].charAt(length)
	}
}

console.log(letterCombinations(553));