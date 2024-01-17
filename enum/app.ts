// default enum

enum Gender {
  Male,
  Female,
  AttackHellicopter,
}

let userGender: Gender = Gender.Male;
console.info(userGender);

// using string

enum Category {
  Office = "OFFICE",
  Gaming = "GAMING",
  Developer = "Developer",
}

let category: Category = Category.Office;

console.info(category);
