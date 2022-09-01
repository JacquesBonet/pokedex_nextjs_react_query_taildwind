import Navbar from './Navbar'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="mt-14 flex h-full w-full flex-col">{children}</main>
    </>
  )
}

export default Layout
