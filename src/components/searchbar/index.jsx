import './styles.css';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="home__search">
      <input
        type="text"
        placeholder="Buscar por título..."
        className="home__search-input"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
