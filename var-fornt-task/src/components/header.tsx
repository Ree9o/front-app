"use client"
import { useState } from "react"
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

    const [isOpen, setOpen] = useState(false)
    const handleMenuOpen = () => setOpen(!isOpen)
    const handleMenuClose = () => setOpen(false)
    return (
    <>
        <header className="px-4 bg-hero-sp bg-cover bg-no-repeat pt-3 h-screen grid  grid-row-3 place-items-center lg:bg-hero">
    <div className='z-0 mx-auto bg-WHITE w-full max-w-sm h-16  rounded-md flex justify-between px-10 items-center md:max-w-7xl md:h-20 self-start '>
      <Image
        src="/Vector.png"
        width={40}
        height={38}
        alt='Logo image'
        />
      <nav className={isOpen ? "fixed  duration-300 w-full  bg-Gray/900 z-20 h-screen top-0 right-0":'fixed right-[-100%] duration-300 md:hidden'}>
        <div className='px-8 pt-6'>
          <div className='flex justify-between mb-10 '>
            <Image
              src="/Vector.png"
              width={40}
              height={38}
              alt='Logo image'
            />
            <button onClick={handleMenuClose}>
              <span className={isOpen ? "block w-5 h-0.5 bg-WHITE translate-y-0.5  rotate-45 duration-500":'btn-close'}></span>
              <span className={isOpen ? "block w-5 h-0.5 bg-WHITE rotate-130 duration-500" : 'btn-close'}></span>
            </button>
          </div>

          <ul className='space-y-6  mb-10 font-bold'>
            <li>
              <Link onClick={handleMenuClose} href="#service">
                サービス
              </Link>
            </li>
            <li>
              <Link  href="/company">
                企業情報
              </Link>
            </li>
            <li>
              <Link  href="/recruit">
                採用情報
              </Link>
            </li>
            <li>
              <Link  onClick={handleMenuClose} href="#news">
                お知らせ
              </Link>
            </li>
          </ul>
          <div className='flex flex-col items-start space-y-2 font-bold '>
          <Link href="/contact"> <button className='primary-btn text-sm  rounded-full '>お問い合わせ</button></Link>
          <Link href="/document"> <button className='secondary-btn text-sm '>資料ダウンロード</button></Link>
          </div>
        </div>
      </nav>
      <nav className='hidden md:block'>
        <ul className='flex text-BLACK gap-x-6 items-center font-bold'>
            <li><Link href="#service">サービス</Link></li>
            <li><Link href="/company">企業情報</Link></li>
            <li><Link href="/recruit">採用情報</Link></li>
            <li><Link href="#news">お知らせ</Link></li>
            <Link href="/contact"><button className='primary-btn'>お問い合わせ</button></Link>
            <Link href="/document"><button className='secondary-btn border border-BLACK '>資料ダウンロード</button></Link>
        </ul>
      </nav>
      <button className='md:hidden space-y-1.5' onClick={handleMenuOpen}>
        <span className={isOpen ? "content w-8 h-0.5 bg-gray-600 translate-y-2 rotate-45 duration-500":'btn-close'}></span>
        <span className={isOpen ? "content w-8 h-0.5 bg-gray-600  rotate-130 duration-500" : 'btn-close'}></span>
        <span className={isOpen ? "content translate-y-2 duration-300": 'btn-close !w-4 !ms-auto'}></span>
      </button>
    </div>
    <div className='container mx-auto w-full pl-4 max-w-sm row-span-2 md:mt-0 md:max-w-7xl place-self-start'>
      <div className='space-y-6 '>
        <h1 className='text-2xl font-bold text-BLACK md:text-5xl md:leading-72'>
          テクノロジーを通じて、<br />
          夢や目標を実現できる<br />
          環境を提供します
        </h1>
        <p className='text-BLACK md:text-xl'>
          IT教育、システム開発から<br className='md:hidden' />
          企業を支援する<br />
          テクノロジーカンパニーです。
        </p>
      </div>
      <Link href="#service"><button className='mt-16 primary-btn text-sm  font-bold'>事業内容を見る</button></Link>
    </div>
        </header>
    </>
    )
}

