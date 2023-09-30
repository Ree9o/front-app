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
              <button className='primary-btn text-sm  rounded-full '>お問い合わせ</button>
              <button className='secondary-btn text-sm '>資料ダウンロード</button>
            </div>
          </div>
        </nav>
        <nav className='hidden md:block'>
          <ul className='flex text-BLACK gap-x-6 items-center font-bold'>
              <li><Link href="">サービス</Link></li>
              <li><Link href="">企業情報</Link></li>
              <li><Link href="">採用情報</Link></li>
              <li><Link href="">お知らせ</Link></li>
              <button className='primary-btn'>お問い合わせ</button>
              <button className='secondary-btn border border-BLACK '>資料ダウンロード</button>
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
        <button className='mt-16 primary-btn text-sm  font-bold'>事業内容を見る</button>
      </div>
    </header>

    <main className="mt-20  space-y-20  ">
      <section id="service" className='grid sm:grid-cols-1 px-4  mx-auto max-w-4xl'>
          <div className='flex flex-col gap-10'>
            <div className='container w-fit mx-auto flex flex-col space-y-1 items-center'>
              <h2 className='font-bold text-4xl'>Service</h2>
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
              <div className='mt-10 space-y-2 grid  gap-2 sm:grid-flow-col sm:grid-rows-3  sm:gap-x-16'>
                <Image
                  src="/service/raretech.png"
                  width={480}
                  height={270}
                  alt='raretech'
                  className='rounded-lg sm:row-start-1 sm:row-end-4 col-span-2'
                />
                <h4 className='text-2xl leading-9 gap-y-4 row-start-1  self-center '>
                  ITスクール<br />
                  RareTECH
                </h4>
                <p>希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。</p>
                <button className='primary-btn   sm:row-start-3 row-start-5 '>詳しく見る</button>
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
                <h4 className='text-2xl leading-9 gap-y-4 row-start-1 self-center '>
                  インフラ学習サービス<br />
                  エンベーダー
                </h4>
                <p>日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。</p>
                <button className='primary-btn  sm:row-start-3 row-start-5 h-14'>詳しく見る</button>
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
                <h4 className='text-2xl leading-9 gap-y-4 row-start-1  self-center '>システム・アプリケーション開発</h4>
                <p>要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。</p>
                <button className='primary-btn sm:row-start-3 row-start-5 h-14'>詳しく見る</button>
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
                <h4 className='text-2xl leading-9 gap-y-4 row-start-1'>Web制作</h4>
                <p>会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。</p>
                <button className='primary-btn  sm:row-start-3 row-start-5 h-14'>詳しく見る</button>
              </div>
            </div>
        </div>
      </section>
      <section id="news" className='w-screen bg-Gray/900 px-4 py-20'>
        <div className='container w-fit mx-auto flex flex-col space-y-1 items-center'>
          <h2 className='font-bold text-4xl'>News</h2>
          <span className='font-bold text-primary'>お知らせ</span>
        </div>
        <div className='container  mx-auto grid grid-col-1 xs:max-w-md md:grid-cols-3 md:max-w-7xl gap-6'>
            <div className='mt-10 mx-auto'>
              <Link href="">
              <div className='relative w-fit'>
              <Image
                  src="/news/news-1.png"
                  width={480}
                  height={270}
                  alt='news image'
                  className='rounded-lg sm:row-start-1 sm:row-end-3 md:row-start-1 md:row-end-4 md:order-2 col-span-2'
                />
                <span className='absolute top-4 right-4  z-10 py-1 px-2 bg-BLACK rounded-full text-sm '>その他</span>
              </div>

              <div className='mt-4'>
              <time dateTime='2023-08-17' className='text-sm'>2023.08.17</time>
                <p className='text-xl'>ホームページをリニューアルしました。</p>
              </div>
              </Link>
            </div>
            <div className='mt-10 mx-auto'>
              <Link href="">
              <div className='relative w-fit'>
              <Image
                  src="/news/news-2.png"
                  width={480}
                  height={270}
                  alt='news image'
                  className='rounded-lg sm:row-start-1 sm:row-end-3 md:row-start-1 md:row-end-4 md:order-2 col-span-2'
                />
                <span className='absolute top-4 right-4  z-10 py-1 px-2 bg-badge-purple rounded-full text-sm '>RareTECH</span>
              </div>

              <div className='mt-4 max-w-md'>
              <time dateTime='2023-08-17' className='text-sm'>2023.03.01</time>
                <p className='text-xl'>ITスクールRareTECHより、SES・人材企業様向け研修プランをリリースしました。</p>
              </div>
              </Link>
            </div>
            <div className='mt-10 mx-auto'>
              <Link href="">
              <div className='relative w-fit'>
              <Image
                  src="/news/news-3.png"
                  width={480}
                  height={270}
                  alt='news image'
                  className='rounded-lg sm:row-start-1 sm:row-end-3 md:row-start-1 md:row-end-4 md:order-2 col-span-2'
                />
                <span className='absolute top-4 right-4  z-10 py-1 px-2 bg-badge-aqua rounded-full text-sm '>エンベーダー</span>
              </div>

              <div className='mt-4 max-w-md'>
              <time dateTime='2023-08-17' className='text-sm'>2023.10.05</time>
                <p className='text-xl'>エンベーダーの利用人数が5000名を突破しました。</p>
              </div>
              </Link>
            </div>
            <div className='mt-10 mx-auto'>
              <Link href="">
              <div className='relative w-fit'>
              <Image
                  src="/news/news-4.png"
                  width={480}
                  height={270}
                  alt='news image'
                  className='rounded-lg sm:row-start-1 sm:row-end-3 md:row-start-1 md:row-end-4 md:order-2 col-span-2'
                />
                <span className='absolute top-4 right-4  z-10 py-1 px-2 bg-badge-orange rounded-full text-sm '>システム・アプリケーション開発
                </span>
              </div>

              <div className='mt-4 max-w-md'>
              <time dateTime='2023-08-17' className='text-sm'>2023.09.11</time>
                <p className='text-xl'>システム・アプリケーション開発の受託開発事業を開始しました。</p>
              </div>
              </Link>
            </div>
            <div className='mt-10 mx-auto'>
              <Link href="">
              <div className='relative w-fit'>
              <Image
                  src="/news/news-5.png"
                  width={480}
                  height={270}
                  alt='news image'
                  className='rounded-lg sm:row-start-1 sm:row-end-3 md:row-start-1 md:row-end-4 md:order-2 col-span-2'
                />
                <span className='absolute top-4 right-4  z-10 py-1 px-2 bg-badge-purple rounded-full text-sm '>Web制作</span>
              </div>

              <div className='mt-4 max-w-md'>
              <time dateTime='2023-08-17' className='text-sm'>2023.05.16</time>
                <p className='text-xl'>Web制作の受託開発事業を開始しました。</p>
              </div>
              </Link>
            </div>
            <div className='mt-10 mx-auto'>
              <Link href="">
              <div className='relative w-fit'>
              <Image
                  src="/news/news-6.png"
                  width={480}
                  height={270}
                  alt='news image'
                  className='rounded-lg sm:row-start-1 sm:row-end-3 md:row-start-1 md:row-end-4 md:order-2 col-span-2'
                />
                <span className='absolute top-4 right-4  z-10 py-1 px-2 bg-badge-blue rounded-full text-sm '>RareTECH</span>
              </div>

              <div className='mt-4 max-w-md'>
              <time dateTime='2023-08-17' className='text-sm'>2022.01.30</time>
                <p className='text-xl'>ITスクールRareTECHの受講生が300名を突破しました。</p>
              </div>
              </Link>
            </div>
            <button className='primary-btn mt-16 md:mt-20 md:col-start-2 mx-auto'>一覧を見る</button>
          </div>

      </section>
        <section id="cta" className='bg-cta-sp  bg-cover bg-no-repeat !mt-0 px-4 py-32 space-y-16 md:bg-cta'>
          <p className='font-bold text-xl text-center md:text-xxl'>業界・規模問わず多くの企業様にご利用いただいております。<br />
            まずはお気軽にご相談ください。</p>
          <div className='container grid grid-cols-1 md:grid-cols-2 mx-auto '>
            <div className=' bg-Gray/900 rounded-t-lg  px-6 py-10 md:px-16 md:rounded-t-none md:!rounded-l-lg '>
              <h3 className='relative z-10 font-bold text-2xl mb-6 '>
                お問い合わせ
                <span className="absolute  right-2 -bottom-0.5 z-0 text-4xl font-bold opacity-30">
                CONTACT
                </span>
              </h3>

              <p>IT全般についてのご相談をお受けしております。<br />
                カウンセリング、見積もり作成ともに無料でご対応しますので、お気軽にご相談ください。
              </p>
              <button className='primary-btn mt-10'>お問い合わせ</button>
            </div>
            <div className='bg-Gray/#666 rounded-b-lg px-6 py-10 md:px-16 md:rounded-b-none md:!rounded-r-lg'>
              <h3 className='relative z-10 font-bold text-2xl mb-6'>
                資料ダウンロード
                <span className="absolute  right-2 -bottom-0.5 z-0 text-4xl font-bold opacity-30">
                DOCUMENT
                </span>
              </h3>
              <p>会社案内、法人エンジニア研修に関するPDF資料をご用意しております。<br />
                一覧ページよりお受け取りください。
              </p>
              <button className='secondary-btn mt-10'>資料ダウンロード</button>
            </div>
          </div>
      </section>
    </main>
      <footer className='h-fit px-4 pt-20 pb-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 md:max-w-7xl mx-auto md:gap-x-10 md:h-64 '>
        <div className='space-y-2 mb-10'>
        <Image
          src="/Vector.png"
          width={64}
          height={62.06}
          alt='Logo image'
          />
          <h2 className='text-xl font-bold'>株式支社var</h2>
          <address className='not-italic text-xm'>〒 891-0145 <br />
            鹿児島県鹿児島市錦江台3-21-22
          </address>
          <div className='flex items-center gap-2'>
            <a href="https://twitter.com/RaretechO" className='underline text-Gray/#666'>Twitter</a>
            <a href="https://zenn.dev/var" className='underline text-Gray/#666'>Zenn</a>
          </div>

        </div>
        <div className='space-y-4 md:space-y-0 md:flex md:items-start md:gap-10 md:col-span-2 md:justify-end'>
          <div className='space-y-2'>
          <h3 className='font-bold'>サービス</h3>
          <ul className='space-y-2'>
            <li className='text-Gray/#666 text-xm'>ITスクール RareTECH</li>
            <li className='text-Gray/#666 text-xm'>インフラ学習サービス エンベーダー</li>
            <li className='text-Gray/#666 text-sm'>システム・アプリケーション開発</li>
            <li className='text-Gray/#666 text-xm'>Web制作</li>
          </ul>
          </div>

        <div className='space-y-2'>
          <h3 className='font-bold'>企業情報</h3>
          <ul className='space-y-2'>
            <li className='text-Gray/#666 text-xm'>ミッション</li>
            <li className='text-Gray/#666 text-xm'>ビジョン</li>
            <li className='text-Gray/#666 text-sm'>バリュー</li>
            <li className='text-Gray/#666 text-xm'>役員一覧</li>
            <li className='text-Gray/#666 text-xm'>会社概要</li>
          </ul>
        </div>
        <div className='space-y-2  '>
          <h3 className='font-bold'>採用情報</h3>
          <ul className='space-y-2'>
            <li className='text-Gray/#666 text-xm'>代表メッセージ</li>
            <li className='text-Gray/#666 text-xm'>募集要項</li>
          </ul>
          </div>
        </div>
          <div className='space-y-2 mt-4 md:mt-0'>
        <h3 className='font-bold'>おしらせ</h3>
        <h3 className='font-bold'>サスティナビリティ</h3>
        <h3 className='font-bold'>プライバシーポリシー</h3>
        </div>
        <div className='space-y-2  mt-6 md:mt-0 md:space-y-0 md:space-y-0 md:flex md:items-start md:col-start-3 md:col-span-2 md:gap-2 md:self-end'>
          <button className='primary-btn w-full md:w-60'>お問い合わせ</button>
          <button className='secondary-btn w-full md:w-60'>資料ダウンロード</button>
          </div>
        </div>
        <small className='block text-xs text-Gray/#666 w-fit mx-auto mt-10'>&copy; 2023 var inc.</small>
    </footer>
  </div>
  )
}
