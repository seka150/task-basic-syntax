export function romanToInteger(str) {
    let result = 0;

    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = str.length - 1; i >= 0; i--) {
        const currentVal = romanMap[str[i]];

        if (i < str.length - 1 && currentVal < romanMap[str[i + 1]]) {
            result -= currentVal;
        } else {
            result += currentVal;
        }
    }

    return result;
}
