# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:

# Input: ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

def longestCommonPrefix(strs):
	if len(strs) == 0:
		return ""
	if len(strs) == 1:
		return strs[0]
	shortest = strs[0]
	for i in range(1,len(strs)):
		if len(strs[i]) < len(shortest):
			shortest = strs[i]
	word = ""
	for j in range(1,len(shortest)+1):
		for k in range(len(strs)):
			if shortest[:j] != strs[k][:j]:
				return word
		word = shortest[:j]
	return word

print(longestCommonPrefix(['hello', 'hell', 'hell', 'he']))

print(longestCommonPrefix(["flower","flow","flight"]))

# Time Complexity: O(K.N) with K is the length of the string and N is the length of the Array
# Space Complexity: O(1)