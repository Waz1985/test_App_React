import CountryCard from './CountryCard';

function CountryList({ countries, onSelect }) {
  return (
    <div className="row g-4">
      {countries.map((country, i) => (
        <div className="col-6 col-md-4 col-lg-3" key={i}>
          <CountryCard country={country} onClick={onSelect} />
        </div>
      ))}
    </div>
  );
}

export default CountryList;