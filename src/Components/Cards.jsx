import ic1 from '../../public/ic1.svg';
import ic2 from '../../public/ic2.png';
import ic3 from '../../public/ic3.svg';

const Cards = () => {
  return (
    <div className="flex justify-center gap-10 items-center">
      <div className="max-w-[360px] rounded-3xl min-h-[295px] bg-[#f7fbfe]">
        <div className="p-8 ">
          <img src={ic1} alt="" />
        </div>
        <div className="px-8 space-y-5">
          <h3 className="text-2xl text-[#0b305b] font-semibold">
            Full-suite solutions
          </h3>
          <p>
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
      </div>
      <div className="max-w-[360px] rounded-3xl min-h-[295px] bg-[#f7fbfe]">
        <div className="p-8 ">
          <img src={ic2} alt="" />
        </div>
        <div className="px-8 space-y-5">
          <h3 className="text-2xl text-[#0b305b] font-semibold">
            Simplify the complex
          </h3>
          <p>
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </div>
      </div>
      <div className="max-w-[360px] rounded-3xl min-h-[295px] bg-[#f7fbfe]">
        <div className="p-8 ">
          <img src={ic3} alt="" />
        </div>
        <div className="px-8 space-y-5">
          <h3 className="text-2xl text-[#0b305b] font-semibold">
            Cutting-edge tech
          </h3>
          <p>
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
