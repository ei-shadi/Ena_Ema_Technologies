import Image from "next/image";
import Logo from "../../public/assets/images/Logo.svg"
import { PiSparkleBold } from "react-icons/pi";

import UserField from "../components/shared/UserField";

const Hero = () => {
  return (
    <section className=" h-[98vh] md:h-[100vh] xl:h-[90vh] w-full relative bg-[#151f1b]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(31,255,165,0.13), transparent 70%), rgba(21,30,27,1)",
        }}


      />
      {/* Logo */}
      <Image
        src={Logo}
        alt="Logo"
        className="w-[80px] h-[18px] md:w-[120px] md:h-[27px] absolute top-[4%] md:top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      />

      {/* Other Content */}
      <div className="absolute z-10 top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 ">
        {/* Headline and Description */}
        <div className="mb-12">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-[#192420] px-4 py-2 rounded-full border-t-[1px] border-[#1FFFA5] w-[334px] mx-auto mb-6">
            <PiSparkleBold className="w-[15px] h-[15px] text-[#1FFFA5]" />
            <p className="text-[#B2B2B2] text-xs">Trusted by 30+ startups & entrepreneurs worldwide</p>
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-[#F5F5F5] mx-auto w-[361px] md:w-[614px] lg:w-[1020px] text-[36px] md:text-[64px] lg:text-7xl text-center font-bold pb-4 font-manrope leading-tight">Strategic Landing Pages That Convert From Just <span className="text-[#1FFFA5]">$200</span>
            </h1>

            <p className="text-[#F5F5F5] text-xs md:text-lg text-center w-[370px] md:w-[614px] lg:max-w-[840px] mx-auto leading-relaxed">Stop wasting traffic on generic pages. We deliver premium, conversion-focused landing pages designed, developed, and launched in just 5 days.</p>
          </div>
        </div>

        {/* Input Field And Button */}
        <div>
          <UserField glowType="outside"/>
        </div>
      </div>

    </section>
  );
};

export default Hero;