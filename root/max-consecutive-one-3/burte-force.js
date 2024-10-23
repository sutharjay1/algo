const arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

const maxConsecutiveOnes = (arr, k) => {
	let len = 0;
	let maxLen = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		let zeroes = 0;

		for (let j = i; j < arr.length - 1; j++) {
			if (arr[j] === 0) {
				zeroes += 1;
			}

			if (zeroes <= k) {
				len = j - i + 1;
				maxLen = Math.max(maxLen, len);
			} else {
				break;
			}
		}
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
