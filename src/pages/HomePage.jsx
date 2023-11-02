import React from 'react';
import Navbar from '../components/Navbar';
import BgMining1 from '../assets/bg-mining-1.jpg';
import BgMining2 from '../assets/bg-mining-2.jpg';

const { useState } = React;

const HomePage = () => {
  const [currentBg, setCurrentBg] = useState(BgMining1);
  const [moreThan100px, setMoreThan100px] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  
  function handleScroll() {
    var _scrollTop = window.scrollY || window.pageYOffset;
    if (_scrollTop >= 100) {
      setMoreThan100px(true);
      if (_scrollTop >= 450) {
        setCurrentBg(BgMining2);
      } else {
        setCurrentBg(BgMining1);
      }
    } else {
      setMoreThan100px(false);
      setCurrentBg(BgMining1);
    }
    setScrollTop(_scrollTop)
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <Navbar moreThan100px={moreThan100px} />
      <main
        className='transition-all ease duration-300'
        style={{
            backgroundImage: `url(${currentBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
      >
        <section className={`md:px-20 min-h-screen flex items-center ${scrollTop >= 300 ? 'bg-black bg-opacity-50' : 'bg-opacity-100'}`}>
          <div>
            <div className="w-1/2">
              <h2 className="text-3xl font-bold text-slate-100">Kami Membangun Keberlanjutan dengan Tambang yang Bertanggung Jawab</h2>
              <a href='#' className='mt-4 inline-block'>
                <button className='py-3 px-6 border border-sky-500 bg-sky-500 text-white hover:bg-opacity-0 hover:text-sky-500 transition-all ease duration-300'>Selengkapnya</button>
              </a>
            </div>
          </div>
        </section>
        <section className={`md:px-20 py-10 min-h-screen bg-black ${scrollTop >= 300 ? 'bg-opacity-50' : 'bg-opacity-100'} _backdrop-blur-sm transition-all ease duration-500 grid place-items-center`}>
          <div>
            <div className='text-center'>
              <h3 className='text-white text-3xl font-semibold mb-5'>PT. Tambangin</h3>
              <p className='text-white text-lg w-3/4 mx-auto'>Dalam upaya kami untuk mempromosikan keberlanjutan dalam industri pertambangan, kami berkomitmen untuk menjadikan lingkungan dan masyarakat sebagai prioritas utama. Kami percaya bahwa pertambangan yang bertanggung jawab tidak hanya berkaitan dengan hasil produksi, tetapi juga dengan dampak sosial, lingkungan, dan ekonomi yang kami timbulkan.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
};

export default React.memo(HomePage);