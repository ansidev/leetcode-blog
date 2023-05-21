---
title: "2468. Split message based on limit"
slug: "2468-split-message-based-on-limit"
keywords:
- "split"
- "message"
- "limit"
author: "ansidev"
pubDate: "2023-05-21T21:17:10+07:00"
difficulty: "Hard"
tags:
- "String"
- "Binary Search"
---

## Problem

You are given a string, **message**, and a positive integer, **limit**.

You must split `message` into one or more parts based on `limit`. Each resulting part should have the suffix `"<a/b>"`,
where `"b"` is to be replaced with the total number of parts and `"a"` is to be **replaced** with the index of the part,
starting from `1` and going up to `b`. Additionally, the length of each resulting part (including its suffix) should be
**equal** to `limit`, except for the last part whose length can be **at most** `limit`.

The resulting parts should be formed such that when their suffixes are removed and they are all concatenated in order,
they should be equal to `message`. Also, the result should contain as few parts as possible.

Return _the parts_ `message` _would be split into as an array of strings_. If it is impossible to split `message` as
required, return _an empty array_.

**Example 1:**

```
Input: message = "this is really a very awesome message", limit = 9
Output: ["thi<1/14>","s i<2/14>","s r<3/14>","eal<4/14>","ly <5/14>","a v<6/14>","ery<7/14>"," aw<8/14>","eso<9/14>","me<10/14>"," m<11/14>","es<12/14>","sa<13/14>","ge<14/14>"]
Explanation:
The first 9 parts take 3 characters each from the beginning of message.
The next 5 parts take 2 characters each to finish splitting message. 
In this example, each part, including the last, has length 9. 
It can be shown it is not possible to split message into less than 14 parts.
```

**Example 2:**

```
Input: message = "short message", limit = 15
Output: ["short mess<1/2>","age<2/2>"]
Explanation:
Under the given constraints, the string can be split into two parts: 
- The first part comprises of the first 10 characters, and has a length 15.
- The next part comprises of the last 3 characters, and has a length 8.
```

**Constraints:**

- <code>1 <= message.length <= 10<sup>4</sup></code>
- `message` consists only of lowercase English letters and `' '`.
- <code>1 <= limit <= 10<sup>4</sup></code>

## Analysis

Assumming it is possible to split `message` into an array M, M has n elements, then:

`M[a] = message[j:j+k]<a/b>` // example: "short<1/5>"

> `message[j:j+k]` is substring of `message` from index `j` to index `j+k-1`.

```
len(M[a]) = len(message[j:j+k]) + len(<a/b>)
          = len(message[j:j+k]) + len(</>) + len(a) + len(b)
          = len(message[j:j+k]) + 3 + len(a) + len(b)
```

- Because `message[j:j+k]` cannot be empty, `len(message[j:j+k]) >= 1`.
- `len(b) >= len(a) >= 1`.

=> `len(M[a]) = len(message[j:j+k]) + 3 + len(a) + len(b) >= 1 + 3 + 1 + 1 = 5`.

From the requirements:

> The length of each resulting part (including its suffix) should be **equal** to `limit`, except for the last part
> whose length can be **at most** `limit`.

We have

- `len(M[a]) <= limit`.

=> `limit >= 5`.

- The maximum length of each message part is `limit`, so

  - Calling L is the total length of all elements of M, `L <= b * limit`.
  - If a message part length is greater than `limit`, it is impossible to split the message as required.

#### Approach

From the above analysis, the logic can be presented as below:

- If `limit < 5`, it is impossible to split message as required, then return the empty string array immediately.
- Otherwise, iterate from 1 to len(message) and for each index `a`, we will check if it is possible to split `message`
  into `a` parts that satisfies the requirements.
- If we find the number of total message parts, it is simple to build the output array.

#### Solutions

```go
package problem

import (
		"strconv"
		"strings"
)

func splitMessage(message string, limit int) []string {
	if limit < 5 {
		return []string{}
	}

	mLen := len(message)
	b := 1
	aLen := sz(1)

	for b*limit < b*(sz(b)+3)+aLen+mLen {
		if sz(b)*2+3 >= limit {
			return []string{}
		}
		b++
		aLen = aLen + sz(b)
	}

	rs := make([]string, 0)
	i := 0
	for a := 1; a <= b; a++ {
		var sb strings.Builder
		j := limit - (3 + sz(a) + sz(b))
		sb.WriteString(message[i:min(i+j, mLen)])
		sb.WriteRune('<')
		sb.WriteString(strconv.Itoa(a))
		sb.WriteRune('/')
		sb.WriteString(strconv.Itoa(b))
		sb.WriteRune('>')
		rs = append(rs, sb.String())
		i = i + j
	}

	return rs
}

func sz(i int) int {
	return len(strconv.Itoa(i))
}
```

### Complexity

In the worst case, `message` will be split character by character (length is one), that means we have to iterate from
the start to the end index of `message` to find out the total parts number

=> Time complexity = O(n).

After that, we have to iterate over the `message` again to build the output array_

=> Time complexity = O(n).

=> Total time complexity is 2 * O(n) ~ O(n).

Space complexity for `mLen`, `b`, `aLen`, `i` is `O(1)`.

Space complexity for `rs` is `O(n)`.

=> Total space complexity is 4 * O(1) + O(n) ~ O(n).
