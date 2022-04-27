import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-white font-bold text-5xl p-20 flex flex-col gap-10'>
      <h1>Links to test pages -</h1>
      <Link href="/scrolling"><a>- Scrolling</a></Link>
      <Link href="/carousel"><a>- Carousel</a></Link>
    </div>
  )
}
