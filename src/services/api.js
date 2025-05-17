export async function fetchCharacters() {
  const response = await fetch('https://api.disneyapi.dev/character')
  if (!response.ok) {
    throw new Error('Failed to fetch characters')
  }
  const data = await response.json()
  return data.data
}

export async function fetchCharacterDetails(characterId) {
  const response = await fetch(`https://api.disneyapi.dev/character/${characterId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch character details')
  }
  const data = await response.json()
  return data.data
}