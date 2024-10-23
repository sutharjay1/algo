// const arr = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
const arr = [1, 2, 3, 2, 2];

const fruitsIntoBaskets = (arr) => {
	let maxLen = 0;
	let basket;
	for (let i = 0; i < arr.length; i++) {
		basket = new Set();
		for (let j = i; j < arr.length; j++) {
			basket.add(arr[j]);

			if (basket.size <= 2) {
				maxLen = Math.max(maxLen, j - i + 1);
			} else break;
		}
	}

	return { maxLen, basket };
};

console.log(fruitsIntoBaskets(arr));
