"use client";

import Button from "./utils/button";
import Nav from "./utils/nav";

export default function Header() {
  return (
    <>
      <header className='px-4 bg-hero-sp bg-cover bg-no-repeat pt-3 h-screen grid  grid-row-3 place-items-center lg:bg-hero'>
        <Nav />
        <div className='mx-auto w-full pl-4 max-w-sm row-span-2 md:mt-0 md:max-w-7xl place-self-start'>
          <div className='space-y-6 mb-16 '>
            <h1 className='text-2xl font-bold text-BLACK md:text-5xl md:leading-72'>
              テクノロジーを通じて、
              <br />
              夢や目標を実現できる
              <br />
              環境を提供します
            </h1>
            <p className='text-BLACK md:text-xl'>
              IT教育、システム開発から
              <br className='md:hidden' />
              企業を支援する
              <br />
              テクノロジーカンパニーです。
            </p>
          </div>
          <Button path='#service' text='事業内容を見る' isPrimary={true} />
        </div>
      </header>
    </>
  );
}
