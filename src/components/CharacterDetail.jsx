import React from 'react'

export default function CharacterDetail({ character }) {
  if (!character) {
    return (
      <div className="character-details">
        <div className="details-placeholder">
          <p>Select a character to see details</p>
        </div>
      </div>
    )
  }

  return (
    <div className="character-details">
      <div className="character-detail-view">
        <h2>{character.name}</h2>
        <img 
          src={character.imageUrl || 'https://via.placeholder.com/200'} 
          alt={character.name} 
        />
        <div className="character-info">
          {character.films?.length > 0 && (
            <p><strong>Films:</strong> {character.films.join(', ')}</p>
          )}
          {character.tvShows?.length > 0 && (
            <p><strong>TV Shows:</strong> {character.tvShows.join(', ')}</p>
          )}
          {character.videoGames?.length > 0 && (
            <p><strong>Video Games:</strong> {character.videoGames.join(', ')}</p>
          )}
          {character.allies?.length > 0 && (
            <p><strong>Allies:</strong> {character.allies.join(', ')}</p>
          )}
          {character.enemies?.length > 0 && (
            <p><strong>Enemies:</strong> {character.enemies.join(', ')}</p>
          )}
          {character.parkAttractions?.length > 0 && (
            <p><strong>Park Attractions:</strong> {character.parkAttractions.join(', ')}</p>
          )}
        </div>
      </div>
    </div>
  )
}