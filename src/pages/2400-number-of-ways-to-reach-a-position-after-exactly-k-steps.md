---
layout: "../layouts/Post.astro"
title: "2400. Number of Ways to Reach a Position After Exactly k Steps"
slug: "2400-number-of-ways-to-reach-a-position-after-exactly-k-steps"
keywords:
- "number"
- "of"
- "ways"
- "to"
- "reach"
- "a"
- "position"
- "after"
- "exactly"
- "k"
- "steps"
author: "ansidev"
pubDate: "2022-10-24T23:49:00+07:00"
difficulty: "Medium"
tags:
- "Math"
- "Dynamic Programming"
- "Combinatorics"
---
## Problem

You are given two **positive** integers `startPos` and `endPos`. Initially, you are standing at position startPos on an **infinite** number line. With one step, you can move either one position to the left, or one position to the right.

Given a positive integer `k`, return the number of **different** ways to reach the position `endPos` starting from `startPos`, such that you perform **exactly** `k` steps. Since the answer may be very large, return it **modulo** <code>10<sup>9</sup> + 7</code>.

Two ways are considered different if the order of the steps made is not exactly the same.

**Note** that the number line includes negative integers.

**Example 1:**

```
Input: startPos = 1, endPos = 2, k = 3
Output: 3
Explanation: We can reach position 2 from 1 in exactly 3 steps in three ways:
- 1 -> 2 -> 3 -> 2.
- 1 -> 2 -> 1 -> 2.
- 1 -> 0 -> 1 -> 2.
It can be proven that no other way is possible, so we return 3.
```
**Example 2:**

```
Input: startPos = 2, endPos = 5, k = 10
Output: 0
Explanation: It is impossible to reach position 5 from position 2 in exactly 10 steps.
```

**Constraints:**

- `1 <= startPos, endPos, k <= 1000`

## Analysis

Assuming `d` is the **distance** between `startPos` and `endPos` => `d = abs(startPos - endPos)`.

- `1 <= startPos <= 1000`
- `-1000 <= -endPos  <= -1`

=> `-999 <= startPos - endPos <= 999`

=> `0 <= d = abs(startPos - endPos) <= 999`

For `k` is the **numbers of steps** and `d` is the **distance** between `startPos` and `endPos`, the number of ways is:
- `dfs(k, d) = dfs(k-1, abs(d-1)) + dfs(k-1, d+1)`.

For k steps, the maximum distance is k.
- **d > k**: `dfs(k, d) = 0`.
- **d = k**: `dfs(k, d) = dfs(k, k) = 1`.
- **d = 0**: `dfs(k, 0) = dfs(k-1, 1) + dfs(k-1, 1) = 2 x dfs(k-1, 1)`.


Example values:
- `dfs(0,0) = 1`.
- `dfs(1, 0) = 2 x dfs(0, 1) = 0`.
- `dfs(1, 1) = 1`.
- `dfs(2, 0) = 2 x dfs(1, 1) = 2 x 1 = 2`.
- `dfs(2, 1) = dfs(1, 0) + dfs(1, 2) = 0 + 0 = 0`.
- `dfs(2, 2) = 1`.

## Approaches

### Approach 1

#### Approach

- From the above analysis, we can use the bottom-up approach to calculate the next values of the `dfs` function from each prior values. Then, we can get the number of ways.

#### Solutions

```go
func numberOfWays(startPos int, endPos int, k int) int {
	const mod = 1e9 + 7
	dp := [1001][1001]int{}
	for i := 1; i <= 1000; i++ {
		dp[i][i] = 1
		for j := 0; j < i; j++ {
			dp[i][j] = (dp[i-1][abs(j-1)] + dp[i-1][j+1]) % mod
		}
	}

	return dp[k][abs(startPos-endPos)]
}

func abs(x int) int {
	if x >= 0 {
		return x
	}

	return -x
}
```

## References
- dfs: [[deep-first-search|Deep First Search]]
