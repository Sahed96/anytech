import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import svg2 from '../assets/backgrounds/WaveLinesDesktop1.svg';
import svg5 from '../assets/backgrounds/WaveLinesDesktop2.svg';
import svg7 from '../assets/backgrounds/WaveLinesDesktop4.svg';

const Banner2 = () => {
  // Animation variants
  const svgVariantLeft = {
    hidden: { x: '-100%', y: '-100%', opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 0.7,
      transition: { duration: 1, ease: 'easeOut' },
    },
    hover: { x: -10, y: -10, transition: { yoyo: Infinity, duration: 0.5 } },
  };

  const svgVariantRight = {
    hidden: { x: '100%', y: '-100%', opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 0.6,
      transition: { duration: 1, ease: 'easeOut' },
    },
    hover: { x: 10, y: -10, transition: { yoyo: Infinity, duration: 0.5 } },
  };

  const svgVariantBottom = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.5,
      transition: { duration: 1, ease: 'easeOut' },
    },
    hover: { y: 10, transition: { yoyo: Infinity, duration: 0.5 } },
  };

  return (
    <div id="banner2" className="relative overflow-hidden">
      <div className="min-h-[530px] bg-[radial-gradient(24.45%_88.58%_at_23.57%_2%,#00e9ea_0%,#1f80f0_52.08%,#005bc4_100%)] relative">
        {/* SVG Background Layers with Framer Motion */}
        <motion.img
          src={svg2}
          alt="WaveLines"
          className="absolute w-[80%] top-0 left-0 mix-blend-multiply z-20"
          variants={svgVariantLeft}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        />

        <motion.img
          src={svg5}
          alt="WaveLines"
          className="absolute w-[60%] top-10 right-0 mix-blend-multiply z-15"
          variants={svgVariantRight}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        />

        <motion.img
          src={svg7}
          alt="WaveLines"
          className="absolute w-[90%] bottom-0 left-5 mix-blend-multiply z-10"
          variants={svgVariantBottom}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        />

        {/* Text Content */}
        <div className="pl-[10%] pt-[10%] space-y-10 relative z-30">
          <h1 className="leading-[120%] text-[60px] font-bold font-Montserrat text-white">
            Legacy no longer
          </h1>
          <p className="max-w-auto leading-[150%] text-xl font-semibold text-white">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <button className="bg-[#fe8b53] flex items-center gap-1.5 px-6 py-4 font-bold text-lg rounded-md text-white">
            Contact Us
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
