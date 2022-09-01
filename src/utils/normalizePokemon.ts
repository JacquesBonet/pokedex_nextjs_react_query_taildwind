import { IMG_URL } from './constants'
import getBackgroundColors from './getBackgroundColors'
import { IPokemon } from "@/types";

export interface INormilizePokemon {
  pokemon: IPokemon
}

export const normalizePokemon = ({ pokemon }: INormilizePokemon): IPokemon => ({
  id: pokemon.id,
  name: pokemon.name,
  image: `${IMG_URL + pokemon.id}.webp`,
  bgColors: getBackgroundColors(pokemon.types),
  types: pokemon.types,
})
