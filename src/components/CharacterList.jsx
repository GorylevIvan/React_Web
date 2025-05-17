import React, { useState } from 'react'

export default function CharacterList({ characters, onSelect }) {
  const [selectedId, setSelectedId] = useState(characters[0]?._id || null)

  const handleClick = (characterId) => {
    setSelectedId(characterId)
    onSelect(characterId)
  }

  return (
    <div className="character-list">
      {characters.length === 0 ? (
        <div className="loading">No characters found</div>
      ) : (
        characters.map(character => (
          <div 
            key={character._id}
            className={`character-card ${selectedId === character._id ? 'selected' : ''}`}
            onClick={() => handleClick(character._id)}
          >
            <img 
              src={character.imageUrl || 'https://via.placeholder.com/50'} 
              alt={character.name} 
            />
            <h3>{character.name}</h3>
          </div>
        ))
      )}
    </div>
  )
}