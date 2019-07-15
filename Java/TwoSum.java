import java.util.Arrays;
import java.util.HashMap;

public class TwoSum {
	public static int[] twoSum(int[] nums, int target){
		HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();
		for (int i = 0; i< nums.length ; i++){
			if (hm.containsKey(target - nums[i])){
				return new int[] {i, hm.get(target - nums[i])};
			}
			hm.put(nums[i], i);
		}
		return new int[] {-1, -1};
	}
	
	public static void main(String[] args){
		int[] result = twoSum(new int[] {2,1,5,7,12}, 9);
		System.out.println(Arrays.toString(result));
	}
	
	
}