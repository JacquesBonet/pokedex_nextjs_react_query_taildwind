import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      })
  )

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
