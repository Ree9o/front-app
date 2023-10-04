import Button from "./utils/button";
export default function Cta() {
  return (
    <section
      id='cta'
      className='bg-cta-sp  bg-cover bg-no-repeat !mt-0 px-4 py-32 space-y-16 md:bg-cta'
    >
      <p className='font-bold text-xl text-center md:text-xxl'>
        業界・規模問わず多くの企業様にご利用いただいております。
        <br />
        まずはお気軽にご相談ください。
      </p>
      <div className='container grid grid-cols-1 md:grid-cols-2 mx-auto '>
        <div className=' bg-Gray/900 rounded-t-lg  px-6 py-10 md:px-16 md:rounded-t-none md:!rounded-l-lg '>
          <div className='mb-10'>
            <h3 className='relative z-10 font-bold text-2xl mb-6 '>
              お問い合わせ
              <span className='absolute  right-2 -bottom-0.5 z-0 text-4xl font-bold opacity-30'>
                CONTACT
              </span>
            </h3>

            <p>
              IT全般についてのご相談をお受けしております。
              <br />
              カウンセリング、見積もり作成ともに無料でご対応しますので、お気軽にご相談ください。
            </p>
          </div>
          <Button path='/contact' text='お問い合わせ' isPrimary={true} />
        </div>
        <div className='bg-Gray/#666 rounded-b-lg px-6 py-10 md:px-16 md:rounded-b-none md:!rounded-r-lg'>
          <div className='mb-10'>
            <h3 className='relative z-10 font-bold text-2xl mb-6'>
              資料ダウンロード
              <span className='absolute  right-2 -bottom-0.5 z-0 text-4xl font-bold opacity-30'>
                DOCUMENT
              </span>
            </h3>
            <p>
              会社案内、法人エンジニア研修に関するPDF資料をご用意しております。
              <br />
              一覧ページよりお受け取りください。
            </p>
          </div>
          <Button path='/document' text='資料ダウンロード' isPrimary={false} />
        </div>
      </div>
    </section>
  );
}
