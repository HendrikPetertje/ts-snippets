class Student {
  public fullName: string;

  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

const user = new Student("Jane", "M.", "Doe");

// Keywords: typescript class with constructor
