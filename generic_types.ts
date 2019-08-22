// Push generic to an array
// a generic type often consists only out of 1 uppercase letter.
// it's a loose and debated convention.
const fillArray = <T>(len: number, elem: T) => {
  const output: T[] = [];
  for (let i = 0; i <= len; i += 1) {
    output.push(elem);
  }
  return output;
};

const newArray = fillArray<string>(3, "hi"); // => ['hi', 'hi', 'hi']

newArray.push("bye"); // ✅
newArray.push(true); // ❌ - only strings can be added to the array

// Keywords: typescript generic types function array of strings
