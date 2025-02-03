import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import ic1 from '../../public/ic1.svg';
import ic2 from '../../public/ic2.png';
import ic3 from '../../public/ic3.svg';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Cards = () => {
  return (
    <div className="flex justify-center items-center">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.3}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="w-full max-w-5xl"
      >
        {[ic1, ic2, ic3].map((icon, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="max-w-[360px] rounded-3xl min-h-[295px] bg-[#f7fbfe]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="p-8">
                <img src={icon} alt={`Icon ${index + 1}`} />
              </div>
              <div className="px-8 space-y-5">
                <h3 className="text-2xl text-[#0b305b] font-semibold">
                  {index === 0
                    ? 'Full-suite solutions'
                    : index === 1
                    ? 'Simplify the complex'
                    : 'Cutting-edge tech'}
                </h3>
                <p>
                  {index === 0
                    ? 'Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.'
                    : index === 1
                    ? 'Simplify complex processes and optimize your financial operations by leveraging AI, Blockchain, Cloud Computing, and Big Data.'
                    : 'We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.'}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
