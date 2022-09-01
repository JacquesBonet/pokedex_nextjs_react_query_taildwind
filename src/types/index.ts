export enum IDirection {
  DOWN,
  UP,
}

export interface ICardProps {
  url: string
  index: number
  [x: string]: any
}

export interface IColorProps {
  normal: IColorVariant
  fire: IColorVariant
  fighting: IColorVariant
  water: IColorVariant
  flying: IColorVariant
  grass: IColorVariant
  poison: IColorVariant
  electric: IColorVariant
  ground: IColorVariant
  psychic: IColorVariant
  rock: IColorVariant
  ice: IColorVariant
  bug: IColorVariant
  dragon: IColorVariant
  ghost: IColorVariant
  dark: IColorVariant
  steel: IColorVariant
  fairy: IColorVariant
}

export interface IColorVariant {
  light: string
  medium: string
};

export interface IPage {
  results: any[],
  next: string | null,
}

export interface IPages {
  isFetching: boolean,
  observe: (props: HTMLElement) => void,
  pages: IPage[],
}

export interface IPokemon {
  bgColors?: IColorVariant[]
  id: number
  image?: string
  name: string
  types: IType[]
}
export interface IType {
  slot: number
  type: IType2
}

export interface IType2 {
  name: string
  url: string
}


