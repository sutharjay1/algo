const arr = [1, 1, 0, 1, 1, 1];

function findMaxConsecutiveOnes(nums) {
	let l = 0;
	let r = 0;
	let len = 0;
	let maxLen = 0;

	while (r < nums.length) {
		if (nums[r] === 0) {
			l = r + 1;
		}

		len = r - l + 1;
		maxLen = Math.max(len, maxLen);

		r++;
	}

	return maxLen;
}

console.log(findMaxConsecutiveOnes(arr));

/*
	Time: 40 min

	TC -> O(N)
	SC -> O(1)

*/
