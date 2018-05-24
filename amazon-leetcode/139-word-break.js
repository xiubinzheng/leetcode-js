function wordbreak(s, words) {
  function helper(s, words, start) {
    if (start === s.length) {
      console.log("line 4 true");
      return true;
    }
    for (let end = start + 1; end <= s.length; end++) {
      if (words.has(s.substring(start, end)) && helper(s, words, end)) {
        console.log("line 9 true");
        return true;
      }
    }
    console.log("line 13 false");
    return false;
  }
  return helper(s, words, 0);
}

function wordBreak2(s, words) {
  function helper2(s, words, start, memo) {
    if (start === s.length) {
      return true;
    }
    if (memo[start] !== null) {
      return memo[start];
    }
    for (let end = start + 1; end <= s.length; end++) {
      if (words.has(s.substring(start, end)) && helper2(s, words, end, memo)) {
        return (memo[start] = true);
      }
    }
    return (memo[start] = false);
  }

  return helper2(s, words, 0, new Array(s.length).fill(null));
}

let s1 = "leetcode";
let words1 = new Set(["leet", "code"]);

console.log(wordbreak(s1, words1));

let test = "leetcode";

console.log(test.substring(0, 1));

console.log("------------------------");

console.log(wordBreak2(s1, words1));
