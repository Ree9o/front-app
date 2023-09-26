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
        <nav className='hidden md:block'>
            <ul className='flex text-BLACK gap-x-6 items-center font-bold'>
              <li><Link href="">サービス</Link></li>
              <li><Link href="">企業情報</Link></li>
              <li><Link href="">採用情報</Link></li>
              <li><Link href="">お知らせ</Link></li>
              <button className='primary-btn py-3 px-8'>お問い合わせ</button>
              <button className='py-3 px-6 border border-BLACK rounded-full'>資料ダウンロード</button>
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
            <button className='mt-16 primary-btn text-sm py-4 px-8 w-60 font-bold'>
              事業内容を見る
              </button>
          </div>

      </header>

      <main className="container mx-auto mt-20 px-4  ">

        <section id="service" className='h-screen grid sm:grid-cols-1  mx-auto max-w-4xl'>
          <div className='flex flex-col gap-10'>
            <div className='container w-fit mx-auto flex flex-col space-y-1 items-center'>
              <h2 className='font-bold text-5xl'>Service</h2>
              <span className='font-bold text-primary'>事業内容</span>
            </div>
          <p className='text-center'>ITエンジニア教育事業・受託開発事業をはじめとし、テクノロジーを活用した各種サービスを提供しております。</p>
          </div>
          <div className='grid grid-cols-1'>

          <div className='mt-16 w-full '>
            <div className='flex  gap-4'>
              <span className='content w-2 h-16 bg-primary'></span>
              <div className='flex flex-col justify-between'>
                <h3 className='text-3xl'>Education</h3>
                <span className='text-sm'>ITエンジニア教育事業</span>
              </div>
            </div>
              <div className='mt-10 space-y-2 grid  gap-2 sm:grid-flow-col sm:grid-rows-3  sm:gap-x-16  '>
                <Image
                src="/service/raretech.png"
                width={480}
                height={270}
                alt='raretech'
                className='rounded-lg sm:row-start-1 sm:row-end-4 col-span-2'
                />
              <h4 className='text-2xl leading-9 gap-y-4 row-start-1  self-center '>ITスクール<br />
                    RareTECH
              </h4>
              <p>
                希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。
                </p>
                <button className='primary-btn  px-8 py-4 w-60 sm:row-start-3 row-start-5 h-14'>詳しく見る</button>
              </div>
            </div>

            <div className='w-full '>
              <div className='mt-10 space-y-2 grid  gap-2 sm:grid-flow-col sm:grid-rows-3  sm:gap-x-16  '>
                <Image
                src="/service/envader.png"
                width={480}
                height={270}
                alt='raretech'
                className='rounded-lg  sm:row-start-1 sm:row-end-3 md:row-start-1 md:row-end-4 md:order-2 col-span-2'
                />
              <h4 className='text-2xl leading-9 gap-y-4 row-start-1 self-center '>インフラ学習サービス<br />
                    エンベーダー
              </h4>

              <p>
                  日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。
                </p>
                <button className='primary-btn px-8 py-4 w-60 sm:row-start-3 row-start-5 h-14'>詳しく見る</button>
              </div>
            </div>

            <div className='mt-16 w-full '>
            <div className='flex  gap-4'>
              <span className='content w-2 h-16 bg-primary'></span>
              <div className='flex flex-col justify-between'>
                <h3 className='text-3xl'>Development</h3>
                <span className='text-sm'>受託開発事業</span>
              </div>
            </div>
              <div className='mt-10 space-y-2 grid  gap-2 sm:grid-flow-col sm:grid-rows-3  sm:gap-x-16  '>
                <Image
                src="/service/dev-1.png"
                width={480}
                height={270}
                alt='dev-1'
                className='rounded-lg sm:row-start-1 sm:row-end-4 col-span-2'
                />
              <h4 className='text-2xl leading-9 gap-y-4 row-start-1  self-center '>システム・アプリケーション開発
              </h4>
              <p>
               要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。
                </p>
                <button className='primary-btn px-8 py-4 w-60 sm:row-start-3 row-start-5 h-14'>詳しく見る</button>
              </div>
            </div>

            <div className='w-full '>
              <div className='mt-10 space-y-2 grid  gap-2 sm:grid-flow-col sm:grid-rows-3  sm:gap-x-16  '>
                <Image
                src="/service/dev-2.png"
                width={480}
                height={270}
                alt='dev-2'
                className='rounded-lg  sm:row-start-1 sm:row-end-4 col-span-2 md:order-2'
                />
              <h4 className='text-2xl leading-9 gap-y-4 row-start-1'>Web制作
              </h4>
              <p>
                  会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。
                </p>
                <button className='primary-btn  px-8 py-4 w-60 sm:row-start-3 row-start-5 h-14'>詳しく見る</button>
              </div>
            </div>

        </div>


        </section>
        <section id="news"></section>
        <section id="cta"></section>
      </main>
        <footer></footer>
  </div>
  )
}
