---
layout: "../layouts/Post.astro"
title: "628. Maximum Product of Three Numbers"
slug: "0628-maximum-product-of-three-numbers"
keywords:
- "maximum"
- "product"
- "of"
- "three"
- "numbers"
author: "ansidev"
pubDate: "2022-11-18T08:58:46+07:00"
difficulty: "Easy"
tags:
- "Array"
- "Math"
- "Sorting"
---
## Problem

Given an integer array `nums`, *find three numbers whose product is maximum and return the maximum product*.

**Example 1:**

```
Input: nums = [1,2,3]
Output: 6
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: 24
```

**Example 3:**

```
Input: nums = [-1,-2,-3]
Output: -6
 ```

**Constraints:**

- `3 <= nums.length <= 104`.
- `-1000 <= nums[i] <= 1000`.

## Analysis

If length of `nums` is 3, maximum product is `nums[0] x nums[1] x nums[2]`.

## Approaches

### Approach 1

```
Notes:
- l: length of nums.
- nums[i:j]: sub array of nums from index i to j (includes nums[i], nums[j]).
```
#### Approach

- If length of `nums` is 3, maximum product is `nums[0] x nums[1] x nums[2]`.
- If length of `nums` is greater than 3:
  - Step 1: Sort the input array (ascending).
  - For the sorted array, there are following possible cases:
    - Case 1: All element are positive numbers.
      - `maxProduct = nums[l-3] x nums[l-2] x nums[l-1]`.
    - Case 2: All element are negative numbers.
      - Product of two random elements will be a positive number.
      - Product of three random elements will be a negative number.
      - If `n1 > 0`, `n2 < n3 < 0`: `n1 x n2 < n1 x n3 < 0`.
      - If `m1 < 0`, `0 < m2 < n3`: `m1 x m3 < m1 x m2 < 0`.
      - So to find the maximum product of three numbers in this case, we need to find two negative numbers `a`, `b` that `a x b` has max value (note that `a x b > 0`), then find the third number which is the maximum value of remaining ones.
      - `nums[0]` & `nums[1]` are two smallest negative numbers. So their product will be the maximum product of two numbers. `nums[l-1]` is the maximum one of [`nums[2]`, `nums[3]`,..., `nums[l-1]`].
      - Finally, the maximum product of three numbers in this case is 👉 `nums[0] x nums[1] x nums[l-1]`.
    - Other cases.
      - `nums` has at least 4 elements.
      - If `nums` contains zero:
        - If `nums[0] = 0`, all remaining elements are positive numbers (similar to case 1)
          - 👉 `maxProduct = nums[l-3] x nums[l-2] x nums[l-1]`.
        - If `nums[l-1] = 0`, all remaining elements are negative numbers (similar to case 2)
          - `maxProduct` of three numbers of sub array `nums[0:l-2]` is a negative number, it less than product of `nums[l-1]` (`= 0`) and two random numbers of sub array `nums[0:l-2]`. So in this case, we can pick three numbers `nums[l-3]`, `nums[l-2]`, `nums[l-1]`.
          - 👉 `maxProduct = nums[l-3] x nums[l-2] x nums[l-1] = 0`.
        - If `nums[i] = 0` (`0 < i < l-1`), because `nums` has at least 4 elements, so there are possible cases:
          - `nums` has at least there positive numbers, similar to case 1.
          - `nums` has two positive numbers:
            - If `l = 4`:
              - `nums` = [`nums[0]`, `0`, `num[2]`, `nums[3]`].
              - `nums[0] x nums[2] x nums[3] < 0 x num[2] x nums[3] = 0`.
              - 👉 `maxProduct` must contains zero so `maxProduct = 0 = nums[l-3] x nums[l-2] x nums[l-1]`
            - If `l > 4`:
              - `nums` = [`nums[0]`, `nums[1]`, ..., `nums[l-4]` ,`0`, `num[l-2]`, `nums[l-1]`].
              - If one of three numbers of `maxProduct` is zero, `maxProduct = 0`.
              - Otherwise, if two of three numbers of `maxProduct` is `num[l-2]`, `nums[l-1]`, `maxProduct < 0`.
              - Otherwise, two of three numbers of `maxProduct` is negative numbers, max product of two negative numbers of sub array `nums[0:l-4]` is `nums[0] x nums[1] > 0`.
                - `maxProduct = nums[0] x nums[1] x nums[l-1] > 0`
              - 👉 `maxProduct = nums[0] x nums[1] x nums[l-1] > 0`
            - 👉 `maxProduct = nums[0] x nums[1] x nums[l-1]`
          - `nums` has one positive numbers:
            - `nums` = [`nums[0]`, `nums[1]`, ..., `nums[l-3]` ,`0`, `nums[l-1]`].
            - We have cases:
              - `maxProduct` contains zero: `0 x nums[i] x nums[j] = 0`
              - `maxProduct` does not contain zero:
                - `nums[i] x nums[j] x nums[k] < 0` (`i < j < k < 0`)
                - `nums[i] x nums[j] x nums[l-1] > 0` (`i < j < 0`)
            - So `maxProduct` is product of two negative numbers and one positive number (`nums[l-1]`)
            - 👉 `maxProduct = max(nums[j] x num[j]) x nums[l-1] = nums[0] x nums[1] x nums[l-1]`.
  - The maximum product of three numbers in every cases (`l > 3`) is one of two:
    - `nums[0] x nums[1] x nums[l-1]`
    - `nums[l-3] x nums[l-2] x nums[l-1]`
  - Conclusion, 👉 `maxProduct = max(nums[0] x nums[1] x nums[l-1], nums[l-3] x nums[l-2] x nums[l-1])`.

#### Solutions

```go
import "sort"

func maximumProduct(nums []int) int {
	l := len(nums)

	if l == 3 {
		return nums[0] * nums[1] * nums[2]
	}

	sort.Ints(nums)

	return max(nums[0]*nums[1]*nums[l-1], nums[l-3]*nums[l-2]*nums[l-1])
}

func max(x int, y int) int {
	if x > y {
		return x
	}

	return y
}
```

#### Complexity

- **Time Complexity**: Time complexity of the sort algorithm.
