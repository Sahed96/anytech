import img from '../../public/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png';
import svg1 from '../../public/carousel-image-frame-1.svg';
import svg2 from '../assets/frames/founder/2.svg';
import svg3 from '../../public/carousel-image-frame-2.png';
import svg4 from '../../public/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg';
import svg5 from '../../public/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg';
import svg6 from '../../public/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg';

const Finance = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center ">
      <div>
        <p className="text-lg mb-8 text-[#1f80f0] leading-6 tracking-[2.56px] font-bold">
          POWERING THE FUTURE OF FINANCE
        </p>
        <h2 className="text-6xl text-[#0b305b] max-w-xl leading-[110%] font-semibold">
          Uncovering new ways to delight customers
        </h2>
        <div className="mt-8 space-y-7 max-w-xl">
          <p className="font-bold text-[#164377] text-base">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-[#265080]">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
      </div>
      <div className="relative">
        {/* SVGs Under the Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={svg1}
            className="w-[400px] absolute right-30 -top-20 mix-blend-color opacity-50"
            alt=""
          />
          <img
            src={svg2}
            className="w-[150px] absolute right-4 rotate-180 -top-20 mix-blend-overlay opacity-60"
            alt=""
          />
          <img
            src={svg3}
            className="w-[130px] absolute -right-20 -rotate-90 -bottom-20"
            alt=""
          />
          <img
            src={svg2}
            className="w-[300px] absolute -right-16 rotate-180 -top-20 mix-blend-overlay opacity-60"
            alt=""
          />
        </div>

        {/* Main Image (Above Some SVGs, Below Others) */}
        <div className="relative z-10">
          <img
            className="w-[450px] object-cover shadow-xl"
            src={img}
            alt="pic"
          />
        </div>

        {/* SVGs Above the Image */}
        <div className="absolute inset-0 z-20">
          <img
            src={svg2}
            className="w-[140px] absolute left-5 rotate-180 bottom-0"
            alt=""
          />
          <img
            src={svg2}
            className="w-[130px] absolute -right-16 rotate-180 mix-blend-normal bottom-8"
            alt=""
          />
          <img
            src={svg4}
            className="w-[115px] absolute top-16 -right-14  mix-blend-normal bottom-8"
            alt=""
          />
          <img
            src={svg5}
            className="w-[74px] absolute top-32 -left-10  mix-blend-normal bottom-8"
            alt=""
          />
          <img
            src={svg6}
            className="w-[89px] absolute top-52 left-16  mix-blend-normal bottom-8"
            alt=""
          />
        </div>
      </div>
      </div>
      <div id='finance' className='bg-[#f8fbfe] min-h-[240px] max-h-[60px] w-full'>

      </div>
    </div>
  );
};

export default Finance;
