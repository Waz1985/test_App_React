
import { useState, useEffect } from 'react';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';
import CountryModal from './components/CountryModal';

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (query) => {
    const results = countries.filter(country =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
  };

  return (
    <div className="container my-4">
      <h1 className="mb-4">Explorador de Países</h1>
      <SearchBar onSearch={handleSearch} />
      <CountryList countries={filtered} onSelect={setSelected} />
      <CountryModal
        country={selected}
        countries={countries}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

export default App;