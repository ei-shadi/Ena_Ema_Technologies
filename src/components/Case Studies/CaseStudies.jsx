import Button from "../shared/Button";
import Image from "next/image";
import Instant from "../../../public/assets/images/Instant.png";
import Learn from "../../../public/assets/images/Learn.png";
import WeCan from "../../../public/assets/images/WeCan.png";
import Check from "../../../public/assets/icons/FillCheck.png";
import SmallContainer from "./SmallContainer";
import "./CaseStudies.css";

const CaseStudies = () => {
  return (
    <section className="text-[#F5F5F5] text-center">
      {/* Case Studies Title Container */}
      <div>
        <h1 className="font-manrope text-4xl lg:text-5xl font-medium pb-3">
          Case Studies
        </h1>
        <p className="text-sm md:text-lg">
          See the designs that delivered results
        </p>
      </div>

      {/* Case Studies Card Container */}
      <div className="relative hidden md:flex flex-row justify-center my-12 overflow-hidden">


        {/* Card 1 (Left) */}
        <div className="absolute md:-left-93 lg:-left-62 xl:-left-10 w-[440px] bg-[#151E1B] h-full border-2 border-[#2A3C36] rounded-xl">
          <Image src={WeCan} alt="We Can Image" className="md:ml-[25px] lg:w-[88%] lg:mt-6 lg:ml-10" />

          <div className="flex flex-col mt-2 p-3">
            <div className="flex items-center pb-2">
              <h5 className="font-manrope font-bold text-2xl lg:hidden">
                Flowpilot
              </h5>
              <div className="flex items-center md:ml-[7px] lg:ml-[113px] gap-2 py-2 px-3 rounded-full bg-[#003D25] ">
                <Image src={Check} alt="Check Icon" />
                <p className="text-[#B2B2B2] text-xs">
                  20% high conversion than average in first week
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25] lg:w-[300px]">
                <Image src={Check} alt="Check Icon" />
                <p className="text-[#B2B2B2] text-xs">
                  Clean and modern design with clear CTA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 (Middle) */}
        <div className="md:w-[593px] lg:w-[600px] big bg-[#151E1B] p-3 border-2 border-[#2A3C36] rounded-xl z-10">
          <Image src={Instant} alt="Instant Image" className="h-[372px]" />

          <div className="flex flex-col mt-2 p-3">
            <div className="flex justify-between items-center pb-2">
              <h5 className="font-manrope font-bold text-2xl">Flowpilot</h5>
              <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25]">
                <Image src={Check} alt="Check Icon" />
                <p className="text-[#B2B2B2] text-xs">
                  20% high conversion than average in first week
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25] max-w-[300px]">
                <Image src={Check} alt="Check Icon" />
                <p className="text-[#B2B2B2] text-xs">
                  Clean and modern design with clear CTA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 (Right) */}
        <div className="absolute md:-right-93 lg:-right-61 xl:-right-10 w-[440px] h-full bg-[#151E1B] p-3 border-2 border-[#2A3C36] rounded-xl">
          <Image src={Learn} alt="Learn Image" className="w-[%]" />

          <div className="flex flex-col mt-2 p-3">
            <div className="flex justify-between items-center pb-2">
              <h5 className="font-manrope font-bold text-2xl">GrowthSummit</h5>
              <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25] ml-[82px]">
                <Image src={Check} alt="Check Icon" />
                <p className="text-[#B2B2B2] text-xs w-[268px]">
                  20% high conversion than average in first week
                </p>
              </div>
            </div>

            <div className="flex justify- ml-[300px] w-[268px]">
              <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25] max-w-[300px]">
                <Image src={Check} alt="Check Icon" />
                <p className="text-[#B2B2B2] text-xs">
                  Clean and modern design with clear CTA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0.6)_100%)] mix-blend-overlay"></div>
      </div>

      {/* Small Device Card Container */}
      <div className="md:hidden">
        <SmallContainer />
      </div>

      {/* Case Studies Button Container */}
      <div className="w-[244px] mx-auto">
        <Button>I want similar results</Button>
      </div>
    </section>
  );
};

export default CaseStudies;
