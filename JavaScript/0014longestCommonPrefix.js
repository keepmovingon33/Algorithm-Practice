// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = strs => {
	if (strs.length === 0){
		return ""
	}
	if (strs.length === 1){
		return strs[0]
	}
	var shortest = strs[0]
	for (let i = 1; i< strs.length; i++){
		if (strs[i].length < shortest.length){
			shortest = strs[i]
		}
	}
	var word = ""
	for (let i = 1; i<= shortest.length; i++){
		for (let j = 0; j < strs.length; j++){
			if (shortest.substring(0,i) != strs[j].substring(0,i)){
				return word
			}
		}
		word = shortest.substring(0, i)
	}
	return word
}

console.log(longestCommonPrefix(["hello", "hell", "hel", "helloe"]))
// Time Complexity: O(K.N) with K is the length of the string and N is the length of the Array
// Space Complexity: O(1)