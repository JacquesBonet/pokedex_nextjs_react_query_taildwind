import React from 'react'
import PokemonCard from '@/components/PokemonCard'
import type { NextPage } from 'next'
import { useInfiniteQuery } from '@/hooks'
import { useInView } from 'react-cool-inview'

const Home: NextPage = () => {
  const { pages, fetchNextPage, pageParam } = useInfiniteQuery()
  const { observe } = useInView({
    rootMargin: '300px',
    onEnter: () => {
      fetchNextPage({ pageParam })
    },
  })

  return (
    <div className="container mx-auto">
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pages?.map((page: any) =>
          page.results?.map((data: any) => {
            const isLast = !data.next
            const { url } = data

            return (
              <li
                key={url}
                ref={isLast ? observe : null}
                className="h-80 w-full"
              >
                <PokemonCard url={url} index={url} />
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default Home
