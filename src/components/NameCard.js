import Flag from "react-flagkit";
import "./NameCard.css";

export default function NameCard({ name, nationality, gender, age }) {
  const genderIcon = gender === "male" ? "♂" : "♀";

  return (
    <article className="NameCard">
      <header className="NameCard__header">
        <h3>{name}</h3>
        <div className="NameCard__header__nationality">
          {nationality && <Flag country={nationality} />}
        </div>
      </header>
      <section className="NameCard__content">
        <div className="NameCard__content__age">{age}</div>
        <div className="NameCard__content__gender">{genderIcon}</div>
      </section>
      <footer className="NameCard__footer"></footer>
    </article>
  );
}
