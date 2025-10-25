//Divisible numbers by 3 & 5 //
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

// Sum of odd numbers using "n" //
function sum_of_odd_nums(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        const odd_num = 2 * n + 1;
        count += odd_num;
    }
    return count;
}