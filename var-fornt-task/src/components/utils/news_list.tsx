import Link from "next/link";
import Image from "next/image";

type NewsListProps = {
  title: string;
  image: string;
  path: string;
  label: string;
  created_at: string;
};

type Props = {
  list: NewsListProps[];
};
type Color =
  | "bg-badge-blue"
  | "bg-badge-black"
  | "bg-badge-aqua"
  | "bg-badge-orange"
  | "bg-badge-purple";

type ColorMap = { [label: string]: Color };

export default function NewsList({ list }: Props) {
  const colors: ColorMap = {
    RareTECH: "bg-badge-blue",
    その他: "bg-badge-black",
    エンベーダー: "bg-badge-aqua",
    "システム・アプリケーション開発": "bg-badge-orange",
    Web制作: "bg-badge-purple",
  };

  return (
    <>
      {list.map((news, index) => {
        return (
          <div key={index} className='mt-10 mx-auto max-w-sm '>
            <Link href={news.path}>
              <div className='relative w-fit'>
                <Image
                  src={news.image}
                  width={480}
                  height={270}
                  alt='news image'
                  className='rounded-lg sm:row-start-1 sm:row-end-3 md:row-start-1 md:row-end-4 md:order-2 col-span-2 '
                />
                <span
                  className={`absolute top-4 right-4  z-10 py-1 px-2  rounded-full text-sm ${
                    colors[news.label]
                  } `}
                >
                  {news.label}
                </span>
              </div>

              <div className='mt-4 w-fit '>
                <time dateTime='2023-08-17' className='text-sm'>
                  {news.created_at}
                </time>
                <p className='text-xl'>{news.title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
