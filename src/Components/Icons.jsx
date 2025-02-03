import Marquee from 'react-fast-marquee';
import ic1 from '../../public/logos/1.png';
import ic2 from '../../public/logos/2.png';
import ic3 from '../../public/logos/3.png';
import ic4 from '../../public/logos/4.png';
import ic5 from '../../public/logos/5.png';
import ic6 from '../../public/logos/6.png';
import ic7 from '../../public/logos/7.png';
import ic8 from '../../public/logos/8.png';
import ic9 from '../../public/logos/9.png';
import ic10 from '../../public/logos/10.png';
import ic11 from '../../public/logos/11.png';
import ic12 from '../../public/logos/12.png';
import ic13 from '../../public/logos/13.svg';
import ic14 from '../../public/logos/14.png';
import ic15 from '../../public/logos/15.png';

const images = [
  ic1,
  ic2,
  ic3,
  ic4,
  ic5,
  ic6,
  ic7,
  ic8,
  ic9,
  ic10,
  ic11,
  ic12,
  ic13,
  ic14,
  ic15,
];

const Icons = () => {
  return (
    <div className="w-full pt-20 px-4">
      {/* Grid for larger screens */}
      <div className="hidden md:grid grid-cols-5 gap-6 place-items-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`logo-${index + 1}`}
            className="w-44 h-28 object-contain"
          />
        ))}
      </div>

      {/* Marquee for mobile */}
      <div className="md:hidden">
        <Marquee speed={50} pauseOnHover={true}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`logo-${index + 1}`}
              className="w-24 h-16 mx-4 object-contain"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Icons;
