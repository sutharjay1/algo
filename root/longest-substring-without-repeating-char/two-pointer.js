const string = 'pwwkew';

const longestSubStringNoRepeat = (s) => {
	let l = 0;
	let r = 0;
	let maxLen = 0;

	let hash = {};

	while (r < s.length) {
		if (hash[s[r]] !== -1 && hash[s[r]] >= l) {
			l = hash[s[r]] + 1;
		}

		hash[s[r]] = r;
		maxLen = Math.max(maxLen, r - l + 1);
		r++;
	}

	return maxLen;
};

console.dir(longestSubStringNoRepeat(string));
