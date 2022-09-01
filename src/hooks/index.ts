import { readList } from '@/utils/fetcher'
import { useInfiniteQuery as useInfiniteReactQuery } from 'react-query'
import { useInView } from 'react-cool-inview'

export const useInfiniteQuery = () => {
  const {
    data = {
      pages: [{ results: [], next: null }],
      pageParam: '',
    },
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteReactQuery(['pokemons'], readList, {
    getNextPageParam: (lastPage: any) => lastPage.next,
  })
  const { observe } = useInView({
    rootMargin: '300px',
    onEnter: () => {
      fetchNextPage({ pageParam: data.pageParam })
    },
  })

  return {
    pages: data.pages,
    fetchNextPage,
    isFetching,
    hasNextPage,
    observe,
    pageParam: data.pages?.length
      ? data.pages[data.pages.length - 1].next
      : null,
  }
}
