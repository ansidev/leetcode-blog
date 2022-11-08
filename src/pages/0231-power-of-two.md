---
layout: "../layouts/Post.astro"
title: "231. Power of Two"
slug: "0231-power-of-two"
keywords:
- "power of two"
author: "ansidev"
pubDate: "2022-10-27T15:23:12+07:00"
difficulty: "Easy"
tags:
- "Math"
- "Bit Manipulation"
- "Recursion"
---
## Problem

Given an integer `n`, return `true` *if it is a power of two. Otherwise, return* `false`.

An integer `n` is a power of two, if there exists an integer `x` such that <code>n == 2<sup>x</sup></code>.

**Example 1:**

```
Input: n = 1
Output: true
Explanation: 20 = 1
```
**Example 2:**

```
Input: n = 16
Output: true
Explanation: 24 = 16
```
**Example 3:**

```
Input: n = 3
Output: false
```

**Constraints:**

- <code>-2<sup>31</sup> <= n <= 2<sup>31</sup> - 1</code>.

**Follow up:** Could you solve it without loops/recursion?

## Analysis

1. If `n` is a power of two:

<pre>
<code>n = 2<sup>i</sup></code> (`i ≥ 0`)
  <code>≥ 2<sup>0</sup> = 1</code>
</pre>

`=>` **If `n < 0`, `n` is not a power of two**.

2. If `n` is a power of two:

The binary form of every <code>2<sup>i</sup></code> (`i` is a non-negative number):

<pre>
<code>2<sup>0</sup><sub>10</sub></code> = <code>1<sub>10</sub></code> = <code>1<sub>2</sub></code>

<code>2<sup>1</sup><sub>10</sub></code> = <code>2<sub>10</sub></code> = <code>10<sub>2</sub></code>

<code>2<sup>2</sup><sub>10</sub></code> = <code>4<sub>10</sub></code> = <code>100<sub>2</sub></code>

<code>2<sup>3</sup><sub>10</sub></code> = <code>8<sub>10</sub></code> = <code>1000<sub>2</sub></code>

<code>...</code>

<code>2<sup>i</sup><sub>10</sub></code> = <code>100...00<sub>2</sub></code> (only one 1-digit at the first position and followed by total `i` 0-digit numbers)
       |__i__|
</pre>

2.1. If `i = 0`:
<pre>
<code>n = 2<sup>0</sup> = 1 > 0</code>
n & (n-1) = 1 & 0 = 0
</pre>


2.2. If `i > 0`:

The binary form of every <code>2<sup>i</sup> - 1</code>:

<pre>
<code>2<sup>1</sup><sub>10</sub> - 1</code> = <code>1<sub>10</sub></code> = <code>01<sub>2</sub></code>

<code>2<sup>2</sup><sub>10</sub> - 1</code> = <code>3<sub>10</sub></code> = <code>011<sub>2</sub></code>

<code>2<sup>3</sup><sub>10</sub> - 1</code> = <code>7<sub>10</sub></code> = <code>0111<sub>2</sub></code>

<code>...</code>

<code>2<sup>i</sup><sub>10</sub> - 1</code> = <code>011...11<sub>2</sub></code> (total `i` 1-digit numbers)
           |__i__|
</pre>

For `i > 0`, we have:

<pre>
n - 1 = <code>2<sup>i</sup><sub>10</sub> - 1</code> ≥ 0
n & (n-1) = <code>2<sup>i</sup><sub>10</sub></code> & <code>2<sup>i</sup><sub>10</sub> - 1</code> = <code>100...00<sub>2</sub></code> & <code>011...11<sub>2</sub></code> = 0
                 |__i__|     |__i__|
</pre>

```
If n is a power of two: n & (n-1) = 0.
```

3. If `n` is not an power of two, we have:
<pre>
    <code>         n<sub>10</sub></code> = <code>[0....0][1....1][0....0]<sub>2</sub></code> (i ≥ 0, j ≥ 2, k ≥ 1)
                   |__i__| |__j__| |__k__|

    <code>     (n-1)<sub>10</sub></code> = <code>[0....0][1....1]0[1....1]<sub>2</sub></code>
                   |__i__| |_j-1_|  |__k__|

x = <code>n<sub>10</sub> & (n-1)<sub>10</sub></code> = <code>[0....0][1.....][0....0]<sub>2</sub></code>
                   |__i__| |_j-1_| |_k+1_|
</pre>

- `j ≥ 2` => `j-1 ≥ 1`. So `x` has at least one 1-digit number => `x > 0`.

```
If n is not a power of two: n & (n-1) > 0.
```

```
As result, n is a power of two if and only if n > 0 and n & (n-1) = 0.
```
## Approaches

### Approach 1

#### Approach

- `n` is a power of two if and only if `n > 0` and `n & (n-1) = 0`.

#### Solutions

```go
func isPowerOfTwo(n int) bool {
	return n > 0 && n&(n-1) == 0
}
```

#### Complexity

- **Time Complexity**: `O(1)`.
