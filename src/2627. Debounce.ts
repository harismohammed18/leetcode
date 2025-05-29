type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (...args: number[]) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

/**
 * Example:
 * const log = debounce(console.log, 100);
 * log(1); // cancelled
 * log(2); // cancelled
 * log(3); // Logged at t=100ms with argument 3
 */
