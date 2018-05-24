/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"

Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the empty string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/*
ADOBECODEBANC
ABC

[ADOBEC]ODEBANC

MIN: [ADOBEC]


ADOBE[CODEBA]NC

MIN: [ADOBEC]


ADOBECODE[BANC]

MIN: [BANC]


    A 1
    D
    O
    B 1
    E
    C 1
    O
    D
    E
    B
    A
    N
    C
   
*/

var minWindow = function(s, t) {
    let map = new Map();
    for(let i=0;i<s.length;i++){
        map.set(s.charAt(i),0);
    }
    
    for(let i=0;i<t.length;i++){
        if(map.has(t.charAt(i)))
            map.set(t.charAt(i),map.get(t.charAt(i))+1);
        else return "";
    }
    
    
    
    let start = 0, end = 0, minlen = Number.MAX_VALUE, minstart = 0,
    numberoftargets  =t.length;
    
    while(end<s.length)
    {
        let current = s.charAt(end);
        if(map.get(current)>0)
            numberoftargets--;
        map.set(current,map.get(current)-1);
        while(numberoftargets == 0)
        {
            if(minlen > end -start +1)
            {
                minlen = end -start +1;
                minstart = start;
            }
            let head = s.charAt(start);
            if(map.get(head)>=0)
                numberoftargets++;
            map.set(head,map.get(head)+1);
            start++;
        }
        end++;
    }
    return minlen == Number.MAX_VALUE? "":s.substring(minstart,minstart+minlen)
};