type FunctionType = (x: number) => number;

function compose(functions: FunctionType[]): FunctionType {
  return function (x: number) {
    return functions.reduceRight(
      (acc, fn): number => fn(acc) as unknown as number,
      x
    );
  };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
