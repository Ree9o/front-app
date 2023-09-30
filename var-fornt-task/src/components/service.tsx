import Image from 'next/image'

export default function Service() {
  return (
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
  )
}
