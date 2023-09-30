import Cta from '@/components/cta';
import Footer from '@/components/footer';
import Header from '@/components/header';
import News from '@/components/news';
import Service from '@/components/service';

export default function Home() {

  return (
  <div>
    <Header />
    <main className="mt-20  space-y-20  ">
      <Service />
      <News />
      <Cta />
    </main>
     <Footer />
  </div>
  )
}
