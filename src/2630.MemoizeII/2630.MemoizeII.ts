function memoize(fn: (...args: any[]) => any): (...args: any[]) => any {
  const cache = new Map<any, any>();
  let callCount = 0;

  function memoized(...args: any[]) {
    let current = cache;

    for (const arg of args) {
      if (!current.has(arg)) {
        current.set(arg, new Map());
      }
      current = current.get(arg);
    }

    if (!current.has("__result__")) {
      const result = fn(...args);
      current.set("__result__", result);
      callCount++;
    }

    // This log structure is just for your output format:
    (memoized as any).calls = callCount;
    return current.get("__result__");
  }

  (memoized as any).calls = callCount;
  return memoized;
}
