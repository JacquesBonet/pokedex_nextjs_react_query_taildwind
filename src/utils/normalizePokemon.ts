import { IMG_URL } from './constants'
import getBackgroundColors from './getBackgroundColors'

interface NormalizePokemon {
  pokemon: any
}

export const normalizePokemon = ({ pokemon }: NormalizePokemon) => ({
  id: pokemon.id,
  name: pokemon.name,
  image: `${IMG_URL + pokemon.id}.webp`,
  bgColors: getBackgroundColors(pokemon.types),
  types: pokemon.types,
})
