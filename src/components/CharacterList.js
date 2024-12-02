import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
    if (!characters || characters.length === 0) {
        return <p className="text-center">No se encontraron personajes.</p>;
    }
  
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {characters.map((character) => (
                <div key={character.id || Math.random()} className="col">
                    <CharacterCard character={character} />
                </div>
            ))}
        </div>
    );
}
  
export default CharacterList;