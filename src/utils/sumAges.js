export default function sumAges(persons = []) {
  return persons.reduce((accumulator, person) => {
    const personAge = person.age ?? 0;
    return accumulator + personAge;
  }, 0);
}
