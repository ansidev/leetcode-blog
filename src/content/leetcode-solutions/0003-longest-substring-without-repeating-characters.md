---
layout: "../layouts/Post.astro"
title: "3. Longest Substring Without Repeating Characters"
slug: "0003-longest-substring-without-repeating-characters"
keywords:
- "longest"
- "substring"
- "without"
- "repeating"
- "characters"
author: "ansidev"
pubDate: "2022-10-31T19:46:49+07:00"
difficulty: "Medium"
tags:
- "Hash Table"
- "String"
- "Sliding Window"
---
## Problem

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

- `0 <= s.length <= 5 * 104`
- `s` consists of English letters, digits, symbols, and spaces.

## Analysis

| Abbreviation | Stands for                                       |
| ------------ | ------------------------------------------------ |
| `CSWRC`      | `current substring without repeating characters` |
| `LSWRC`      | `longest substring without repeating characters` |

- If `s` is an empty string, the LSWRC is `0`.
- If the length of string `s` is 1, the LSWRC is `1`.

## Approaches

### Approach 1

#### Approach

- If the length of string `s` is greater than 1, because we need to determine the LSWRC, while iterating over the string, we have to check whether the character at a specific index is repeating or not. We can consider using a hashmap.

  - Assume the `LSWRC` is `s[0]`.

    | Initial value         | Note                                                                   |
    | --------------------- | ---------------------------------------------------------------------- |
    | `left = 0`            | Left index of the LSWRC                                                |
    | `result = 1`          | Length of the LSWRC                                                    |
    | `lastIndex = { a=0 }` | This hashmap saves the last index of a specific character of the array |

  - Start traversing the array from index `1`. For each step:
    - Check whether the current character is repeating: `lastIndex` has the key `s[right]`.
      - If yes, update `left = lastIndex[s[right]] + 1` if `left < lastIndex[s[right]] + 1`.
    - Update the last index of `s[right]` to the current index.
    - Calculate the new length of the `CSWRC`. (`right - left + 1`).
    - Update `result` if it is less than the new length of the `CSWRC`.
  - Finally, return `result`. It is the `LSWRC`.

#### Solutions

```go
func lengthOfLongestSubstring(s string) int {
	l := len(s)
	if l == 0 || l == 1 {
		return l
	}

	result, left := 1, 0
	lastIndex := map[byte]int{}
	lastIndex[s[0]] = 0
	for right := 1; right < l; right++ {
		if v, ok := lastIndex[s[right]]; ok {
			if left < v+1 {
				left = v + 1
			}
		}
		lastIndex[s[right]] = right
		if result < right-left+1 {
			result = right - left + 1
		}
	}

	return result
}
```

#### Complexity

- Time complexity: `O(n)` because we just traverse the string once.
- Space complexity:
  - We use four extra variables `l`, `result`, `left`, `right`, no matter what value will, they will take fixed bytes. So the space complexity is `O(1)`.
  - The space complexity of the map `lastIndex` is `O(n)`.
  - So the final space complexity is `O(n)`.
