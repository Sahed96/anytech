import { ChevronRight } from 'lucide-react';
import pic from '../../public/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg';
import svg1 from '../assets/backgrounds/ctaMobileWaveLines.svg';
import svg2 from '../assets/backgrounds/WaveLinesDesktop1.svg';
import svg3 from '../assets/backgrounds/WaveLinesMobile1.svg';
import svg4 from '../assets/backgrounds/WaveLinesMobile2.svg';
import svg5 from '../assets/backgrounds/WaveLinesDesktop2.svg';
import svg6 from '../assets/backgrounds/WaveLinesDesktop3.svg';
import svg7 from '../assets/backgrounds/WaveLinesDesktop4.svg';

const Banner = () => {
  return (
    <section
      id="banner-bg"
      className="lg:h-[778px] bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)] h-auto relative w-full text-white overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]"
    >
      {/* Text Content */}
      <div className="pl-[10%] pt-[10%] space-y-10 relative z-30">
        <h1 className="leading-[120%] text-[90px] font-bold font-Montserrat text-white">
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

      {/* Background Image */}
      <div>
        <img
          id="banner-img"
          src={pic}
          alt="Banner"
          className="block absolute w-[65%] right-0 left-[35%] top-0 h-full mix-blend-normal z-20"
        />
      </div>

      {/* SVG Overlays with Blending */}
      <div>
        <img
          src={svg1}
          alt="WaveLines"
          className="block absolute w-[85%] right-0 left-0 top-0 h-full mix-blend-multiply z-20"
        />
        <img
          src={svg2}
          alt="WaveLines"
          className="block absolute w-[55%] right-0 bottom-[35%] left-0 top-0 h-full mix-blend-multiply z-20"
        />
        <img
          src={svg3}
          alt="WaveLines"
          className="block absolute w-[85%] right-0 left-[35%] top-0 h-full mix-blend-multiply z-20"
        />
        <img
          src={svg4}
          alt="WaveLines"
          className="block absolute w-[85%] right-[45%] left-0 top-0 h-full mix-blend-multiply z-20"
        />
        <img
          src={svg5}
          alt="WaveLines"
          className="block absolute w-[75%] right-[15%] left-0 -top-20 h-full mix-blend-multiply z-20"
        />
        <img
          src={svg6}
          alt="WaveLines"
          className="block absolute w-[85%] right-0 left-[35%] top-0 h-full mix-blend-multiply z-20"
        />
        <img
          src={svg7}
          alt="WaveLines"
          className="block absolute w-[75%] right-0 left-0 top-0 h-full mix-blend-multiply z-20"
        />
      </div>
    </section>
  );
};

export default Banner;
