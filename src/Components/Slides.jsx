import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pic1 from '../../public/pic1.jpg';
import pic2 from '../../public/pic2.jpg';
import pic3 from '../../public/pic3.png';
import pic4 from '../../public/pic4.jpg';

const slides = [
  {
    title: 'Customer focused',
    subTitle: 'Purpose-built financial services',
    description:
      'Elevate customer experience and achieve agile financial product innovation with the worlds first, consumer-centric real-time transaction account processing and credit limit system.',
    description2:
      'Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.',
    image: pic1,
  },
  {
    title: 'Agile and adaptable',
    subTitle: 'Agile and adaptable for growth',
    description:
      'Innovate with evolving customer demands through our openplatform-based technology architecture. Stay ahead of theever-changing financial landscape with a strong focus onsecurity, compliance and performance.',
    description2:
      'Optimise your offerings to unlock new revenue streams anddeliver an extraordinary customer experience, with digitallydesigned core banking, payment processing and lendingcapabilities.',
    image: pic2,
  },
  {
    title: 'Compliance ready',
    subTitle: 'Manage compliancewith ease',
    description:
      'Navigate through the evolving regulatory landscape withconfidence by streamlining compliance management—through real-time risk monitoring solutions powered by Al andmachine learning.',
    description2:
      'Transform your compliance strategy with flexible and diversifiedpolicy rules, powered by cutting-edge technology that isdesigned for seamless integration with core banking and cardpaymentsystems.',
    image: pic3,
  },
  {
    title: 'Secure and safe',
    subTitle: 'Highly secure and safe',
    description:
      'Discover unparalleled security trusted by financial institutionsacross the globe. Our applications are meticulously developed incompliance with international security standards, drawing on 20years of technical expertise.',
    description2:
      'Join over 40 esteemed Fls, each serving more than 200 millioncustomers, and benefit from our secure, robust and reliableinfrastructure.',
    image: pic4,
  },
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  };

  const slideVariants = {
    enter: direction => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: direction => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto text-center p-6">
        {/* Header */}
        <h2 className="text-lg mb-4 text-[#1f80f0] uppercase leading-6 tracking-[2.56px] font-bold">
          Technology built for you
        </h2>
        <h1 className="text-4xl md:text-6xl text-[#0b305b] leading-[110%] font-semibold">
          The future of finance
        </h1>

        {/* Navigation Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center space-x-10 mt-8 my-4">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="px-4 py-2 rounded-full text-base md:text-xl font-medium transition-all"
              animate={{
                backgroundColor: currentIndex === index ? '#3b82f6' : '#e5e7eb',
                color: currentIndex === index ? '#fff' : '#374151',
              }}
              transition={{ duration: 1.5 }}
            >
              {slide.title}
            </motion.button>
          ))}
        </div>

        {/* Slide Container */}
        <div className="relative shadow-xl rounded-2xl w-full overflow-hidden min-h-[450px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              className="absolute w-full flex flex-col-reverse md:flex-row items-center bg-white shadow-xl rounded-xl p-4 md:p-8 gap-4 md:gap-6"
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-2 text-left">
                <h3 className="text-md md:text-lg mb-4 md:mb-8 text-[#1f80f0] uppercase leading-6 tracking-[2.56px] font-bold">
                  {slides[currentIndex].title}
                </h3>
                <h2 className="text-2xl md:text-4xl text-[#0b305b] leading-[110%] font-semibold">
                  {slides[currentIndex].subTitle}
                </h2>
                <p className="mt-2 md:mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  {slides[currentIndex].description}
                </p>
                <p className="mt-2 md:mt-3 text-gray-600 text-xs md:text-sm leading-relaxed">
                  {slides[currentIndex].description2}
                </p>
              </div>

              {/* Image Section */}
              <motion.div className="w-full md:w-1/2 lg:w-2/3 mb-4 md:mb-0">
                <img
                  src={slides[currentIndex].image}
                  alt="Slide Image"
                  className="w-full h-auto md:h-[400px] rounded-xl object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div
        id="finance"
        className="bg-[#f8fbfe] hidden lg:block min-h-[240px] max-h-[60px] w-full"
      ></div>
    </div>
  );
};

export default Slides;
