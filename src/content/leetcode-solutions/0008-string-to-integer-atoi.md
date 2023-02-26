---
title: "8. String to Integer (atoi)"
slug: "0008-string-to-integer-atoi"
keywords:
- "string"
- "to"
- "integer"
- "atoi"
author: "ansidev"
pubDate: "2022-10-26T13:11:00+07:00"
difficulty: "Medium"
tags:
- "String"
---
## Problem

Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++'s `atoi` function).

The algorithm for `myAtoi(string s)` is as follows:

1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is `'-'` or `'+'`. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
4. Convert these digits into an integer (i.e. `"123" -> 123`, `"0032" -> 32`). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
5. If the integer is out of the 32-bit signed integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then clamp the integer so that it remains in the range. Specifically, integers less than <code>-2<sup>31</sup></code> should be clamped to <code>-2<sup>31</sup></code>, and integers greater than <code>2<sup>31</sup>-1</code> should be clamped to <code>2<sup>31</sup>-1</code>.
Return the integer as the final result.

**Note:**

- Only the space character `' '` is considered a whitespace character.
- **Do not ignore** any characters other than the leading whitespace or the rest of the string after the digits.

**Example 1:**

```
Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a `'-'` nor `'+'`)
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42.
```

**Example 2:**

```
Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" (`'-'` is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-2^31, 2^31 - 1], the final result is -42.
```

**Example 3:**

```
Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a `'-'` nor `'+'`)
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193.
```

**Constraints:**

- `0 <= s.length <= 200`.
- `s` consists of English letters (lower-case and upper-case), digits (`0-9`), `' '`, `'+'`, `'-'`, and `'.'`.

## Analysis

I don't have any special analysis since the problem is so clearly.

## Approaches

### Approach 1

#### Approach

1. Check whether the input is null (depends on programming language) or empty. If it is, return `0`.
2. Use a pointer `i` to traverse the input string, always remember checking whether i less than length of `s`.
   - While `s[i]` is a whitespace, keep increasing i by 1.
   - Check whether the next character (`s[i]`) is one of `-`, `+`, or digit (`0-9`):
     - If not, return `0`.
     - Otherwise, check whether `s[i]` is one of `-` or `+`, save the result to a boolean variable and increase i by 1.
     - Note that if `s[i]` is not one of `-` or `+`, this means that it is a digit, and `i` will not be increased.
   - Check whether the current character is a sign, if it is, return `0` because it is an invalid input.
   - Create new 64 bit float number `n` to save the result.
   - While `s[i]` is a digit, `n = n x 10 + integer value of s[i]`, then increasing `i` by `1`.
   - If the sign is `-`, `n = -n`.
   - Check the range of `n`:
     - If <code>n < -2<sup>31</sup></code>, return <code>-2<sup>31</sup></code>.
     - If <code>n > 2<sup>31</sup>-1</code>, return <code>2<sup>31</sup>-1</code>.
     - Otherwise, convert n to integer and return.

- Notes: `MinInt32 = -1 << 31` (<code>-2<sup>31</sup></code>) and `MaxInt32 = 1<<31 - 1` (<code>2<sup>31</sup>-1</code>).

#### Solutions

```go
func myAtoi(s string) int {
	l := len(s)
	if l == 0 {
		return 0
	}

	i := 0
	for i < l && s[i] == ' ' {
		i++
	}

	if i < l && s[i] != '+' &&
		s[i] != '-' &&
		s[i] != '0' &&
		s[i] != '1' &&
		s[i] != '2' &&
		s[i] != '3' &&
		s[i] != '4' &&
		s[i] != '5' &&
		s[i] != '6' &&
		s[i] != '7' &&
		s[i] != '8' &&
		s[i] != '9' {
		return 0
	}

	isNegative := false
	if i < l && s[i] == '-' {
		isNegative = true
		i++
	} else if i < l && s[i] == '+' {
		i++
	}

	if i < l && (s[i] == '+' || s[i] == '-') {
		return 0
	}

	var n float64 = 0
	for i < l && s[i] >= '0' && s[i] <= '9' {
		n = n*10 + float64(s[i]-'0')
		i++
	}

	if isNegative {
		n = -n
	}

	if n < math.MinInt32 {
		return math.MinInt32
	}
	if n > math.MaxInt32 {
		return math.MaxInt32
	}

	return int(n)
}
```

#### Complexity

- Time complexity: `O(n)` because we just traverse the string once.
- Space complexity: We use three extra variable `l`, `isNegative`, `n`, no matter what value will, they will take a fixed bytes. So the space complexity is `O(1)`.
