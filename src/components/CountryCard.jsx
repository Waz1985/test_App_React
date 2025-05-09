function CountryCard({ country, onClick }) {
  return (
    <div className="card h-100" onClick={() => onClick(country)} style={{ cursor: 'pointer' }}>
      <img src={country.flags.svg} className="card-img-top" alt={country.name.common} />
      <div className="card-body">
        <h5 className="card-title">{country.name.common}</h5>
        <p className="card-text">
          Región: {country.region} <br />
          Población: {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;