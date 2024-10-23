const arr = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
// const arr = [1, 2, 3, 2, 2];

const fruitsIntoBaskets = (arr) => {
	let l = 0;
	let r = 0;

	let maxLen = 0;
	let basket = {};

	while (r < arr.length) {
		basket[arr[r]] = (basket[arr[r]] || 0) + 1;

		while (Object.keys(basket).length > 2) {
			basket[arr[l]] -= 1;

			if (basket[arr[l]] === 0) {
				delete basket[arr[l]];
			}

			l++;
		}

		len = r - l + 1;
		maxLen = Math.max(maxLen, len);

		r++;
	}

	return { maxLen, basket };
};

console.log(fruitsIntoBaskets(arr));
