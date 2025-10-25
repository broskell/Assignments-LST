function divisible_num(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            count++;
        }
    }
    return count;
}

console.log(`No. of divisible numbers are: ${divisible_num(15)}`);