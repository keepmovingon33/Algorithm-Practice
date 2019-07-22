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

public class isPalindromeNumber {

	public static boolean isPalindrome(int x){
		if (x < 0){
			return false;
		}
		if (x > 0 && x%10 == 0){
			return false;
		}
		int x2 = 0;
		while (x > x2){
			x2 = x2*10 + x%10;
			x = (int) Math.floor(x/10);
		}
		if (x == x2 || x == Math.floor(x2/10)){
			return true;
		}
		return false;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		boolean a = isPalindrome(-3);
		boolean b = isPalindrome(120);
		boolean c = isPalindrome(12321);
		System.out.println(a);
		System.out.println(b);
		System.out.println();
	}

}

// time complexity = O(log N)
// space complexity = O(1)
