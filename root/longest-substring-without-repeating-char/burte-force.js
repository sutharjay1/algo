const string = 'cadbzabcd';

const longestSubStringNoRepeat = (arr) => {
	let r = arr.length - 1;
	let hash = {};
	let maxLen = 0;
	let subString = '';

	for (let i = 0; i < r; i++) {
		for (let j = i; j < r; j++) {
			if (hash[string[j]] === 1) {
				break;
			}

			maxLen = Math.max(j - i + 1, maxLen);
			hash[string[j]] = 1;

			subString += string[maxLen - 1];
			console.log(hash);
		}
	}

	return { maxLen, subString };
};

console.dir(longestSubStringNoRepeat(string));

/*
{ c: 1 }
{ c: 1, a: 1 }
{ c: 1, a: 1, d: 1 }
{ c: 1, a: 1, d: 1, b: 1 }
{ c: 1, a: 1, d: 1, b: 1, z: 1 }
{ maxLen: 5, subString: 'cadbz' }
*/
