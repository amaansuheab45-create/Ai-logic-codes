function maximumSwap(num) {
    let digits = String(num).split("");
    let last = new Array(10).fill(-1);

    for (let i = 0; i < digits.length; i++) {
        last[Number(digits[i])] = i;
    }

    for (let i = 0; i < digits.length; i++) {
        let current = Number(digits[i]);

        for (let j = 9; j > current; j--) {
            if (last[j] > i) {
                [digits[i], digits[last[j]]] =
                [digits[last[j]], digits[i]];

                return Number(digits.join(""));
            }
        }
    }

    return num;
}
