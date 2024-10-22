const arr = [2, 5, 1, 7, 10];
const k = 14;

/*
    Sliding Window Technique

    1. Expanding   --> r
    2. Shrink           --> l

*/

const longestSubArray = (arr, k) => {
	let l = 0;
	let r = 0;
	let sum = 0;
	let maxLen = 0;
	let result = [];

	while (r < arr.length) {
		sum += arr[r];

		if (sum <= k) {
			maxLen = Math.max(maxLen, r - l + 1);
			result.push(arr[maxLen]);
		}

		while (sum > k) {
			sum -= arr[l];
			l++;
		}
		r++;
	}

	return {
		maxLen,
		result,
	};
};

console.dir(longestSubArray(arr, k));
