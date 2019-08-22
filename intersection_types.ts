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

// Keywords: typescript intersections type interfaces join types
