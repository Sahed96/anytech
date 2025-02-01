import bridge from '../assets/icons/easy-banking/Bridge.svg';
import hline from '../assets/icons/easy-banking/Line1.svg';
import hline2 from '../assets/icons/easy-banking/Line4.svg';
import hline3 from '../assets/icons/easy-banking/Line2.svg';
import hline4 from '../assets/icons/easy-banking/Line3.svg';

const Philosophy = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="flex mb-10 justify-evenly items-center flex-col">
        <p className="text-lg mb-8 text-[#1f80f0] leading-6 tracking-[2.56px] font-bold">
          OUR PHILOSOPHY
        </p>
        <h2 className="text-6xl text-[#0b305b] leading-[110%] font-semibold">
          Human-centred innovation
        </h2>
      </div>

      {/* Content Section */}
      <div className="relative flex justify-evenly items-center">
        {/* Left Card */}
        <div className="bg-[#e9f6ff] rounded-3xl flex flex-col justify-center items-center min-w-[508px] min-h-[400px] relative z-10">
          <div className="bg-[#fff] mb-2 flex flex-col justify-center items-center rounded-3xl shadow-2xl w-[360px] min-h-[150px]">
            <p className="text-sm mb-5 text-[#2b79da] leading-6 tracking-[2.56px] font-bold">
              CORE TECH
            </p>
            <h3 className="text-[#0b305b] text-4xl font-semibold">
              Artificial Intelligence
            </h3>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#9497b5] mt-5">
              Using AI/ML to upgrade legacy processes, <br /> reduce cost, and
              improve efficiency
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#e9f6ff] flex justify-center items-start rounded-3xl min-w-[808px] min-h-[400px] relative z-10">
          <div className="absolute top-32 left-16">
            <div className="bg-[#fff] mb-2 flex flex-col justify-center items-center rounded-3xl shadow-2xl w-[244px] min-h-[115px]">
              <div>
                <p className="text-sm mb-2 mt-2 text-[#2b79da] leading-6 tracking-[2.56px] font-bold">
                  MECHANISM
                </p>
                <h3 className="text-[#0b305b] text-4xl font-semibold">
                  Blockchain
                </h3>
              </div>
            </div>
            <div className="w-[144px]">
              <p className="text-sm font-semibold text-[#9497b5] mt-5">
                Enhanced security by eliminating intermediaries
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 right-10 flex items-start gap-4">
            <div className="bg-[#fff] mb-2 flex justify-center items-center rounded-3xl shadow-2xl w-[244px] min-h-[115px]">
              <div>
                <p className="text-sm mb-2 mt-2 text-[#2b79da] leading-6 tracking-[2.56px] font-bold">
                  RESOURCE
                </p>
                <h3 className="text-[#0b305b] text-4xl font-semibold">Data</h3>
              </div>
            </div>
            <div className="w-[144px]">
              <p className="text-sm font-semibold text-[#9497b5] mt-5">
                Valuable, actionable insights from mass data sources
              </p>
            </div>
          </div>

          <div className="absolute flex gap-4 top-4 right-10">
            <div className="bg-[#fff] mb-2 flex flex-col justify-center items-center rounded-3xl shadow-2xl w-[244px] min-h-[115px]">
              <div>
                <p className="text-sm mb-2 mt-2 text-[#2b79da] leading-6 tracking-[2.56px] font-bold">
                  INFRASTRUCTURE
                </p>
                <h3 className="text-[#0b305b] text-4xl font-semibold">Cloud</h3>
              </div>
            </div>
            <div className="w-[144px]">
              <p className="text-sm font-semibold text-[#9497b5] mt-5">
                Scale resources easily on-demand
              </p>
            </div>
          </div>
        </div>

        {/* Bridge SVG (Positioned Under Both Cards) */}
        <div className="absolute inset-0 z-0 -left-[300px] flex justify-center items-center">
          <img src={bridge} alt="Bridge" className="rotate-90 w-[300px]" />
        </div>

        {/* HLine SVG (Centered Within Bridge SVG) */}
        <div className="absolute inset-0 flex -left-[300px] justify-center items-center z-20">
          <img
            src={hline}
            alt="Horizontal Line"
            className="h-[130px] rotate-90"
          />
        </div>
        <div className="absolute inset-0 flex left-[730px] justify-center items-center z-20">
          <img
            src={hline2}
            alt="Horizontal Line"
            className="w-[100px] rotate-90"
          />
        </div>

        {/* Arrows under the Blockchain div */}
        <div className="absolute inset-0 flex -bottom-[184px] left-[380px] justify-center items-center z-10">
          <img
            src={hline3}
            alt="Horizontal Line"
            className="w-[100px] -rotate-90"
          />
        </div>
        <div className="absolute inset-0  flex -top-[240px] left-[380px] justify-center items-center z-10">
          <img
            src={hline4}
            alt="Horizontal Line"
            className="w-[100px] -rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
