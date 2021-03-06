import { useState, useEffect } from 'react';
import UnmulIcon from './icons/logo.svg';
import ImageLaptop from './icons/hero.png';
import ImgFitur1 from './icons/fitur1.png';
import ImgFitur2 from './icons/fitur2.png';
import Button from './components/Button';
import HeroImage from './components/HeroImage';
import FeatureSection from './components/FeatureSection';
import RoundedShape, { RoundedShapeLeft, RoundedShapeRight } from './components/RoundedShape';
import axios from 'axios';

const App = () => {
  return (
    <div className="font-Poppins ">
      <Header />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
}

const Header = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    let i = 0;
    axios.get('https://api.github.com/repos/oktoala/siauto-desktop/releases')
      .then((response) => {
        response.data.forEach(e => {
          e.assets.forEach(ee => {
            i += ee.download_count;
            console.log(`i = ${i}`);
            setData(i);
          });
        });
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <header className="sticky z-20 top-0 bg-white">
      <nav className="container  flex items-center py-4 mt-4 sm:mt-12">
        <a href="/" className="py-1 flex items-center">
          <img src={UnmulIcon} alt="Gambar" />
          <div title={`Download: ${data}`} className="mx-3 text-xl font-bold text-bookmark-blue">SIAuto</div>
        </a>
        <ul className="hidden sm:flex flex-1 justify-end 
        items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li className="cursor-pointer">
            <a href="#download">
              Download
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#features">
              Features
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#faq">
              Faq
            </a>
          </li>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <i className="text-2xl fas fa-bars"></i>
        </div>
      </nav>
    </header>
  )
}

const Hero = () => {
  return (
    <section id="download" className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Untuk Kalian Yang Malas Isi Kuesioner
          </h1>
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            Isi kuesioner KHS sia.unmul.ac.id kalian secara otomatis
          </p>
          <div className="w-full grid gap-2 grid-cols-2 items-center justify-center">
            <a title="Download Untuk Windows" href="https://github.com/oktoala/siauto-desktop/releases/download/v0.3.0/SIAutoDesktop.0.3.0.exe" >
              <Button>Download Untuk <i className="px-1 fab fa-windows"></i> </Button>
            </a>
            <a title="Download Untuk Linux" href="https://github.com/oktoala/siauto-desktop/releases/download/v0.3.0/SIAutoDesktop-0.3.0.AppImage">
              <Button>Download Untuk <i className="px-1 fab fa-linux"></i></Button>
            </a>
            <a title="Download Untuk Mac M1" href="https://github.com/oktoala/siauto-desktop/releases/download/v0.3.0/SIAutoDesktop-0.3.0.dmg" >
              <Button>Download Untuk <i className="px-1 fab fa-apple"></i> M1</Button>
            </a>
          </div>
          {!navigator.userAgent.indexOf("Chrome") &&
            <p className="text-bookmark-grey">
              *Install Chromium-Based Browser
            </p>
          }
        </div>
        <HeroImage src={ImageLaptop} />
        <RoundedShape />
      </div>
    </section>
  )
}

const Feature = () => {
  return (
    <section id="features" className="bg-bookmark-white py-20 mt-20 lg:mt-60">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h2 className="text-3xl text-center text-bookmark-blue">Features</h2>
        <p className="text-center text-bookmark-grey">
          Aplikasi ini menyediakan beberapa fitur yang akan membantu hidup anda
        </p>
      </div>
      <FeatureSection icon={ImgFitur1} dir="left" nameFeature="Simple To Use" shape={<RoundedShapeLeft />} class="lg:mt-24">
        Cukup isi NIM dan Password dan kuesioner KHS kalian auto terisi.
      </FeatureSection>
      <FeatureSection icon={ImgFitur2} dir="right" nameFeature="Packed With Features" shape={<RoundedShapeRight />} class="lg:mt-56" >
        Dilengkapi preferensi untuk kalian yang gak terlalu mageran.
      </FeatureSection>

    </section>
  );
}

const accordionItem = [
  {
    'header': 'Gimana isi nilainya kuesionernya?',
    'content': 'Secara default aplikasi akan mengisi random antara angka 3, 4, atau 5. Jika kalian hanya mencentang 3 dan 5 di preferensi, maka aplikasi hanya akan mengisi nilai random antara 3 atau 5.'
  },
  {
    'header': 'Apakah SIAuto menyimpan password?',
    'content': 'Tidak. Karena aplikasinya portable (tidak perlu diinstall) jadi tidak akan ada data yang tersimpan.'
  },
  {
    'header': 'Apakah SIAuto bisa mengisi saran?',
    'content': 'Tidak. Karena kuesioner akan diisi secara random, saran yang diberikan tidak akan tepat sasaran. Default saran yang diberikan adalah emoji ??????'
  },
  {
    'header': 'Bagaimana fitur dosen favorit berkerja?',
    'content': 'Selama nama yang diketikkan terdapat di dalam nama dosennya, maka dosen tersebut akan diisi kuesionernya. Misal Astriana dan user mengetikkan "Ast", maka akan bernilai true.'
  },
  {
    'header': 'Untuk apa ada fitur browser?',
    'content': 'Itu hanya untuk memastikan jika di PC/Laptop kalian terdapat browser yang dibutuhkan. Karena program sebenarnya hanya menjalankan browser di latar belakang. Jika browser tidak ditemukan, install salah satu dari 3 browser, yaitu Google Chrome, Microsoft Edge, atau Brave Browser'
  },
  {
    'header': 'Kuesioner Tidak Terisi?',
    'content': 'Bisa jadi jaringan kalian bermasalah atau SIA nya lagi error.'
  }
]

const FAQ = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
          <p className="text-center text-bookmark-grey mt-4">
            Ini adalah pertanyaan yang sering ditanyakan orang
          </p>
        </div>
        <div className="flex flex-col mt-12 mx-auto">
          {accordionItem.map((item, i) => {
            return (
              <div className={`transition hover:bg-bookmark-white ${selected === i ? 'bg-bookmark-white' : ''} py-1 my-2 `}>
                <div onClick={() => toggle(i)} className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                  <i className={selected === i ? 'fa fa-minus' : 'fa fa-plus'}></i>
                  <h3 className={selected === i ? 'font-bold' : ''}>{item.header}</h3>
                </div>
                <div className={`accordion-content px-5 pt-0 overflow-hidden ${selected === i ? 'max-h-full' : 'max-h-0'}`}>
                  <p className="leading-6 font-light pl-9 text-justify">
                    {item.content}
                  </p>
                  <button className="hidden rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
                </div>
              </div>
            );
          })}
          <button type="button" className="hidden mt-12 self-center btn btn-purple hover:bg-bookmark-white hover:text-black">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className="bg-bookmark-blue py-16">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <div className="text-white ">
            &#169; All Rights Reserved
          </div>
        </div>
        <ul className="flex gap-10 mt-12 md:mt-0">
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/oktoala/siauto-desktop">
              <i className="text-white text-2xl fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="text-white text-2xl fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default App;
