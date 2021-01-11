var result;

for (number = 1; number < 101; number++){
    if (number % 15 === 0) {
        result = "FizzBuzz";
    }
    else if (number % 3 === 0) {
        result = "Fizz";
    }
    else if (number % 5 === 0) {
        result = "Buzz";
    }
    else {
        result = number;
    }
    console.log(result)
}