import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import 'bootswatch/dist/vapor/bootstrap.min.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    genero: '',
    species: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, [filters]);

  const fetchCharacters = async () => {
    setIsLoading(true);
    setError(null);
    let url = 'https://rickandmortyapi.com/api/character';
    const queryParams = new URLSearchParams({
      status: filters.status,
      gender: filters.genero,
      species: filters.species
    }).toString();
    if (queryParams) {
      url += `?${queryParams}`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      const data = await response.json();
      setCharacters(data.results || []);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setError('Error al obtener los personajes.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">API de Rick and Morty</h1>
      <Filters onFilterChange={handleFilterChange} />
      {isLoading && <p className="text-center">cargando personaje...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      {!isLoading && !error && <CharacterList characters={characters} />}
    </div>
  );
}

export default App;
