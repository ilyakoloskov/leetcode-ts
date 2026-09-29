# 2667. Create Hello World Function

[LeetCode](https://leetcode.com/problems/create-hello-world-function/) · Easy · Closures

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.

**Example 1**

```
Input: args = []
Output: "Hello World"
```

```js
const f = createHelloWorld();
f(); // "Hello World"
```

**Example 2**

```
Input: args = [{},null,42]
Output: "Hello World"
```

```js
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
```

Any arguments could be passed to the function but it should still always return `"Hello World"`.
