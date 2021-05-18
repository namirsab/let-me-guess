import Flag from "react-flagkit";
import "./NameCard.css";

export default function NameCard({ name, nationality, gender, age }) {
  const genderIcon = gender === "male" ? "♂" : "♀";

  return (
    <article className="NameCard">
      <header className="NameCard-header">
        <h3>{name}</h3>
        <div className="NameCard-header__nationality">
          {nationality && <Flag country={nationality} />}
        </div>
      </header>
      <section className="NameCard-content">
        <div className="NameCard-content__age">{age}</div>
        <div className="NameCard-content__gender">{genderIcon}</div>
      </section>
    </article>
  );
}
