function maxScore(cardPoints, k) {
	let l = 0;
	let r = cardPoints.length - 1;
	let lsum = 0;
	let rsum = 0;
	let maxSum = 0;

 
	for (let i = 0; i <= k - 1; i++) {
		lsum += cardPoints[i];
		maxSum = lsum;
	}

	for (let j = k - 1; j >= 0; j--) {
		lsum -= cardPoints[j];
		rsum += cardPoints[r];
		r--;
		console.log({
			lsum,
			rsum,
		});

		maxSum = Math.max(maxSum, lsum + rsum);
	}
 

	return maxSum;
}

const arr = [1, 2, 3, 4, 5, 6, 1];
const k = 3;

console.dir(maxScore(arr, k));
