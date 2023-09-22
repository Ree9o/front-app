"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const handleMenuOpen = () => {
    setOpen(!isOpen)
  }
  const handleMenuClose = () => {
    setOpen(false)
  }
  return (

  <div>
      <header className="container px-4 bg-hero-sp  bg-cover bg-no-repeat pt-3 h-screen ">
        <div className='z-0 mx-auto bg-WHITE w-full max-w-sm h-16  rounded-md flex justify-between px-4 items-center '>
          <Image
            src="/Vector.png"
            width={40}
              height={38}
              alt='Logo image'
           />
        <nav className={isOpen ? "fixed  duration-300 w-full  bg-Gray/900 z-20 h-screen top-0 right-0":'fixed right-[-100%] duration-300'}>
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
                <Link onClick={handleMenuClose} href="/service">
                  サービス
                </Link>
              </li>
                <li>
                <Link onClick={handleMenuClose}  href="/">
                  企業情報
                </Link>
              </li>

             <li>
                <Link  onClick={handleMenuClose} href="/">
                  採用情報
                </Link>
              </li>

             <li>
                <Link  onClick={handleMenuClose} href="/">
                  お知らせ
                </Link>
              </li>
            </ul>
            <div className='flex flex-col items-start space-y-2 font-bold '>
              <button className='primary-btn text-sm px-6 py-3 rounded-full w-60'>お問い合わせ</button>
              <button className='secondary-btn text-sm px-6 py-3 w-60'>資料ダウンロード</button>
            </div>
          </div>
        </nav>
          <button className='md:hidden space-y-1.5' onClick={handleMenuOpen}>
          <span className={isOpen ? "content w-8 h-0.5 bg-gray-600 translate-y-2 rotate-45 duration-500":'btn-close'}></span>
          <span className={isOpen ? "content w-8 h-0.5 bg-gray-600  rotate-130 duration-500" : 'btn-close'}></span>
          <span className={isOpen ? "content translate-y-2 duration-300": 'btn-close !w-4 !ms-auto'}></span>
          </button>
      </div>
      <div className='mt-20 container mx-auto w-full pl-4 max-w-sm '>
          <div className="">
            <div className='space-y-6 '>
              <h1 className='text-2xl font-bold text-BLACK'>
                テクノロジーを通じて、<br />
                夢や目標を実現できる<br />
                環境を提供します
              </h1>
              <p className='text-BLACK'>
                IT教育、システム開発から<br />
                企業を支援する<br />
                テクノロジーカンパニーです。
              </p>
            </div>
            <button className='mt-16 primary-btn text-sm py-4 px-8 w-60 font-bold'>
              事業内容を見る
              </button>
          </div>
        </div>
        </header>
 <main className="container mx-auto mt-12  ">
      <section id="service"></section>
      <section id="news"></section>
      <section id="cta"></section>
    </main>
        <footer></footer>
  </div>
  )
}
