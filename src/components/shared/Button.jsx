import Image from "next/image";
import Arrow from "../../../public/assets/icons/ArrowRight.png";
import Vector from "../../../public/assets/icons/Vector.png";

const Button = ({
  children,
  bgColor = "bg-[#1FFFA5]",
  textColor = "text-[#002013]",
  hoverBgColor = "hover:bg-[#002013]",
  hoverTextColor = "hover:text-white",
  shadowColor = "shadow-[0_9px_24px_0_rgba(31,255,165,0.25),inset_0_7px_8px_rgba(31,255,165,0.5)]",
  defaultIcon = Arrow,  
  hoverIcon = Vector,    
}) => {
  return (
    <button
      className={`group w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg cursor-pointer font-semibold text-[16px] transition-all duration-300 font-manrope
        ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor} ${shadowColor}`}
    >
      <p>{children}</p>

      {/* Icon swap on hover */}
      <span className="relative w-4 h-4 flex items-center justify-center">
        {/* Default icon */}
        <Image
          src={defaultIcon}
          alt="default-icon"
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Hover icon */}
        <Image
          src={hoverIcon}
          alt="hover-icon"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </span>
    </button>
  );
};

export default Button;
