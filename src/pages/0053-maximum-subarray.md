---
layout: "../layouts/Post.astro"
title: "53. Maximum Subarray"
slug: "0053-maximum-subarray"
keywords:
- "maximum"
- "subarray"
- "kadane"
author: "ansidev"
pubDate: "2022-10-26T13:11:00+07:00"
difficulty: "Medium"
tags:
- "Array"
- "Divide and Conquer"
- "Dynamic Programming"
---
## Problem

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return `its sum`.

A `subarray` is a `contiguous` part of an array.

**Example 1:**

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

**Example 2:**

```
Input: nums = [1]
Output: 1
```

**Example 3:**

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

**Constraints:**

- <code>1 <= nums.length <= 10<sup>5</sup></code>
- <code>-104 <= nums[i] <= 10<sup>4</sup></code>

**Follow up:** If you have figured out the `O(n)` solution, try coding another solution using the **divide and conquer** approach, which is more subtle.

## Analysis

## Approaches

### Approach 1

#### Approach

Technique: Dynamic Programming

Original author: [Kadane](https://www.cmu.edu/dietrich/statistics-datascience/people/faculty/joseph-kadane.html).

Assume we have `dp[i]`: maximum sum of subarray that ends at index `i`.

`dp[i] = max(dp[i - 1] + nums[i], nums[i])`

Initial state `dp[0] = nums[0]`.

From the above formula, we just need to access its previous element at each step, so we can use 2 variables:

- `currentMaxSum`: maximum sum of subarray that ends at the current index `i`.
  - `currentMaxSum = max(currentMaxSum + nums[i], nums[i]`.
- `globalSum`: global maximum subarray sum
  - `globalSum = max(currentMaxSum, globalSum)`.

#### Solutions

```go
func maxSubArray(nums []int) int {
	currentMaxSum := nums[0]
	globalSum := nums[0]

	for _, x := range nums[1:] {
		if currentMaxSum+x > x {
			currentMaxSum += x
		} else {
			currentMaxSum = x
		}

		if globalSum < currentMaxSum {
			globalSum = currentMaxSum
		}
	}

	return globalSum
}
```

#### Complexity

- **Time Complexity**: `O(n)` because we just iterate over the array once.
- **Space Complexity**: `O(1)`. We just use 2 integer variables for extra spaces.

## References

- https://en.wikipedia.org/wiki/Maximum_subarray_problem
