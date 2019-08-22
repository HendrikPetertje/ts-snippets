// Tuples!!
let list: [string, string, number];

list = ["apple", "banana", 8.75]; // ✅
list = ["apple", true, 8.75]; // ❌ - the second argument should be of type string
list = ["apple", "banana", 10.33, 3]; // ❌ - the tuple specifies a length of 3, not 4

// Keywords: typescript limited array tuples
