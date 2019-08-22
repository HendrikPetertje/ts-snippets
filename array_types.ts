// First method is using the square bracket notation
let messageArray: string[] = ["hello", "my name is fred", "bye"];

// Second method uses the Array keyword notation
let otherMessageArray: string[] = ["hello", "my name is fred", "bye"];

// Automatic type detection
let list = [10, 22, 4, null, 5];

list.push(6); // ✅
list.push(null); // ✅
list.push("nope"); // ❌ - type 'string' is neither of type 'number' or 'null'

// Also check out: Tuples

// Keywords: typescript array of strings numbers
