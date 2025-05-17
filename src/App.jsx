import React, { useState, useEffect } from 'react'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import { fetchCharacters, fetchCharacterDetails } from './services/api'
import Loading from './components/Loading'

function App() {
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters()
        setCharacters(data)
        if (data.length > 0) {
          const firstChar = await fetchCharacterDetails(data[0]._id)
          setSelectedCharacter(firstChar)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadCharacters()
  }, [])

  const handleSelectCharacter = async (characterId) => {
    try {
      setLoading(true)
      const character = await fetchCharacterDetails(characterId)
      setSelectedCharacter(character)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="container">
      <h1>Disney Characters</h1>
      
      <div className="content">
        {loading && characters.length === 0 ? (
          <Loading message="Loading characters..." />
        ) : (
          <>
            <CharacterList 
              characters={characters} 
              onSelect={handleSelectCharacter} 
            />
            {loading ? (
              <Loading message="Loading character details..." />
            ) : (
              <CharacterDetail character={selectedCharacter} />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App