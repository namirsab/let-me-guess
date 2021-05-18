export default function countByGender(persons = []) {
  const counts = {
    male: 0,
    female: 0,
  };

  persons.forEach((person) => {
    counts[person.gender] += 1;
  });

  return counts;
}
