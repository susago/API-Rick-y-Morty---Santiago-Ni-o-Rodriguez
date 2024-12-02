import React from 'react';

function CharacterCard({ character }) {
    // Check if character is undefined or null
    if (!character) {
        return <div className="card h-100">No character data available</div>;
    }

    const getStatusInSpanish = (status) => {
        switch ((status || '').toLowerCase()) {
            case 'alive': return 'Vivo';
            case 'dead': return 'Muerto';
            default: return 'Desconocido';
        }
    };

    const getGenderInSpanish = (gender) => {
        switch ((gender || '').toLowerCase()) {
            case 'female': return 'Mujer';
            case 'male': return 'Hombre';
            case 'genderless': return 'Sin género';
            default: return 'Desconocido';
        }
    };

    return (
        <div className="card h-100">
            {character.image && (
                <img src={character.image} className="card-img-top" alt={character.name || 'Character'} />
            )}
            <div className="card-body"> 
                <h5 className="card-title">{character.name || 'Nombre desconocido'}</h5>
                <p className="card-text">Estado: {getStatusInSpanish(character.status)}</p>
                <p className="card-text">Especie: {character.species || 'Desconocida'}</p>
                <p className="card-text">Género: {getGenderInSpanish(character.gender)}</p>
            </div>
        </div>
    );
}

export default CharacterCard;