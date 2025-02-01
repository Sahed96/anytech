const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">ANTECH</h2>
          </div>

          {/* Solutions Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Our Solutions</h3>
            <ul className="space-y-1">
              <li>AnyCaaS</li>
              <li>AnyBaaS</li>
              <li>AnyPaaS</li>
            </ul>
          </div>

          {/* Copyright and Links */}
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-sm mb-2">
              ©2023 All rights reserved. Any Technology Plc Ltd.
            </p>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
