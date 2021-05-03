import "./SearchInput.css";
export default function SearchInput({ placeholder, value, onChange }) {
  return (
    <input
      value={value}
      className="SearchInput"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
