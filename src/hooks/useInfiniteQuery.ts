import { readList } from '@/utils/fetcher'
import { useInfiniteQuery as useInfiniteReactQuery } from 'react-query'
import { useInView } from 'react-cool-inview'
import { IPage, IPages } from "@/types";

export const useInfiniteQuery = ():IPages => {
  const {
    data = {
      pages: [{ results: [], next: null }],
    },
    fetchNextPage,
    isFetching,
  } = useInfiniteReactQuery(['pokemons'], readList, {
    getNextPageParam: (lastPage: IPage) => lastPage.next,
  })
  const { observe } = useInView({
    rootMargin: '200px',
    onEnter: () => {
      fetchNextPage()
    },
  })

  return {
    pages: data.pages,
    isFetching,
    observe,
  }
}
