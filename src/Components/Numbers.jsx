import { HyperText } from '@/Components/ui/hyper-text';

const Numbers = () => {
  return (
    <div>
      <p className="text-lg mb-2 text-[#1f80f0] leading-6 tracking-[2.56px] font-bold text-center">
        TRUSTED BY THE BEST
      </p>
      <div className="flex flex-col md:flex-row justify-center lg:gap-24">
        <div className="text-center">
          <HyperText className="text-[100px] text-[#1f80f0] font-bold">
            {'>20'}
          </HyperText>
          <p className="text-lg text-[#0b305b]">Years of Experience</p>
        </div>

        <div className="text-center">
          <HyperText className="text-[100px] text-[#1f80f0] font-bold">
            {'40+'}
          </HyperText>
          <p className="text-lg text-[#0b305b]">Financial Institutions</p>
        </div>

        <div className="text-center">
          <HyperText className="text-[100px] text-[#1f80f0] font-bold">
            {'>200m'}
          </HyperText>
          <p className="text-lg text-[#0b305b]">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
