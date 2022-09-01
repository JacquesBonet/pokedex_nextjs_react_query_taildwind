import { IColorVariant, IType } from "@/types";
import PokemonTypeColor from './colors'

const getBackgroundColors = (
  type: IType[]
): IColorVariant[] =>
  type.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColor).filter(
      ([key, _]) => key === type.name
    )
    return backgroundColor
  })

export default getBackgroundColors
