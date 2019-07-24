
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


import java.util.Arrays;
import java.util.Stack;

public class validParenthesis {
	public static boolean isValid(String s){
		Stack<Character> stack = new Stack<Character>();
		for(char c: s.toCharArray()){
			if (c == '(' || c == '[' || c == '{'){
				stack.push(c);
			}
			else if (c == ')' && !stack.isEmpty() && stack.peek() == '('){
				stack.pop();
			}else if (c == ']' && !stack.isEmpty() && stack.peek() == '['){
				stack.pop();
			}else if (c == '}' && !stack.isEmpty() && stack.peek() == '{'){
				stack.pop();
			}else {
				return false;
			}
		}
		return stack.isEmpty();
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "({]{}}[])";
		System.out.println(isValid(s));

	}

}

// Time complexity: O(N) -> we traverse the whole string
// Space complexity: O(N) -> in the worst case, we store the whole stack with all character like '((((('