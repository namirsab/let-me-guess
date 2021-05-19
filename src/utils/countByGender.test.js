import countByGender from "./countByGender";

describe("countByGender", () => {
  it("should return an object containing the amount of persons per gender", () => {
    const persons = [
      {
        name: "Maria",
        nationality: "Spanish",
        gender: "female",
        age: 30,
      },
      {
        name: "Marwin",
        nationality: "German",
        gender: "male",
        age: 34,
      },
      {
        name: "Simon",
        nationality: "Italian",
        gender: "male",
        age: 22,
      },
    ];

    const expected = {
      male: 2,
      female: 1,
    };

    const result = countByGender(persons);

    expect(result).toEqual(expected);
  });

  it("should return an object with male and female set to 0 if an empty array is given", () => {
    const expected = {
      male: 0,
      female: 0,
    };

    const result = countByGender([]);

    expect(result).toEqual(expected);
  });

  it("should return an object with male and female set to 0 if no input is given", () => {
    const expected = {
      male: 0,
      female: 0,
    };

    const result = countByGender();

    expect(result).toEqual(expected);
  });
});
