import { ChevronRight } from 'lucide-react';
import pic from '../../public/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg';
import svg1 from '../assets/backgrounds/ctaMobileWaveLines.svg';
import svg2 from '../assets/backgrounds/WaveLinesDesktop1.svg';
import svg3 from '../assets/backgrounds/WaveLinesDesktop2.svg';
import svg4 from '../assets/backgrounds/WaveLinesDesktop3.svg';
import svg5 from '../assets/backgrounds/WaveLinesDesktop4.svg';
const Banner = () => {
  return (
    <section
      id="banner-bg"
      className="lg:h-[778px] bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)] h-auto relative w-full text-white overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]"
    >
      <div className="pl-[10%] pt-[10%] space-y-10">
        <h1 className=" leading-[120%] text-[90px] font-bold font-Montserrat text-white">
          Embrace the <br /> future of finance
        </h1>
        <p className="max-w-2xl leading-[150%] text-xl font-semibold text-white">
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation
        </p>
        <button className="bg-[#fe8b53] flex items-center gap-1.5 px-6 py-4 font-bold text-lg rounded-md text-white">
          Reach Out To Us
          <ChevronRight />
        </button>
      </div>
      <div>
        <img
          id="banner-img"
          src={pic}
          alt="Banner"
          className="block absolute w-[65%] right-0 left-[35%] top-0 h-full"
        />
      </div>
      <div>
        <img
          src={svg1}
          className="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-70 z-10"
          alt="SVG 1"
        />
        <img
          src={svg2}
          className="absolute top-10 left-20 w-3/4 h-3/4 mix-blend-lighten opacity-60 z-20"
          alt="SVG 2"
        />
        <img
          src={svg3}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 mix-blend-soft-light opacity-50 z-10"
          alt="SVG 3"
        />
        <img
          src={svg4}
          className="absolute bottom-20 left-10 w-3/4 h-3/4 mix-blend-color-dodge opacity-80 z-20"
          alt="SVG 4"
        />
        <img
          src={svg5}
          className="absolute top-1/3 left-1/3 w-2/3 h-2/3 mix-blend-screen opacity-65 z-10"
          alt="SVG 5"
        />
      </div>
    </section>
  );
};

export default Banner;
