import CardDetail from '@/components/CardDetail'
import Cards from '@/components/Cards'
import Card from '@/components/Cards'
import Divider from '@/components/Divider'
import Header from '@/components/Header'
import Search from '@/components/Search'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <main className="flex min-h-screen flex-col">
    <div className="bg-white">
      <Header/>
      </div>
      <Search/>
      <div>
        <Cards/>
      </div>
      <Divider/>
      <div className="justify-self-start ml-40">
      <CardDetail/>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full items-end justify-center bg-[#f9f9f9] lg:h-auto lg:w-auto lg:bg-none">
        
        </div>
      </div>
    </main>
    </div>
  )
}
