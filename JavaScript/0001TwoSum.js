// # Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// # You may assume that each input would have exactly one solution, and you may not use the same element twice.

// # Example:

// # Given nums = [2, 7, 11, 15], target = 9,

// # Because nums[0] + nums[1] = 2 + 7 = 9,
// # return [0, 1].

const TwoSum = (a, target) => {
	b = {}
	for (let i = 0; i < a.length; i++){
		if (target - a[i] in b){
			c = target - a[i]
			return [i, b[c]]
		}else{
			b[a[i]] = i
		}
	}
}


a = [2,11,15,22,7,24]
d = TwoSum(a, 9)
console.log(d)