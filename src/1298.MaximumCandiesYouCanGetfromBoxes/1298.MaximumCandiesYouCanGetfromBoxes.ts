function maxCandies(
  status: number[],
  candies: number[],
  keys: number[][],
  containedBoxes: number[][],
  initialBoxes: number[]
): number {
  const n = status.length;
  const haveBox = new Set<number>(initialBoxes);
  const canOpen = new Set<number>();
  const visited = new Set<number>();

  const queue: number[] = [];

  // Add initially open boxes to queue
  for (const box of initialBoxes) {
    if (status[box] === 1) {
      queue.push(box);
    }
  }

  let totalCandies = 0;

  while (queue.length) {
    const box = queue.pop()!;
    if (visited.has(box)) continue;

    visited.add(box);
    totalCandies += candies[box];

    // Add keys we gain from current box
    for (const key of keys[box]) {
      if (!canOpen.has(key)) {
        canOpen.add(key);
        // If we already have the box and haven't visited it, enqueue it
        if (haveBox.has(key) && !visited.has(key)) {
          queue.push(key);
        }
      }
    }

    // Add contained boxes
    for (const contained of containedBoxes[box]) {
      if (!haveBox.has(contained)) haveBox.add(contained);
      // If it’s open or we have a key, enqueue it
      if ((status[contained] === 1 || canOpen.has(contained)) && !visited.has(contained)) {
        queue.push(contained);
      }
    }
  }

  return totalCandies;
}
