// JavaScript Destructuring

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

// Destructuring object properties

const { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 30

// Destructuring nested object properties

const {
  address: { street, city, state },
} = person;
console.log(street); // Output: 123 Main St
console.log(city); // Output: New York
console.log(state); // Output: NY

// Destructuring array elements

const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth, fifth] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4

// Destructuring function parameters

function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}

greet(person); // Output: Hello, my name is John and I'm 30 years old.

// Destructuring with default values

const {
  address: {
    street: street = "No street given",
    city: city = "No city given",
    state: state = "No state given",
  } = {},
} = person;
console.log(street); // Output: 123 Main St
console.log(city); // Output: New York
console.log(state); // Output: NY

// Destructuring with rest parameter

const { name, age, ...rest } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(rest); // Output: { address: { street: '123 Main St', city: 'New York', state: 'NY' } }

// Destructuring with spread operator

const {
  address: { street, city, state },
} = person;
const newPerson = { ...person, greeting: "Hello" };
console.log(newPerson); // Output: { name: 'John', age: 30, address: { street: '123 Main St', city: 'New York', state: 'NY' }, greeting: 'Hello' }

// Destructuring with destructuring assignment

let name2, age2;
({ name: name2, age: age2 } = person);
console.log(name2); // Output: John
console.log(age2); // Output: 30

// Destructuring with template literals

const greetingMessage = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log(greetingMessage); // Output: Hello, my name is John and I'm 30 years old.

// Destructuring with computed property names

const propName = "name";
const { [propName]: propValue } = person;
console.log(propValue); // Output: John

// Destructuring with optional chaining

const { address: { street: street3, city: city3 } = {} } = person?.address;
console.log(street3); // Output: 123 Main St
console.log(city3); // Output: New York

// Destructuring with nullish coalescing

const address4 = person.address ?? {
  street: "No street given",
  city: "No city given",
  state: "No state given",
};
console.log(address4.street); // Output: 123 Main St
console.log(address4.city); // Output: New York
console.log(address4.state); // Output: NY

// Destructuring with optional catch binding

const { name: name4, age: age4 } = person ?? { name: "John", age: 30 };
console.log(name4); // Output: John
console.log(age4); // Output: 30

// Destructuring with optional chaining and nullish coalescing

const address5 = person?.address?.street ?? "No street given";
console.log(address5); // Output: 123 Main St

// Destructuring with optional chaining and optional catch binding

const { name: name5, age: age5 } = person?.name ?? "John";
console.log(name5); // Output: John
console.log(age5); // Output: 30

// Destructuring with optional chaining and template literals

const greetingMessage2 = `Hello, my name is ${person?.name ?? "John"} and I'm ${
  person?.age ?? 30
} years old.`;
console.log(greetingMessage2); // Output: Hello, my name is John and I'm 30 years old.

// Destructuring with optional chaining and computed property names

const propName2 = "address.street";
const { [propName2]: propValue2 } = person?.address ?? {};
console.log(propValue2); // Output: 123 Main St

// Destructuring with optional chaining and optional catch binding

const { name: name6, age: age6 } = person?.name ?? "John";
console.log(name6); // Output: John
console.log(age6); // Output: 30
