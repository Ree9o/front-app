import NewsList from "./utils/news_list";
import Button from "./utils/button";

export default function News() {
  const NEWS_LIST = [
    {
      title: "ホームページをリニューアルしました",
      image: "/news/news-1.png",
      path: "news/1",
      label: "その他",
      created_at: "2023.08.17",
    },
    {
      title:
        "ITスクールRareTECHより、SES・人材企業様向け研修プランをリリースしました。",
      image: "/news/news-2.png",
      path: "news/2",
      label: "RareTECH",
      created_at: "2023.03.01",
    },
    {
      title: "エンベーダーの利用人数が5000名を突破しました。",
      image: "/news/news-3.png",
      path: "news/3",
      label: "エンベーダー",
      created_at: "2023.10.05",
    },
    {
      title: "システム・アプリケーション開発の受託開発事業を開始しました。",
      image: "/news/news-4.png",
      path: "news/4",
      label: "システム・アプリケーション開発",
      created_at: "2023.09.11",
    },
    {
      title: "Web制作の受託開発事業を開始しました",
      image: "/news/news-5.png",
      path: "news/5",
      label: "Web制作",
      created_at: "2023.05.16",
    },
    {
      title: "ITスクールRareTECHの受講生が300名を突破しました。",
      image: "/news/news-6.png",
      path: "news/6",
      label: "RareTECH",
      created_at: "2022.01.30",
    },
  ];

  return (
    <section id='news' className='w-screen bg-Gray/900 px-4 py-20'>
      <div className='w-fit mx-auto flex flex-col space-y-1 items-center'>
        <h2 className='font-bold text-4xl'>News</h2>
        <span className='font-bold text-primary'>お知らせ</span>
      </div>
      <div className=' mx-auto grid grid-col-1 xs:max-w-md md:grid-cols-3 md:max-w-7xl gap-6'>
        <NewsList list={NEWS_LIST} />
        <div className='md:col-start-2 mx-auto'>
          <Button path='/news' text='一覧を見る' isPrimary={true} />
        </div>
      </div>
    </section>
  );
}
