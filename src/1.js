var multiple = function (val, A, b) {
	if (val % A === 0 && val % B ===0) {
		return true;
	} else {
		return false
	}
};
var run = function (A, B){
	let AB = 1 * A * B;
	let max = "";
	if (A === B) {
		return A;
	} else {
		max = A >= B ? A : B;
		let limit = AB -max;
		for (let i = 0; i <= limit; i++) {
			if (multiple(max + i, A, B) === true) {
				return i;
			}
		}
	}
};
run(A, B);
