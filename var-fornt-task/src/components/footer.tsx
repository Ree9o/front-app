import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
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
  )
}
