const arr = [5, 3, 8, 7, 10, 6, 4, 2, 9, 1];
const k = 4;

const constantWindow = (arr, k) => {
	let l = 0;
	let r = k - 1;

	let sum = 0;
	let result = [];

	for (let i = 0; i <= r; i++) {
		sum += arr[i];
	}

	for (let j = 0; j < k + 2; j++) {
		sum -= arr[l];
		l++;
		r++;
		sum += arr[r];

		result.push(sum);
	}

	return { arr, sum, result };
};

console.log(constantWindow(arr, k));

/*
{
  arr: [
    5, 3, 8, 7, 10,
    6, 4, 2, 9,  1
  ],
  sum: 16,
  result: [ 28, 31, 27, 22, 21, 16 ]
}
*/
