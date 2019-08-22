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

// Keywords: typescript optional arguments function parameters
