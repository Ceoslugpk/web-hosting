export const Hero = () => {
  return (
    <section className="bg-white w-full max-md:max-w-full">
      <div className="flex flex-col relative min-h-[712px] w-full items-center justify-center px-[70px] py-[76px] max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/79643785f40afd173f004a010b8cf6ffcfaba3f164e5b6e2e8749326406642b9"
          className="absolute h-full w-full object-cover inset-0"
          alt=""
        />
        <div className="relative w-full max-w-[1394px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="relative flex w-full flex-col self-stretch my-auto max-md:max-w-full max-md:mt-10">
                <h2 className="text-[#2D5087] text-lg font-bold leading-[18px] capitalize">
                  Fast WordPress Hosting
                </h2>
                <div className="self-stretch text-[52px] text-[#0E2954] font-bold leading-[52px] mt-[18px] pr-11 max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:pr-5">
                  <span className="text-[#0E2954]">Establish Your </span>
                  <span className="text-[#4E4FEB]">Business</span>
                  <br />
                  <span className="text-[#0E2954]">Presence On The</span>
                  <br />
                  <span className="text-[#0E2954]">Internet.</span>
                </div>
                <p className="text-[#2D5087] text-base font-normal leading-6 self-stretch mr-[41px] mt-[26px] max-md:max-w-full max-md:mr-2.5">
                  Experience lightning-fast speeds, unparalleled uptime, and
                  exceptional support with
                  <br />
                  GoHost. Join thousands of satisfied customers today!
                </p>
                <div className="flex w-[303px] max-w-full items-stretch gap-[19px] text-sm font-semibold text-center capitalize leading-[14px] mt-[23px]">
                  <button className="self-stretch rounded bg-[#4E4FEB] shadow-[-4px_4px_0px_rgba(237,237,253,1)] border text-white px-[19px] py-[15px] border-[rgba(227,233,237,1)]">
                    Choose a plan
                  </button>
                  <button className="self-stretch rounded bg-white shadow-[-4px_4px_0px_rgba(237,237,253,1)] border text-[#0E2954] px-[19px] py-[15px] border-[rgba(227,233,237,1)]">
                    Get More power
                  </button>
                </div>
                <div className="flex w-[383px] max-w-full gap-5 justify-between mt-[43px] max-md:mt-10">
                  <div className="flex flex-col items-stretch">
                    <h3 className="text-[#0E2954] text-base font-bold leading-[19.2px] capitalize">
                      1M+
                    </h3>
                    <p className="text-[#2D5087] text-sm font-medium leading-[21px] mt-[13px]">
                      Active Website
                    </p>
                  </div>
                  <div className="flex flex-col items-stretch">
                    <h3 className="text-[#0E2954] text-base font-bold leading-[19.2px] capitalize">
                      500K
                    </h3>
                    <p className="text-[#2D5087] text-sm font-medium leading-[21px] mt-[13px]">
                      Worldwide Server
                    </p>
                  </div>
                  <div className="self-stretch flex flex-col items-stretch">
                    <h3 className="text-[#0E2954] text-base font-bold leading-[19.2px] capitalize">
                      48+
                    </h3>
                    <p className="text-[#2D5087] text-sm font-medium leading-[21px] mt-3.5">
                      Web Apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="relative flex w-full flex-col items-stretch text-base text-[#0E2954] font-bold capitalize leading-[19.2px] max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/7a86b78bdd266053074c0b00dbf3046c8ef50f1db5d39b89f0030bf889f9c240"
                  className="aspect-[1.29] object-contain w-full max-md:max-w-full"
                  alt="Hosting illustration"
                />
                <div className="self-center flex w-[277px] max-w-full items-stretch gap-3 mt-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/e3d915dc53a9c61c525ab5fb78bf322d0a8f089e3aab39acbfc19f229d3c6c9d"
                    className="aspect-[2.93] object-contain w-[132px] shrink-0 max-w-full"
                    alt=""
                  />
                  <div className="my-auto">
                    expert Hosting
                    <br />
                    Help
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
