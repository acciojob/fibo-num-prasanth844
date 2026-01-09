function isFibonacci(num) {
    // Helper function to check if a value is a perfect square
    const isPerfectSquare = (x) => {
        if (x < 0) return false;
        let s = Math.sqrt(x);
        return (s % 1 === 0); // Checks if the square root is an integer
    };

    // Fibonacci criteria: 5n^2 + 4 or 5n^2 - 4 is a perfect square
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

const input = parseInt(prompt("Enter a number"));

// Check if input is a valid number before alerting
if (isNaN(input)) {
    alert("Please enter a valid non-negative integer");
} else {
    alert(isFibonacci(input));
}