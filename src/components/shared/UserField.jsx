import Image from "next/image";
import Button from "./Button";
import User from "../../../public/assets/icons/User.png";
import Email from "../../../public/assets/icons/EnvelopeSimpleOpen.png";
import Phone from "../../../public/assets/icons/Phone.png";
import { TfiCheck } from "react-icons/tfi";
import { GoStar } from "react-icons/go";
import { PiLock } from "react-icons/pi";

const UserField = ({ glowType = "inset" }) => {
  // Compute shadow class dynamically
  const glowClass =
    glowType === "inset"
      ? " shadow-[inset_0_0_120px_rgba(31,255,165,0.2)]"
      : "shadow-[0_12px_32px_0_rgba(31,255,165,0.12)]";

  return (
    <div>
      {/* Main Box with dynamic glow */}
      <div
        className={`border border-[#2A3C36] p-5 md:p-9 w-[371px] md:w-[614px] lg:w-[794px] 
          mx-auto rounded-lg ${glowClass}`}
      >
        {/* Input fields */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          {/* User Input Field */}
          <div className="flex items-center relative">
            <Image
              src={User}
              alt="User"
              className="w-[14px] h-[14px] absolute top-1/2 left-5 -translate-y-1/2"
            />
            <input
              type="text"
              className="py-[18px] pl-10 pr-40 md:pr-0 lg:pr-14 text-xs text-[#B2B2B2] border border-[#2A3C36] rounded-[4px] focus:outline-none focus:border-[#1FFFA5]"
              placeholder="Your name"
            />
          </div>

          {/* Email Input Field */}
          <div className="flex items-center relative">
            <Image
              src={Email}
              alt="User"
              className="w-[14px] h-[14px] absolute top-1/2 left-5 -translate-y-1/2"
            />
            <input
              type="text"
              className="py-[18px] pl-10 pr-40 md:pr-0 lg:pr-14 text-xs text-[#B2B2B2] border border-[#2A3C36] rounded-[4px] focus:outline-none focus:border-[#1FFFA5]"
              placeholder="Email Address"
            />
          </div>

          {/* Number Input Field */}
          <div className="flex items-center relative">
            <Image
              src={Phone}
              alt="User"
              className="w-[14px] h-[14px] absolute top-1/2 left-5 -translate-y-1/2"
            />
            <input
              type="text"
              className="py-[18px] pl-10 pr-40 md:pr-0 lg:pr-14 text-xs text-[#B2B2B2] border border-[#2A3C36] rounded-[4px] focus:outline-none focus:border-[#1FFFA5]"
            />
          </div>
        </div>

        {/* Button */}
        <div className="w-[335px] mx-auto md:w-full">
          <Button>Get my high-converting landing page</Button>
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
  );
};

export default UserField;
