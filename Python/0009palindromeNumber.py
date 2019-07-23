# Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

# Example 1:

# Input: 121
# Output: true
# Example 2:

# Input: -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

def isPalindrome(x):
	if x < 0:
		return False
	if x > 0 and x%10 == 0:
		return False
	x2 = 0
	while x > x2:
		x2 = x2*10 + x%10
		x = x%10
	return (x2 == x or x == x2%10)

print(isPalindrome(-23))
print(isPalindrome())
print(isPalindrome())
print(isPalindrome())
print(isPalindrome())

# time complexity = O(log N)
# space complexity = O(1)
