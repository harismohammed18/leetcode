# Intuition

In many applications, especially in UI or event-driven environments, some functions (like `console.log`, API calls, or state updates) can be triggered too frequently — such as when a user types, scrolls, or resizes a window. To avoid overwhelming the system, we want to **delay execution** of a function until after a pause in activity. This is the core idea behind debouncing.

# Approach

We create a `debounce` function that takes two parameters:
- `fn`: The original function to delay
- `t`: The debounce delay in milliseconds

Internally, we use `setTimeout` to delay the execution of `fn`. If `debounce` is called again before the timer finishes, we clear the existing timeout using `clearTimeout`, and set a new one. This ensures that `fn` only executes once there has been no new call within the last `t` milliseconds.

The returned function wraps this logic and preserves the ability to accept arguments dynamically using the rest operator `(...args)`.

# Complexity

- Time complexity: $$O(1)$$  
  Each call performs constant time operations: setting/clearing a timeout.

- Space complexity: $$O(1)$$  
  We store a single timer reference, regardless of the number of calls or their arguments.
