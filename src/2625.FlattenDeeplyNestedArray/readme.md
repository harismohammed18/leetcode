# Intuition

The goal is to flatten a multi-dimensional array up to a specified depth `n`. The initial thought is to iterate or recurse through the array, reducing nesting as we go. Since array flattening is inherently hierarchical, a recursive approach feels natural—especially when the depth can vary. This way, we can dive into each nested level only when needed, rather than flattening all layers blindly.

# Approach

We define a recursive helper function `flatten` that processes each element of the array:
- If the element is a nested array **and** the current depth `n` is greater than 0, we recursively call `flatten` on the nested array with `n - 1`.
- If the element is not an array, or the depth has reached 0, we push it directly into the result array.

This approach ensures:
- Only the required levels are flattened.
- No unnecessary allocations or intermediate arrays are created.
- Each element is visited once, making it efficient for large or deeply nested arrays.

This recursive method avoids the pitfalls of iterative flattening which often requires flattening one level per iteration (costly for deep nesting or large arrays).

# Complexity

- Time complexity: $$O(N)$$  
  Where \( N \) is the total number of elements in the input array, including those nested in sub-arrays. Each element is visited exactly once.

- Space complexity: $$O(N)$$  
  The space is used for the output array and the call stack. In the worst case (deeply nested arrays), the call stack depth can go up to `n`, but the total auxiliary space (excluding input) is linear in terms of the total number of elements.
