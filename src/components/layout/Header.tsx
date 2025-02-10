import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex flex-col items-stretch">
      <div className="flex w-full flex-col items-center max-md:max-w-full">
        <div className="max-w-[1920px] justify-center items-stretch bg-[#4E4FEB] min-h-[43px] w-full gap-[418.75px] text-[14px] text-white leading-[21px] pl-[250px] pr-[240px] py-[1px] border-y border-[rgba(20,19,19,0.07)] max-md:max-w-full max-md:px-5">
          <div className="flex min-w-60 flex-col overflow-hidden items-stretch font-medium justify-center">
            <div className="flex min-h-[21px] items-center gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/69b895529e24bf63369a6f1bd52e7cdcba90f0cc78cba1f99879f757cd256e70"
                className="aspect-square object-contain w-5 self-stretch shrink-0 my-auto"
                alt=""
              />
              <div className="self-stretch my-auto">
                50 GB plan with free matching domain.
              </div>
            </div>
          </div>
          <nav className="items-stretch bg-[#4E4FEB] flex min-w-60 font-semibold whitespace-nowrap h-full flex-1 shrink basis-0 p-2.5 max-md:max-w-full">
            <div className="w-[198px] overflow-hidden">
              <div className="flex w-full items-stretch gap-6 flex-wrap pr-3">
                <Link
                  to="/about"
                  className="flex items-center justify-center h-full"
                >
                  <div className="self-stretch my-auto">About</div>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center h-full"
                >
                  <div className="self-stretch my-auto">Contact</div>
                </Link>
                <Link
                  to="/sitemap"
                  className="flex items-center justify-center h-full"
                >
                  <div className="self-stretch my-auto">Sitemap</div>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="max-w-[1920px] bg-white flex w-full flex-col items-center justify-center px-[70px] py-5 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1415px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
            <Link to="/" className="flex flex-col items-stretch justify-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/2a2325cca4c2bc859d40fdad368f115019782c5a1b2e1aed92c3aea24f7e9bad"
                className="aspect-[3.42] object-contain w-[171px] max-w-full"
                alt="GoHost Logo"
              />
            </Link>

            <div className="flex items-stretch gap-[40px_49px] flex-wrap max-md:max-w-full">
              <div className="flex items-stretch gap-[18px] text-sm text-[#0E2954] font-semibold capitalize leading-[21px] grow shrink basis-auto">
                <div className="flex flex-col overflow-hidden items-stretch justify-center my-auto">
                  <div className="flex min-h-[21px] items-center justify-center">
                    <div className="self-stretch flex items-center gap-2.5 my-auto">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/e4824367bfd961e09779873d9eab05f6cdfe3c9c766a12ee816a9e40b960d7f7"
                        className="aspect-square object-contain w-[18px] self-stretch shrink-0 my-auto"
                        alt=""
                      />
                      <div className="self-stretch my-auto">
                        (20) 123 456 7890
                      </div>
                    </div>
                  </div>
                </div>

                <button className="rounded bg-white shadow-[-4px_4px_0px_rgba(237,237,253,1)] border flex flex-col items-stretch justify-center px-[22px] py-[13px] border-[rgba(25,24,24,0.17)]">
                  View Cart (0)
                </button>

                <button className="rounded bg-[#4E4FEB] shadow-[-4px_4px_0px_rgba(237,237,253,1)] border flex flex-col items-stretch text-white justify-center px-[22px] py-[13px] border-[rgba(227,233,237,1)]">
                  Sign In
                </button>
              </div>

              <div className="flex items-stretch gap-[7px] whitespace-nowrap my-auto">
                <div className="text-[#0E2954] text-[15px] font-semibold leading-[22.5px]">
                  English
                </div>
                <div className="text-[#666] text-[8px] font-bold leading-3 my-auto">
                  ▼
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="max-w-[1920px] justify-center items-stretch bg-white w-full gap-[145.01px] text-[14px] font-semibold px-[250px] py-[21px] border-y border-[rgba(20,19,19,0.07)] max-md:max-w-full max-md:px-5">
          <div className="flex min-w-60 items-center text-[#070B18] leading-6 flex-wrap grow shrink w-[1052px] my-auto max-md:max-w-full">
            <Link
              to="/"
              className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center my-auto px-4 py-px"
            >
              <div className="rounded">Home</div>
            </Link>

            <div className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center w-28 my-auto px-4 py-px">
              <div className="rounded relative flex w-full gap-[9px] pr-5">
                <div className="z-0">Domains</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/4cf479394c56328a66f8ea2cc99e4e07b2079a3c745fbde360ed688ab582e43c"
                  className="aspect-square object-contain w-2.5 absolute z-0 shrink-0 h-2.5 right-px top-1"
                  alt=""
                />
              </div>
            </div>

            {/* Additional navigation items */}
            <div className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center w-[105px] my-auto px-4 py-px">
              <div className="rounded relative flex w-full gap-[9px] pr-5">
                <div className="z-0">Hosting</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/318457fa4e9448b9105e0d8dbb60e4d7a1cbc04a0e225e0033bbdf6976441fb3"
                  className="aspect-square object-contain w-2.5 absolute z-0 shrink-0 h-2.5 right-px top-1"
                  alt=""
                />
              </div>
            </div>

            <Link
              to="/website-builder"
              className="self-stretch flex flex-col items-stretch justify-center my-auto px-4 py-px"
            >
              <div className="rounded">Website Builder</div>
            </Link>

            <Link
              to="/security"
              className="self-stretch flex flex-col items-stretch justify-center my-auto px-4 py-px"
            >
              <div className="rounded">Web Security</div>
            </Link>

            <Link
              to="/email"
              className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center my-auto px-4 py-px"
            >
              <div className="rounded">Email</div>
            </Link>

            <div className="self-stretch flex flex-col items-stretch whitespace-nowrap justify-center w-[91px] my-auto px-4 py-px">
              <div className="rounded relative flex w-full gap-[9px] pr-5">
                <div className="z-0">Other</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/c1ab25efdf9c8fdff3af5cafc5388e5178488699763d8ec8093cf08fc2827c8d"
                  className="aspect-square object-contain w-2.5 absolute z-0 shrink-0 h-2.5 right-px top-1"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden items-stretch text-[#0E2954] leading-[21px] justify-center">
            <div className="flex min-h-[21px] items-center justify-center">
              <div className="self-stretch flex items-center gap-2.5 my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/f148676c8399c731eb660e3a4dedabfb51e4ef3a853b0c2de5ba9e9c4a8e9bae"
                  className="aspect-square object-contain w-[18px] self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="self-stretch my-auto">
                  Register a New Domain
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
