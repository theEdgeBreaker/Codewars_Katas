// Question - Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// My Solution -

function solution(nums) {
  if (!nums || nums.length === 0) {
    return [];
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        // Swapping elements using a temporary variable
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

//   One More Solution -

function solution(nums) {
  if (!nums || nums.length === 0) {
    return [];
  }

  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        // swapping elements
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}
