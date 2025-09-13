import Arrow from "../../../public/assets/icons/ArrowRight.png"
import Image from "next/image";

const Button = ({ children }) => {
  return (
    <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#1FFFA5] rounded-lg shadow-[0_9px_24px_0_rgba(31,255,165,0.25),inset_0_7px_8px_0_rgba(255,255,255,0.5)] hover:bg-[#002013] hover:text-white text-[#002013] cursor-pointer">
      <p className="font-semibold text-xs md:text-lg">{children}</p>

      <Image
        src={Arrow}
        alt="Arrow"
        className=""
      />
    </button>
  );
};

export default Button;