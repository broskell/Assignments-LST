//Divisible numbers by 3 & 5 //
const n = 15
let answer = 0
for(let i = 1; i <= n; i += 1){
    const isDivisibleBy3 = i % 3
    const isDivisibleBy5 = i % 5
    if(isDivisibleBy3 === 0 || isDivisibleBy5 === 0){
        answer += 1
    }
}
console.log("answer", answer);

// Sum of digits of a number //
const n = 1234
const n_string = n.toString()
let q = n
let answer = 0
for(let i = 0; i < n_string.length; i += 1){
    answer += q % 10;
    q = Math.floor(q/10)
}
console.log("answer", answer);

// Reversing a number //
let n = 1234
const n_string = n.toString()
let answer = 0
let reversed_string = ""
for(let i = 0; i < n_string.length; i += 1){
    answer = n % 10;
    reversed_string += answer.toString();
    n = Math.floor(n / 10);
}
console.log("reversed_string", Number(reversed_string));

// Sum of odd numbers using "n" //
const n = 5
let answer = 0
for(let i = 0; i < n; i += 1){
    answer += 2*i +1
}
console.log("answer", answer);

let n = 5;

function isPrime(n) {
    if(n < 2){
        return false;
    }
    if(n === 2){
        return true; 
    }
    if(n % 2 === 0){ 
        return false;
    }
    for(let i = 3; i <= Math.sqrt(n); i += 2){
        if(n % i === 0){ 
            return false;
        }
    }
    return true; 
}

console.log(isPrime(n));

// GCD //
const a = 6
const b = 12
let smallest_num = 0
let gcd = 0

if(a > b){
    smallest_num = b;
}
else{
    smallest_num = a;
}

for(i=0; i < smallest_num; i += 1){
    if(a % i === 0 && b % i === 0){
        gcd = i;
    }
}
console.log(gcd)

// Fibonacci Series //
const n = 7;
let first_num = 0;
let second_num = 1;
let fibonacci_series = first_num.toString() + second_num.toString();

for(i = 2; i < n; i +=1){
    let next_num = first_num + second_num;
    fibonacci_series += next_num
    first_num = second_num;
    second_num = next_num;
}
console.log(fibonacci_series)