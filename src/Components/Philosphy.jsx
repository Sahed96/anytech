import bridge from '../assets/icons/easy-banking/Bridge.svg';
import hline from '../assets/icons/easy-banking/Line1.svg';
import hline2 from '../assets/icons/easy-banking/Line4.svg';
import hline3 from '../assets/icons/easy-banking/Line2.svg';
import hline4 from '../assets/icons/easy-banking/Line3.svg';

const Philosophy = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="flex text-center px-5 lg:px-0 mb-10 justify-evenly items-center flex-col">
        <p className="text-lg mb-8 text-[#1f80f0] leading-6 tracking-[2.56px] font-bold">
          OUR PHILOSOPHY
        </p>
        <h2 className="lg:text-6xl text-5xl text-[#0b305b] leading-[110%] font-semibold">
          Human-centred innovation
        </h2>
      </div>

      {/* Content Section */}
      <div className="relative lg:space-y-0 space-y-12 px-6 lg:px-0 lg:flex justify-evenly items-center">
        {/* Left Card */}
        <div className="bg-[#e9f6ff] rounded-3xl flex flex-col justify-center items-center min-w-[350px] lg:min-w-[508px] lg:min-h-[400px] min-h-[250px] relative z-10">
          <div className="bg-[#fff] mb-2 flex flex-col justify-center items-center rounded-3xl shadow-2xl lg:w-[360px] w-64 min-h-24 lg:min-h-[150px]">
            <p className="text-sm mb-5 text-[#2b79da] leading-6 tracking-[2.56px] font-bold">
              CORE TECH
            </p>
            <h3 className="text-[#0b305b] text-2xl lg:text-4xl font-semibold">
              Artificial Intelligence
            </h3>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#9497b5] mt-2 lg:mt-5">
              Using AI/ML to upgrade legacy processes, <br /> reduce cost, and
              improve efficiency
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#e9f6ff] flex justify-center items-start rounded-3xl min-w-[350px] lg:min-w-[808px] min-h-[400px] relative z-10">
          <div className="absolute top-6 lg:top-32 lg:block left-28 lg:left-16">
            <div className="bg-[#fff] mb-2 text-center flex flex-col justify-center items-center rounded-3xl shadow-2xl lg:w-[244px] w-[144px] min-h-[80px] lg:min-h-[115px]">
              <div>
                <p className="text-sm mb-2 mt-2 text-[#2b79da] leading-6 lg:tracking-[2.56px] font-bold">
                  MECHANISM
                </p>
                <h3 className="text-[#0b305b] text-2xl lg:text-4xl font-semibold">
                  Blockchain
                </h3>
              </div>
            </div>
            <div className="lg:w-[144px] lg:pl-0 pl-2 w-[80px] ">
              <p className="lg:text-sm text-xs font-semibold text-[#9497b5] mt-2 lg:mt-5">
                Enhanced security by eliminating intermediaries
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 lg:right-10 lg:flex items-start gap-4">
            <div className="bg-[#fff] text-center mb-2 flex justify-center items-center rounded-3xl shadow-2xl w-[100px] lg:w-[244px] min-h-[80px] lg:min-h-[115px]">
              <div>
                <p className="text-sm mb-2 mt-2 text-[#2b79da] lg:leading-6 lg:tracking-[2.56px] font-bold">
                  RESOURCE
                </p>
                <h3 className="text-[#0b305b] text-2xl lg:text-4xl font-semibold">Data</h3>
              </div>
            </div>
            <div className="lg:w-[144px] w-[100px]">
              <p className="text-sm font-semibold text-[#9497b5] lg:pl-0 pl-2 mt-1 lg:mt-5">
                Valuable, actionable insights from mass data sources
              </p>
            </div>
          </div>

          <div className="absolute lg:flex gap-4 top-[196px] lg:top-4 right-[190px] lg:right-10">
            <div className="bg-[#fff] mb-2 flex flex-col justify-center items-center rounded-3xl shadow-2xl lg:w-[244px] w-[144px] min-h-[80px] lg:min-h-[115px]">
              <div>
                <p className="text-sm mb-2 mt-2 text-[#2b79da] lg:leading-6 lg:tracking-[2.56px] font-bold">
                  INFRASTRUCTURE
                </p>
                <h3 className="text-[#0b305b] text-center text-xl lg:text-4xl font-semibold">Cloud</h3>
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
        <div className="absolute inset-0 z-0 lg:top-0 -top-[200px] left-[30px] lg:-left-[300px] flex justify-center items-center">
          <img src={bridge} alt="Bridge" className="lg:rotate-90 rotate-0 w-52 lg:w-[300px]" />
        </div>

        {/* HLine SVG (Centered Within Bridge SVG) */}
        <div className="absolute inset-0 flex lg:top-0 -top-[200px] left-[30px] lg:-left-[300px] justify-center items-center z-20">
          <img
            src={hline}
            alt="Horizontal Line"
            className="lg:h-[130px] h-24 rotate-0 lg:rotate-90"
          />
        </div>
        <div className="absolute inset-0 flex top-[320px] lg:top-0 left-12 lg:left-[730px] justify-center items-center z-20">
          <img
            src={hline2}
            alt="Horizontal Line"
            className="lg:w-[100px] w-[60px] rotate-0 lg:rotate-90"
          />
        </div>

        {/* Arrows under the Blockchain div */}
        <div className="absolute inset-0 flex -bottom-[155px] lg:-bottom-[175px] -left-32 lg:left-[390px] justify-center items-center z-10">
          <img
            src={hline3}
            alt="Horizontal Line"
            className="lg:w-[90px] w-[85px] rotate-0 lg:-rotate-90"
          />
        </div>
        <div className="absolute inset-0  flex top-[155px] lg:-top-[230px] left-36 lg:left-[390px] justify-center items-center z-10">
          <img
            src={hline4}
            alt="Horizontal Line"
            className="lg:w-[90px] w-[85px] rotate-0 lg:-rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
