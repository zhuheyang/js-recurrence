function getMin(arr, L, R) {
	if(L == R) {
		return arr[L]
	}
	// or you can change Math.floor((R - L) / 2) to
	// (((R - L) / 2) >> 0)
	const mid = L + ((R - L) >> 1)
	const leftMin = getMin(arr, L, mid)
	const rightMin = getMin(arr, mid + 1, R)
	return Math.min(leftMin, rightMin)
}

function test() {
	const arr = [112, 442, 53, 2, 6, 2, 12, 45, 32]
	console.log(getMin(arr, 0, arr.length - 1));
}
test()