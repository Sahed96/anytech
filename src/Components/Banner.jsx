import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import pic from '../../public/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg';
import svg1 from '../assets/backgrounds/ctaMobileWaveLines.svg';
import svg2 from '../assets/backgrounds/WaveLinesDesktop1.svg';
import svg3 from '../assets/backgrounds/WaveLinesMobile1.svg';
import svg4 from '../assets/backgrounds/WaveLinesMobile2.svg';
import svg5 from '../assets/backgrounds/WaveLinesDesktop2.svg';
import svg6 from '../assets/backgrounds/WaveLinesDesktop3.svg';
import svg7 from '../assets/backgrounds/WaveLinesDesktop4.svg';

const Banner = () => {
  const svgVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <section
      id="banner-bg"
      className="min-h-screen bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,#00e9ea_0%,#1f80f0_52.08%,#005bc4_100%)] overflow-hidden relative"
    >
      <div className="lg:pl-[10%] pl-[5%] pt-[20%] lg:pt-[10%] space-y-6 relative z-30 lg:space-y-10">
        <h1 className="leading-[120%] text-[60px] lg:text-[90px] font-bold font-Montserrat text-white">
          Embrace the <br /> future of finance
        </h1>
        <p className="max-w-2xl leading-[150%] text-lg lg:text-xl font-semibold text-white">
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation
        </p>
        <button className="bg-[#fe8b53] flex items-center gap-1.5 px-6 py-4 font-bold text-lg rounded-md text-white">
          Reach Out To Us
          <ChevronRight />
        </button>
      </div>

      <motion.img
        id='banner-img'
        src={pic}
        alt="Banner"
        className="absolute w-[65%] right-0 left-[35%] top-0 h-full mix-blend-normal z-20 lg:block hidden"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        custom="right"
      />

      <div>
        {[svg1, svg2, svg3, svg4, svg5, svg6, svg7].map((svg, index) => (
          <motion.img
            key={index}
            src={svg}
            alt="WaveLines"
            className={`absolute mix-blend-multiply z-20 w-[${80 - index * 5}%]`}
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index % 2 === 0 ? 'left' : 'top'}
            style={{ top: `${index * 5}%`, left: `${index * 3}%` }}
          />
        ))}
      </div>

      <motion.img
        src={pic}
        alt="Banner"
        className="w-full lg:hidden block mix-blend-normal z-10 mt-4"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        custom="right"
      />
    </section>
  );
};

export default Banner;
