export {};

declare global {
  interface Array<T> {
    groupBy<K extends string>(fn: (item: T) => K): Record<K, T[]>;
  }
}

Array.prototype.groupBy = function <T, K extends string>(
  this: T[],
  fn: (item: T) => K
): Record<K, T[]> {
  const result: Record<K, T[]> = {} as Record<K, T[]>;

  for (const item of this) {
    const key = fn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
};
