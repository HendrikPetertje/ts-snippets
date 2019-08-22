// one can also use `type IAnimal`, in a project one should choose to either
// only use type or to only use interfaces for interfacing.
// the default config of this project blocks the auto-correct of my edtor
// from actually writing  `type Ianimal` here, so I can't show that ;)
interface IAnimal {
  kind: string;
  weight: number;
}

let dog: IAnimal;

dog = {
  kind: "mammal",
  weight: 10,
}; // ✅

dog = {
  kind: true,
  weight: 10,
}; // ❌ - kind should be a string

// Keywords: typescript interfaces aliassing aliasses
