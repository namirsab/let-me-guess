import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NameCard from "./components/NameCard";
import SearchInput from "./components/SearchInput";

function getAge(name) {
  const url = `https://api.agify.io/?name=${name}`;
  return fetch(url).then((res) => res.json());
}

function getGender(name) {
  const url = `https://api.genderize.io/?name=${name}`;
  return fetch(url).then((res) => res.json());
}

function getNationality(name) {
  const url = `https://api.nationalize.io?name=${name}`;
  return fetch(url).then((res) => res.json());
}

function App() {
  const [results, setResults] = useState([]);
  const [nameInput, setNameInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    Promise.all([
      getGender(nameInput),
      getNationality(nameInput),
      getAge(nameInput),
    ]).then(([genderResponse, nationalityResponse, ageResponse]) => {
      setResults((oldResults) => {
        return [
          {
            id: nameInput + Date.now(),
            name: nameInput,
            nationality: nationalityResponse.country[0]?.country_id,
            gender: genderResponse.gender,
            age: ageResponse.age,
          },
          ...oldResults,
        ];
      });
      setNameInput("");
    });
  }

  function handleInputChange(event) {
    setNameInput(event.target.value);
  }

  function renderResults() {
    return results.map((result) => {
      return (
        <NameCard
          name={result.name}
          nationality={result.nationality}
          gender={result.gender}
          age={result.age}
          key={result.id}
        />
      );
    });
  }

  return (
    <div className="App">
      <header className="App__header">
        <h1>Hello! Let me guess some stuff about you!</h1>
      </header>
      <main className="App__content">
        <form className="SearchGroup" onSubmit={handleSubmit}>
          <SearchInput
            value={nameInput}
            onChange={handleInputChange}
            placeholder="Type your name!"
          />
          <Button type="submit" text="Go!" />
        </form>
        <section className="NameCardList">{renderResults()}</section>
      </main>
    </div>
  );
}

export default App;
