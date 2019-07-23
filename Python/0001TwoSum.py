# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:

# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].


def twoSum(a, target):
	b = {}
	for i in range(len(a)):
		c = target - a[i]
		print(c)
		if c in b:
			return [i, b[c]]
		else:
			b[a[i]] = i
			print(b[a[i]])

a = [2,11,15,22,7,24]
d = twoSum(a, 9)
print(d)

# Time Complexity: O(N). We only do the loop through the whole array only 1 time.
# Space Complexity: O(N). We use extra space to store the element in the array
# with at most n element, which n is the number of the array
