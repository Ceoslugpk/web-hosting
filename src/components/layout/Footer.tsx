import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center mt-[84px] max-md:max-w-full max-md:mt-10">
      <div className="max-w-[1920px] bg-[#F6F9FD] w-full max-md:max-w-full">
        <div className="flex flex-col relative min-h-[141px] w-full items-center justify-center px-[70px] py-11 max-md:max-w-full max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/e28faf5240a19c564e29566718ef6a38027664f003c69c3cceeb6cf6936e0b0d"
            className="absolute h-full w-full object-cover inset-0"
            alt=""
          />
          <div className="relative flex w-full max-w-[1420px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
            <div className="flex flex-col items-stretch max-md:max-w-full">
              <h3 className="text-[#0E2954] text-[26px] font-bold leading-[31.2px]">
                Looking For Assistance?
              </h3>
              <p className="text-[#2D5087] text-base font-medium leading-6 mt-2.5 max-md:max-w-full">
                Contact Our Acclaimed Customer Support At (480) 000-2500.
              </p>
            </div>
            <button className="rounded bg-[#4E4FEB] shadow-[-4px_4px_0px_rgba(237,237,253,1)] flex items-stretch gap-[11px] text-sm text-[#EDEDFD] font-semibold text-center leading-[14px] my-auto px-4 py-[15px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/9ad0ec816bd6680e675437f2e10c3e377ee0d96510ecbc9a5cb7b40bb96470b4"
                className="aspect-square object-contain w-3.5 shrink-0"
                alt=""
              />
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] bg-[#070B18] flex w-full flex-col items-center justify-center px-[70px] py-[59px] max-md:max-w-full max-md:px-5">
        <div className="w-full max-w-[1420px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {/* Company Section */}
            <div className="w-[19%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-[21px]">
                <h4 className="text-white text-base font-semibold leading-4">
                  Company
                </h4>
                <nav className="w-full text-sm text-[#DDD] font-medium capitalize leading-[21px] mt-[18px]">
                  <Link to="/about" className="block pb-[3px]">
                    About us
                  </Link>
                  <Link to="/contact" className="block pb-[3px]">
                    Contact us
                  </Link>
                  <Link to="/blog" className="block pb-[3px]">
                    Our Blog
                  </Link>
                  <Link to="/investors" className="block pb-[3px]">
                    Investor Relations
                  </Link>
                  <Link to="/careers" className="block pb-[3px]">
                    Careers
                  </Link>
                </nav>
              </div>
            </div>

            {/* Support Section */}
            <div className="w-[19%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-[21px]">
                <h4 className="text-white text-base font-semibold leading-4">
                  Support
                </h4>
                <nav className="w-full text-sm text-[#DDD] font-medium capitalize leading-[21px] mt-[18px]">
                  <Link to="/help" className="block pb-[3px]">
                    Help Center
                  </Link>
                  <Link to="/community" className="block pb-[3px]">
                    Community
                  </Link>
                  <Link to="/report" className="block pb-[3px]">
                    Report Abuse
                  </Link>
                  <Link to="/resources" className="block">
                    Resources
                  </Link>
                </nav>
              </div>
            </div>

            {/* Additional Links Section */}
            <div className="w-[61%] ml-5 max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-5">
                <div className="flex w-[652px] max-w-full items-stretch gap-5 text-base text-white font-semibold whitespace-nowrap leading-4 flex-wrap justify-between">
                  <h4>Resources</h4>
                  <h4>Account</h4>
                  <h4>Shopping</h4>
                </div>

                <div className="mt-[18px] max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    {/* Resources Column */}
                    <div className="w-[33%] max-md:w-full max-md:ml-0">
                      <nav className="w-full text-sm text-[#DDD] font-medium capitalize leading-[21px] max-md:mt-5">
                        <Link to="/whois" className="block pb-[3px]">
                          WHOIS
                        </Link>
                        <Link to="/redeem" className="block pb-[3px]">
                          Redeem Code
                        </Link>
                        <Link to="/webmail" className="block">
                          Webmail Login
                        </Link>
                      </nav>
                    </div>

                    {/* Account Column */}
                    <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <nav className="w-full text-sm text-[#DDD] font-medium capitalize leading-[21px] max-md:mt-5">
                        <Link to="/signin" className="block pb-[3px]">
                          Sign in
                        </Link>
                        <Link to="/account" className="block pb-[3px]">
                          My Account
                        </Link>
                        <Link to="/register" className="block">
                          Create Account
                        </Link>
                      </nav>
                    </div>

                    {/* Shopping Column */}
                    <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <nav className="w-full text-sm text-[#DDD] font-medium capitalize leading-[21px] max-md:mt-5">
                        <Link to="/domains" className="block pb-[3px]">
                          Domains
                        </Link>
                        <Link to="/hosting" className="block pb-[3px]">
                          Shared Hosting
                        </Link>
                        <Link to="/wordpress" className="block pb-[3px]">
                          WordPress
                        </Link>
                        <Link to="/builder" className="block pb-[3px]">
                          Website Builder
                        </Link>
                        <Link to="/security" className="block pb-[3px]">
                          Web Security
                        </Link>
                        <Link to="/email" className="block pb-[3px]">
                          Email
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1920px] border-t border-[rgba(227,233,237,0.15)] bg-[#070B18] w-full px-[80px] py-[31px] max-md:max-w-full max-md:px-5">
        <div className="w-full max-w-[1420px] max-md:max-w-full">
          <div className="flex w-[645px] max-w-full gap-2 flex-wrap">
            <Link to="/" className="flex flex-col items-stretch justify-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/c5513c5fa912d1bee363e725b7fa8c00c03ca0f62daec94fd89bdb7472daa3d7"
                className="aspect-[3.51] object-contain w-[130px] max-w-full"
                alt="GoHost Logo"
              />
            </Link>

            <nav className="flex items-stretch gap-[13px] text-sm text-white font-semibold capitalize leading-[21px] flex-wrap grow shrink basis-auto mt-2 px-3 max-md:max-w-full">
              <Link to="/terms" className="flex items-center gap-[13px] h-full">
                Terms & conditions
                <div className="border-l-2 border-[#DDD] h-[8px] my-auto" />
              </Link>

              <Link
                to="/privacy"
                className="flex items-center gap-[13px] h-full"
              >
                Privacy Policy
                <div className="border-l-2 border-[#DDD] h-[8px] my-auto" />
              </Link>

              <Link
                to="/refund"
                className="flex items-center gap-[13px] h-full"
              >
                Refund Policy
                <div className="border-l-2 border-[#DDD] h-[8px] my-auto" />
              </Link>

              <Link
                to="/trademarks"
                className="flex items-center whitespace-nowrap justify-center h-full"
              >
                Trademarks
              </Link>
            </nav>
          </div>

          <div className="flex w-full items-stretch gap-5 flex-wrap justify-between mt-[7px] max-md:max-w-full">
            <p className="text-sm text-[#DDD] font-semibold leading-4 max-md:max-w-full">
              Copyright © 2024, GoHost Operating Company, LLC. All Rights
              Reserved. The GoHost word mark is a registered trademark of GoHost
              Operating
              <br />
              Company
            </p>

            <div className="flex items-stretch gap-2">
              {/* Social Media Links */}
              <a
                href="https://facebook.com"
                className="bg-white flex items-center w-8 justify-center h-8 px-2 rounded-md"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/9efde98a4c8dfac0913a8889e961ba8a9d8d24dc88a2072c152c824b18201464"
                  className="aspect-square object-contain w-4 self-stretch my-auto"
                  alt="Facebook"
                />
              </a>

              <a
                href="https://twitter.com"
                className="bg-white flex items-center w-8 justify-center h-8 px-2 rounded-md"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/41266356bdcc6e1a4d3124b8e9383ba2141d487eebf8e869f6cf129c6d13f4ad"
                  className="aspect-square object-contain w-4 self-stretch my-auto"
                  alt="Twitter"
                />
              </a>

              <a
                href="https://instagram.com"
                className="bg-white flex items-center w-8 justify-center h-8 px-2 rounded-md"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/ba9a4a0dbd0149e06f27d5f3e176b4d0f1c7bce5782c1cd322b35fa4569a13c8"
                  className="aspect-square object-contain w-4 self-stretch my-auto"
                  alt="Instagram"
                />
              </a>

              <a
                href="https://linkedin.com"
                className="bg-white flex items-center w-8 justify-center h-8 px-2 rounded-md"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/01d6a2374597bbe97e402ceacd211558e4e959e09222a4c1b3958843f2912e4d"
                  className="aspect-square object-contain w-4 self-stretch my-auto"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
