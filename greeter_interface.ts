// Sample two: interfaces
interface IPerson {
  firstName: string;
  lastName: string;
}

function greeter(person: IPerson) {
  return `hello ${person.firstName} ${person.lastName}`;
}

const user = { firstName: "Jane", lastName: "Doe" };

document.body.innerHTML = greeter(user);

// Keywords: typescript simple interfaces
