import Image from 'next/image'
import Link from 'next/link'

export default function News() {
  return (
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
  )
}
