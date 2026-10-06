# 2623. Memoize

[LeetCode](https://leetcode.com/problems/memoize/) · Medium · Function Transformations

Given a function `fn`, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it
will return a cached value.

You can assume there are 3 possible input functions: `sum`, `fib`, and `factorial`.

- `sum` accepts two integers `a` and `b` and returns `a + b`. If a value has already been cached for
  the arguments `(b, a)` where `a != b`, it cannot be used for the arguments `(a, b)`.
- `fib` accepts a single integer `n` and returns `1` if `n <= 1` or `fib(n - 1) + fib(n - 2)` otherwise.
- `factorial` accepts a single integer `n` and returns `1` if `n <= 1` or `factorial(n - 1) * n`
  otherwise.

**Example 1**

```
Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
```

```js
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // 4, sum was called
memoizedSum(2, 2); // 4, sum was not called: the result was cached
memoizedSum(1, 2); // 3, sum was called
```

**Example 2**

```
Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
```

**Example 3**

```
Input:
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
Output: [8,1]
```
