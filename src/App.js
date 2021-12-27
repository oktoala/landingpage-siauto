import { useState } from 'react';
import UnmulIcon from './icons/logo.svg';
import ImageLaptop from './icons/imageLaptop.svg';
import Button from './components/Button';
import './App.css';
import HeroImage from './components/HeroImage';
import FeatureSection from './components/FeatureSection';
import RoundedShape, { RoundedShapeLeft, RoundedShapeRight } from './components/RoundedShape';

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
  return (
    <header className="sticky z-20 top-0 bg-white">
      <nav className="container  flex items-center py-4 mt-4 sm:mt-12">
        <a href="/" className="py-1 flex items-center">
          <img src={UnmulIcon} alt="Gambar" />
          <div className="mx-3 text-xl font-bold text-bookmark-blue">SIAuto</div>
        </a>
        <ul className="hidden sm:flex flex-1 justify-end 
        items-center gap-12 text-bookmark-blue uppercase text-xs">
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
            Isi kuesioner kalian secara otomatis
          </p>
          <div className="flex justify-center items-center flex-wrap gap-6">
            <a href="https://github.com/oktoala/siauto-desktop/releases/download/v0.2.0/SIAutoDesktop.0.2.0.exe" >
              <Button>Download untuk <i className="px-1 fab fa-windows"></i> </Button>
            </a>
            <a href="https://github.com/oktoala/siauto-desktop/releases/download/v0.2.0/SIAutoDesktop-0.2.0.AppImage" >
              <Button>Download untuk <i className="px-1 fab fa-linux"></i></Button>
            </a>
            <p className="text-bookmark-grey">
              {navigator.userAgent.indexOf("Chrome") !== -1 ? "" : "*Install Chromium-Based Browser"}
            </p>
          </div>
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
      <FeatureSection dir="left" nameFeature="Pilih Nilai Kalian" shape={<RoundedShapeLeft />} class="lg:mt-24">

      </FeatureSection>
      <FeatureSection dir="right" nameFeature="Pilih Semester Kalian" shape={<RoundedShapeRight />} class="lg:mt-56" >

      </FeatureSection>
      <FeatureSection dir="left" nameFeature="Coba Aja Dulu" shape={<RoundedShapeLeft />} class="lg:mt-56" />
      <FeatureSection dir="right" shape={<RoundedShapeRight />} class="lg:mt-56" />
    </section>
  );
}

const accordionItem = [
  {
    'header': 'Apakah SIAuto menyimpan password?',
    'content': 'Tidak, karena aplikasinya portable (tidak perlu diinstall) jadi tidak akan ada data yang tersimpan.'
  },
  {
    'header': 'Aplikasi gagal untuk mengisi kuesioner terus menerus',
    'content': 'Untuk Pengguna Windows, pastikan kalian sudah menginstall Google Chrome atau Microsoft Edge dan untuk pengguna Linux, install Google Chrome atau Brave Browser'
  },
  {
    'header': '',
    'content': 'hehehheh'
  },
  {
    'header': 'Haha',
    'content': 'hehehheh'
  },
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
          <div className="text-white uppercase">
            &#169; SIAuto
          </div>
        </div>
        <ul className="flex gap-10 mt-12 md:mt-0">
          <li>
            <a href="https://github.com/oktoala/siauto-desktop">
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
