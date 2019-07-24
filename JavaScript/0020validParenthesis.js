
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false

var isValid = s => {
	var stack = []
	arr = s.split('')
	for (let i in arr){
		let c = arr[i]
		if (c == '(' || c == '[' || c == '{'){
			stack.push(c)
		} else if (c == ')' && stack.length != 0 && stack.slice(-1) == ')'){
			stack.pop(c)
		} else if (c == ']' && stack.length != 0 && stack.slice(-1) == '['){
			stack.pop(c)
		} else if (c == '}' && stack.length != 0 && stack.slice(-1) == '{'){
			stack.pop(c)
		} else {
			return false
		}
	}
	return stack.length === 0
}


// Time complexity: O(N) -> we traverse the whole string
// Space complexity: O(N) -> in the worst case, we store the whole stack with all character like '((((('