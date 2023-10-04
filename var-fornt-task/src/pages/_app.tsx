import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter,Noto_Sans_Javanese} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const noto_sans_japanese = Noto_Sans_Javanese({subsets:['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily},${noto_sans_japanese.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
