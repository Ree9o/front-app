import ServiceTitle from "./utils/service_title";
import ServiceList from "./utils/service_list";

export default function Service() {
  const EDUCATION = [
    {
      title: "ITスクール RareTECH",
      description:
        "希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。",
      path: "/service/Raretech",
      image: "/service/Raretech.png",
    },
    {
      title: "インフラ学習サービス エンベーダー",
      description:
        "日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。",
      path: "/service/Envader",
      image: "/service/Envader.png",
    },
  ];
  const DEVEROPMENT = [
    {
      title: "システム・アプリケーション開発",
      description:
        "要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。",
      path: "/service/ApplicationDev",
      image: "/service/dev-1.png",
    },
    {
      title: "Web制作",
      description:
        "会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。",
      path: "/service/WebProduction",
      image: "/service/dev-2.png",
    },
  ];
  return (
    <section
      id='service'
      className='grid sm:grid-cols-1 px-4  mx-auto max-w-4xl'
    >
      <div className='flex flex-col gap-10'>
        <div className='w-fit mx-auto flex flex-col space-y-1 items-center'>
          <h2 className='font-bold text-4xl'>Service</h2>
          <span className='font-bold text-primary'>事業内容</span>
        </div>
        <p className='text-center'>
          ITエンジニア教育事業・受託開発事業をはじめとし、テクノロジーを活用した各種サービスを提供しております。
        </p>
      </div>
      <div className='grid grid-cols-1'>
        <div className='mt-16 w-full '>
          <ServiceTitle main='Education' sub='ITエンジニア教育事業' />
          <ServiceList services={EDUCATION} />
        </div>
        <div className='mt-16 w-full '>
          <ServiceTitle main='Development' sub='受託開発事業' />
          <ServiceList services={DEVEROPMENT} />
        </div>
      </div>
    </section>
  );
}
