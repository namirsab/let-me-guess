import sumAges from "./sumAges";

describe("sumAges", () => {
  it("should return the sum of the ages of all the persons given", () => {
    // Given an array of persons
    const persons = [
      {
        name: "Namir",
        nationality: "Spanish",
        gender: "male",
        age: 30,
      },
      {
        name: "Marwin",
        nationality: "German",
        gender: "male",
        age: 34,
      },
      {
        name: "Martin",
        nationality: "German",
        gender: "male",
        age: 32,
      },
    ];

    // WHEN i call the function sumAges with that array of persons
    const result = sumAges(persons);
    // THEN it should return the sum of the ages of all persons in the array
    expect(result).toEqual(96);
  });

  it("should return 0 if the persons array is empty", () => {
    // GIVEN an empty array
    const persons = [];
    // WHEN I call the function sumAges with that array of persons
    const result = sumAges(persons);
    // THEN it should return 0
    expect(result).toEqual(0);
  });

  it("should return 0 if the persons array is not defined", () => {
    // WHEN I call the function sumAges without any arguments
    const result = sumAges();
    // THEN it should return 0
    expect(result).toEqual(0);
  });

  it("should consider age as 0 if not defined in a person object", () => {
    // Given an array of persons
    const persons = [
      {
        name: "Namir",
        nationality: "Spanish",
        gender: "male",
      },
      {
        name: "Marwin",
        nationality: "German",
        gender: "male",
        age: 34,
      },
      {
        name: "Martin",
        nationality: "German",
        gender: "male",
        age: 32,
      },
    ];
    // WHEN I call the function sumAges without any arguments
    const result = sumAges(persons);
    // THEN it should return 0
    expect(result).toEqual(66);
  });
});
