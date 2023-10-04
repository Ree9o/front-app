import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const handleMenuOpen = () => setOpen(!isOpen);
  const handleMenuClose = () => setOpen(false);

  return (
    <div className='z-0 mx-auto bg-WHITE w-full max-w-sm h-16  rounded-md flex justify-between px-10 items-center md:max-w-7xl md:h-20 self-start '>
      <Image src='/Vector.png' width={40} height={38} alt='Logo image' />
      <nav
        className={
          isOpen
            ? "fixed  duration-300 w-full  bg-Gray/900 z-20 h-screen top-0 right-0"
            : "fixed right-[-100%] duration-300"
        }
      >
        <div className='px-8 pt-6'>
          <div className='flex justify-between mb-10 '>
            <Image src='/Vector.png' width={40} height={38} alt='Logo image' />
            <button onClick={handleMenuClose}>
              <span
                className={
                  isOpen
                    ? "block w-5 h-0.5 bg-WHITE translate-y-0.5  rotate-45 duration-500"
                    : "btn-close"
                }
              ></span>
              <span
                className={
                  isOpen
                    ? "block w-5 h-0.5 bg-WHITE rotate-130 duration-500"
                    : "btn-close"
                }
              ></span>
            </button>
          </div>

          <ul className='space-y-6  mb-10 font-bold'>
            <li>
              <Link onClick={handleMenuClose} href='#service'>
                サービス
              </Link>
            </li>
            <li>
              <Link href='/company'>企業情報</Link>
            </li>
            <li>
              <Link href='/recruit'>採用情報</Link>
            </li>
            <li>
              <Link onClick={handleMenuClose} href='#news'>
                お知らせ
              </Link>
            </li>
          </ul>
          <div className='flex flex-col items-start space-y-2 font-bold '>
            <Button path='/contact' text='お問い合わせ' isPrimary={true} />
            <Button
              path='/document'
              text='資料ダウンロード'
              isPrimary={false}
              className='border border-BLACK'
            />
          </div>
        </div>
      </nav>
      <nav className='hidden lg:block '>
        <ul className='flex text-BLACK gap-x-6 items-center font-bold'>
          <li>
            <Link href='#service'>サービス</Link>
          </li>
          <li>
            <Link href='/company'>企業情報</Link>
          </li>
          <li>
            <Link href='/recruit'>採用情報</Link>
          </li>
          <li>
            <Link href='#news'>お知らせ</Link>
          </li>
          <Button path='/contact' text='お問い合わせ' isPrimary={true} />
          <Button
            path='/document'
            text='資料ダウンロード'
            isPrimary={false}
            className='border border-BLACK'
          />
        </ul>
      </nav>
      <button className='lg:hidden space-y-1.5' onClick={handleMenuOpen}>
        <span
          className={
            isOpen
              ? "content w-8 h-0.5 bg-gray-600 translate-y-2 rotate-45 duration-500"
              : "btn-close"
          }
        ></span>
        <span
          className={
            isOpen
              ? "content w-8 h-0.5 bg-gray-600  rotate-130 duration-500"
              : "btn-close"
          }
        ></span>
        <span
          className={
            isOpen
              ? "content translate-y-2 duration-300"
              : "btn-close !w-4 !ms-auto"
          }
        ></span>
      </button>
    </div>
  );
}
