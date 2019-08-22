// void means no returned values in this case
const darkestPlaceOnEarth = (name: string): void => {
  alert(name);
};

// Push to an array
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

// The `name` parameter can be either a string or null
const sayHappyBirthdayOnFacebook = (name: string | null) => {
  if (name === null) {
    return "Happy birthday!";
  } else {
    return `Happy birthday ${name}!`;
  }
};

sayHappyBirthdayOnFacebook(null); // => "Happy birthday!"
sayHappyBirthdayOnFacebook("Jeremy"); // => "Happy birthday Jeremy!"

// Intersection Type
interface IStudent {
  id: string;
  age: number;
}

interface IEmployee {
  companyId: string;
}

let person: IStudent & IEmployee;

person.age = 21; // ✅
person.companyId = "SP302334"; // ✅
person.id = "10033402"; // ✅
person.name = "Henry"; // ❌ - name does not exist in Student & Employee

// Tuples!!
let list: [string, string, number];

list = ["apple", "banana", 8.75]; // ✅
list = ["apple", true, 8.75]; // ❌ - the second argument should be of type string
list = ["apple", "banana", 10.33, 3]; // ❌ - the tuple specifies a length of 3, not 4

// Optional function parameter
function callMom(message?: string) {
  if (!message) {
    return "Hi mom. Love you. Bye.";
  } else {
    return message;
  }
}

// Interface describing an object containing an optional property
interface IOptionalPerson {
  name: string;
  age: number;
  favoriteColor?: string; // This property is optional
}
