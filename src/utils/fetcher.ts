export const readList = ({
  pageParam = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`,
}) => (pageParam ? fetch(pageParam).then((res) => res.json()) : '')

export const readOne = (url:string) =>
  url ? fetch(url).then((response) => response.json()) : ''
