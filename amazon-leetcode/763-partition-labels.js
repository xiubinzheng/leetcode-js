/*
A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it split
*/

function partitionLabels(s) {
    let last = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        last[s.charAt(i) - 'a'] = i;
    }

    console.log(last);
    return [];
}

let test = 'ababcbacadefegdehijhklij';

console.log(partitionLabels(test));