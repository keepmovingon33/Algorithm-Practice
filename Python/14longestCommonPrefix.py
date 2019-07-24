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