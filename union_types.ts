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

// Keywords: typescript union type multiple types or either null
