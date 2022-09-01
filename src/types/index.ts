export interface ColorVariant {
  light: string
  medium: string
};

export interface ColorProps {
  normal: {
    light: string
    medium: string
  }
  fire: {
    light: string
    medium: string
  }
  fighting: {
    light: string
    medium: string
  }
  water: {
    light: string
    medium: string
  }
  flying: {
    light: string
    medium: string
  }
  grass: {
    light: string
    medium: string
  }
  poison: {
    light: string
    medium: string
  }
  electric: {
    light: string
    medium: string
  }
  ground: {
    light: string
    medium: string
  }
  psychic: {
    light: string
    medium: string
  }
  rock: {
    light: string
    medium: string
  }
  ice: {
    light: string
    medium: string
  }
  bug: {
    light: string
    medium: string
  }
  dragon: {
    light: string
    medium: string
  }
  ghost: {
    light: string
    medium: string
  }
  dark: {
    light: string
    medium: string
  }
  steel: {
    light: string
    medium: string
  }
  fairy: {
    light: string
    medium: string
  }
}

export interface Type2 {
  name: string
  url: string
}

export interface Type {
  slot: number
  type: Type2
}

export interface Generation {
  name: string
  url: string
}

export interface IVirtualElement {
  results: never[],
  next: string | null,
}

export interface ICardProps {
  url: string
  index: number
  [x: string]: any
}

export interface IPokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  location_area_encounters: string
  types: Type[]
}

