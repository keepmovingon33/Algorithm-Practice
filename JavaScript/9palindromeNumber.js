// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var palindromeNumber = num => {
	if (num < 0){
		return false
	}
	if (num > 0 && num%10 === 0){
		return false
	}
	var num2 = 0
	while (num > num2){
		num2 = num2*10 + num%10
		num = Math.floor(num/10)
	}

	if (num === num2 || num === Math.floor(num2/10)){
		return true
	}
	return false
}

console.log(palindromeNumber(12320))
console.log(palindromeNumber(-324))
console.log(palindromeNumber(23432))
console.log(palindromeNumber(2442))

// time complexity = O(log N)
// space complexity = O(1)