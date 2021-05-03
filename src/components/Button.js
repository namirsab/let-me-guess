import "./Button.css";

export default function Button({ text, onClick, type }) {
  return (
    <button type={type} className="Button" onClick={onClick}>
      {text}
    </button>
  );
}
