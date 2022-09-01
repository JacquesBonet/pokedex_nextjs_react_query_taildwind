import { readList } from '@/utils/fetcher'
import { useInfiniteQuery as useInfiniteReactQuery } from 'react-query'

export const useInfiniteQuery = () => {
  const {
    data = {
      pages: [{ results: [], next: null }],
      pageParam: [{ next: '' }],
    },
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteReactQuery(['pokemons'], readList, {
    getNextPageParam: (lastPage: any) => lastPage.next,
  })

  return {
    pages: data.pages,
    fetchNextPage,
    isFetching,
    hasNextPage,
    pageParam: data.pages?.length
      ? data.pages[data.pages.length - 1].next
      : null,
  }
}
