var singleNumber = function (nums) {
  var lib = {};

  for (var i = 0; i < nums.length; i++) {
    if (lib[nums[i]] === undefined) {
      lib[nums[i]] = 1;
    } else {
      lib[nums[i]]++;
      if (lib[nums[i]] === 3) {
        delete lib[nums[i]];
      }
    }
  }

  return Number(Object.keys(lib)[0]);
};
console.log(singleNumber(
  [17, 12, 5, -6, 12, 4, 17, -5, 2, -3, 2, 4, 5, 16, -3, -4, 15, 15, -4, -5, -6]
));