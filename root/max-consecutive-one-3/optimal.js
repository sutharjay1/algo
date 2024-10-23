const arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

const maxConsecutiveOnes = (arr, k) => {
	let l = 0;
	let r = 0;
	let zeroes = 0;
	let maxLen = 0;
	let len = 0;

	while (r < arr.length) {
		if (arr[r] === 0) {
			zeroes += 1;
		}

		while (zeroes > k) {
			if (arr[l] === 0) zeroes -= 1;
			l++;
		}

		if (zeroes <= k) {
			len = r - l + 1;
			maxLen = Math.max(len, maxLen);
		}
		r++;
	}

	return {
		maxLen,
	};
};

console.log(maxConsecutiveOnes(arr, k));

/*
{ maxLen: 6 }
*/

/**

    TC -> O(n^2)
    SC -> O(1)

**/
