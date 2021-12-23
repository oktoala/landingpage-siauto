import UnmulIcon from './icons/unmul.svg';
import Button from './components/Button';
import HeroIcon from './icons/heroimg.svg';
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
          <div className="mx-3 text-xl font-bold text-bookmark-blue">SIAUTO</div>
        </a>
        <ul className="hidden sm:flex flex-1 justify-end 
        items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li className="cursor-pointer">
            <a href="#features">
              Features
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#install">
              How to Install
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
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Untuk Kalian Yang Malas Isi Kuesioner
          </h1>
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            Isi kuesioner kalian secara otomatis
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <Button>Download</Button>
          </div>
        </div>
        <HeroImage src={HeroIcon} />
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
          Cuman aplikasi coba
        </p>
      </div>
      <FeatureSection dir="left" shape={<RoundedShapeLeft />} class="lg:mt-24">

      </FeatureSection>
      <FeatureSection dir="right" shape={<RoundedShapeRight />} class="lg:mt-56" >

      </FeatureSection>
      <FeatureSection dir="left" shape={<RoundedShapeLeft />} class="lg:mt-56" />
      <FeatureSection dir="right" shape={<RoundedShapeRight />} class="lg:mt-56" />
    </section>
  );
}

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
          <p className="text-center text-bookmark-grey mt-4">
            Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
          </p>
        </div>
        <div className="flex flex-col mt-12 mx-auto">
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What is a Bookmark?</span>
            <i className="text-bookmark-purple fas fa-chevron-down"></i>
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">How can I request a new browser?</span>
            <i className="text-bookmark-purple fas fa-chevron-down"></i>
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">Is there a mobile app?</span>
            <i className="text-bookmark-purple fas fa-chevron-down"></i>
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What about other Chromium browsers?</span>
            <i className="text-bookmark-purple fas fa-chevron-down"></i>
          </div>
          <button type="button" className="mt-12 flex self-center btn btn-purple hover:bg-bookmark-white hover:text-black">
            More Info
          </button>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-bookmark-blue py-16">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <div className="text-white uppercase">
            &#169; All right reserved
          </div>
        </div>
        <ul className="flex gap-10 mt-12 md:mt-0">
          <li><i className="text-white text-2xl fab fa-github"></i></li>
          <li><i className="text-white text-2xl fab fa-instagram"></i></li>
        </ul>
      </div>
    </footer>
  )
}
export default App;
