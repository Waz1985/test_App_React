function CountryModal({ country, countries, onClose }) {
  if (!country) return null;

  const { name, flags, capital, region, subregion, population, languages, currencies, borders = [] } = country;

  const languageList = languages ? Object.values(languages).join(', ') : 'N/A';
  const currencyList = currencies
    ? Object.values(currencies).map(c => `${c.name} (${c.symbol})`).join(', ')
    : 'N/A';
  const borderNames = borders.map(code => {
    const found = countries.find(c => c.cca3 === code);
    return found ? found.name.common : code;
  });

  return (
    <div className="modal fade show d-block" tabIndex="-1" onClick={onClose}>
      <div className="modal-dialog modal-lg" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name.official}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={flags.svg} className="img-fluid mb-3" alt={`Bandera de ${name.common}`} />
            <ul className="list-group">
              <li className="list-group-item"><strong>Nombre Común:</strong> {name.common}</li>
              <li className="list-group-item"><strong>Capital:</strong> {capital?.[0] || 'N/A'}</li>
              <li className="list-group-item"><strong>Región/Subregión:</strong> {region} / {subregion}</li>
              <li className="list-group-item"><strong>Población:</strong> {population.toLocaleString()}</li>
              <li className="list-group-item"><strong>Idiomas:</strong> {languageList}</li>
              <li className="list-group-item"><strong>Monedas:</strong> {currencyList}</li>
              <li className="list-group-item"><strong>Fronteras:</strong> {borderNames.join(', ') || 'Ninguna'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryModal;