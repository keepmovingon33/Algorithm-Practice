
# // Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# // An input string is valid if:

# // Open brackets must be closed by the same type of brackets.
# // Open brackets must be closed in the correct order.
# // Note that an empty string is also considered valid.

# // Example 1:

# // Input: "()"
# // Output: true
# // Example 2:

# // Input: "()[]{}"
# // Output: true
# // Example 3:

# // Input: "(]"
# // Output: false
# // Example 4:

# // Input: "([)]"
# // Output: false
def isValid( s):
	stack = []
	arr = list(s)
	for i in arr:
		if i == '(' or i == '[' or i == '{':
			stack.append(i)
		elif i == ')' and len(stack) != 0 and stack[-1] == '(':
			stack.pop()
		elif i == '}' and len(stack) != 0 and stack[-1] == '{':
			stack.pop()
		elif i == ']' and len(stack) != 0 and stack[-1] == '[':
			stack.pop()
		else:
			return False
	return len(stack) == 0

print(isValid("(}([}{(()"))

# // Time complexity: O(N) -> we traverse the whole string
# // Space complexity: O(N) -> in the worst case, we store the whole stack with all character like '((((('
