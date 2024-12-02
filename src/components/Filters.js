import React, { useState } from 'react';

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    status: '',
    genero: '',
    species: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {...filters, [name]: value};
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-4">
      <div className='row g-3'>
        <div className="col-md-4">
          <select 
            name='status'
            value={filters.status}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Todos los estados</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            name='genero'
            value={filters.genero}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Todos los géneros</option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
            <option value="genderless">Sin género</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>
        <div className="col-md-4">
          <input 
            type="text"
            name="species"
            value={filters.species}
            onChange={handleChange}
            placeholder="Especies"
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;