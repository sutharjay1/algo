const arr = [2, 5, 1, 7, 10];
const k = 14;

const longestSubArray = (arr, k) => {
	let l = 0;
	let r = arr.length - 1;
	let result = [];

	for (let i = l; i < r; i++) {
		for (let j = i + 1; j < r; j++) {
			if (arr[i] + arr[j] <= k) {
				result.push(arr[j]);
			} else if (arr[i] + arr[j] > k) {
				break;
			}
		}
		return { result };
	}
};

console.dir(longestSubArray(arr, k));
