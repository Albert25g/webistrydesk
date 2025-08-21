import Header from '@/components/zerofour/Header';
import Hero from '@/components/zerofour/Hero';
import Feature1 from '@/components/zerofour/Feature1';
import Footer from '@/components/zerofour/Footer';

export default function Page(){
  return (
    <>
      <Header />
  <Hero />
  <Feature1 />
  <main className="min-h-[40vh]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="sr-only">Zerofour template preview</h1>
          <div className="border rounded overflow-hidden">
            <iframe src="/zerofour/index.html" title="Zerofour preview" className="w-full h-[64vh]" style={{border:'none'}} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
