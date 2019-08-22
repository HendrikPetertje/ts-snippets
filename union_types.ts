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

// union on values
type UserState = "active" | "inactive" | "invited";

const correctState: UserState = "active"; // ✅
const incorrectState: UserState = "loggedin"; // ❌ TypeError

// Keywords: typescript union type multiple types or either null
