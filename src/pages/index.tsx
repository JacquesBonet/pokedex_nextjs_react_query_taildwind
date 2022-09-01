import React from 'react'
import PokemonCard from '@/components/PokemonCard'
import type { NextPage } from 'next'
import { useInfiniteQuery } from '@/hooks'
import { VirtualList } from "@/components/VirtualList";

const Home: NextPage = () => {
  const { pages, observe} = useInfiniteQuery()

  return (
    <div className="container mx-auto">
      <VirtualList Element={PokemonCard} observe={observe} pages={pages} />
    </div>
  )
}

export default Home
