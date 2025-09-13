import Image from "next/image";
import Logo from "../../public/assets/images/Logo.svg"
import { PiLock, PiSparkleBold } from "react-icons/pi";
import Button from "./shared/Button";
import User from "../../public/assets/icons/User.png"
import Email from "../../public/assets/icons/EnvelopeSimpleOpen.png"
import Phone from "../../public/assets/icons/Phone.png";
import { TfiCheck } from "react-icons/tfi";
import { GoStar } from "react-icons/go";

const Hero = () => {
  return (
    <section className="min-h-[100vh] w-full relative bg-[#151f1b]">
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
        <div className="">

          {/* Container for input field and button */}
          <div className="border-[1px] border-[#2A3C36] p-5 md:p-9 w-[371px] md:w-[614px] lg:w-[794px] mx-auto rounded-lg shadow-2xl shadow-[rgba(31,255,165,0.1)] ">
            {/* Input fields */}
            <div className=" flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
              {/* User Input Field */}
              <div className="flex items-center relative">
                <Image src={User} alt="User" className="w-[14px] h-[14px] absolute top-1/2 left-5 -translate-y-1/2" />
                <input type="text"
                  className="py-[18px] pl-10 pr-40 md:pr-0 lg:pr-14 text-xs  text-[#B2B2B2] border-[1px] border-[#2A3C36] rounded-[4px] focus:outline-none focus:border-[#1FFFA5]"
                  placeholder="Your name" />
              </div>

              {/* Email Input Field */}
              <div className="flex items-center relative">
                <Image src={Email} alt="User" className="w-[14px] h-[14px] absolute top-1/2 left-5 -translate-y-1/2" />
                <input type="text"
                  className="py-[18px] pl-10 pr-40 md:pr-0 lg:pr-14 text-xs text-[#B2B2B2] border-[1px] border-[#2A3C36] rounded-[4px] focus:outline-none focus:border-[#1FFFA5]"
                  placeholder="Email Address" />
              </div>

              {/* Number Input Field */}
              <div className="flex items-center relative">
                <Image src={Phone} alt="User" className="w-[14px] h-[14px] absolute top-1/2 left-5 -translate-y-1/2" />
                <input type="text"
                  className="py-[18px] pl-10 pr-40 md:pr-0 lg:pr-14 text-xs text-[#B2B2B2] border-[1px] border-[#2A3C36] rounded-[4px] focus:outline-none focus:border-[#1FFFA5]"
                  placeholder="Phone Number" />
              </div>


            </div>

            {/* Button */}
            <div className="w-[335px] mx-auto md:w-full">
              <Button>
                Get my high-converting landing page
              </Button>
            </div>

          </div>

          {/* Text & Icons */}
          <div className="flex flex-col md:flex-row md:items-center justify-center mt-4 w-[360px] md:w-full mx-auto gap-0 md:gap-16">
            <div className="flex items-center gap-28 md:gap-16">
              {/* Lock Icon */}
              <div className="flex items-center gap-2 text-xs text-[#B2B2B2]">
                <PiLock />
                <p>SSL secure</p>
              </div>


              {/* Money Back Icon */}
              <div className="flex items-center gap-2 text-xs text-[#B2B2B2]">
                <TfiCheck />
                <p>Money-back guaranteed</p>
              </div>
            </div>


            {/* Satisfaction Icon */}
            <div className="flex items-center gap-2 mt-2 md:mt-0 text-xs text-[#B2B2B2]">
              <GoStar />
              <p>Satisfaction guaranteed</p>
            </div>


          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;