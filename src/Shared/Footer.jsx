import logo from '/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#002045] text-white py-8">
      <div className="flex flex-col md:flex-row bg-[#002045] mb-8 justify-between items-center px-6 md:px-24 gap-4 md:gap-0">
        <div className="w-40 md:w-52">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 text-center md:text-left">
          <p>Our Solutions</p>
          <hr className="hidden md:block border-white w-8 rotate-90 border" />
          <p>AnyCaaS</p>
          <p>AnyBaaS</p>
          <p>AnyPaaS</p>
        </div>
      </div>

      <div className="bg-[#00152d] min-h-20 flex flex-col md:flex-row justify-between items-center px-6 md:px-24 py-4 gap-2 md:gap-0">
        <p className="text-sm">
          ©2023 All rights reserved. Any Technology Pte Ltd.
        </p>
        <p className="text-sm">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
