// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

public class longestCommonPrefix {
	
	public static String longestCommonPrefix(String[] strs){
		if (strs.length == 0){
			return "";
		}
		if (strs.length == 1){
			return strs[0];
		}
		String shortest = strs[0];
		for (int i = 1; i< strs.length; i++){
			if (strs[i].length() < shortest.length()){
				shortest = strs[i];
			}
		}
		String word = "";
		
		for (int k = 1; k<= shortest.length(); k++ ){
			for (int j = 0; j < strs.length; j++){
				if (!strs[j].substring(0, k).equals(shortest.substring(0,k))){
					return word;
				}
			}
			word = shortest.substring(0,k);
		}
		return word;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] a = {"hello", "hel"};
		System.out.println(longestCommonPrefix(a));

	}

}

// Time Complexity: O(K.N) with K is the length of the string and N is the length of the Array
// Space Complexity: O(1)
