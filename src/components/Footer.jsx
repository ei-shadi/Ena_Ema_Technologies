import Image from "next/image";
import Logo from "../../public/assets/images/Logo.png";
import LinkedIn from "../../public/assets/icons/mingcute_linkedin-line.png";
import Facebook from "../../public/assets/icons/qlementine-icons_facebook-16.png";
import Instagram from "../../public/assets/icons/lets-icons_insta.png";
import Behance from "../../public/assets/icons/ri_behance-fill.png";
import Dribble from "../../public/assets/icons/icon-park-outline_dribble.png";

const Footer = () => {
  return (
    <section className="bg-[#1FFFA5]">
      <div className="py-6 md:py-16 w-[85%] md:w-[80%] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Logo */}
        <div className="md:mx-0 flex items-center justify-between">
          <Image src={Logo} alt="Logo" className="w-[100px] h-6 lg:w-[160px] lg:h-9"/>

          {/* Center Text */}
          <p className="text-[#0A0F0D] text-xs md:text-center md:w-fit text-center md:hidden w-[130px] ">
            © All rights reserved to Ena Ema Technologies
          </p>
        </div>


        {/* Center Text */}
        <p className="text-[#0A0F0D] text-xs md:text-center md:w-fit text-center hidden md:flex">
          © All rights reserved to Ena Ema Technologies
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-2 lg:gap-4 justify-end">
          <Image src={LinkedIn} alt="LinkedIn" width={20} />
          <Image src={Facebook} alt="Facebook" width={20} />
          <Image src={Instagram} alt="Instagram" width={20} />
          <Image src={Behance} alt="Behance" width={20} />
          <Image src={Dribble} alt="Dribble" width={20} />
        </div>
      </div>
    </section>
  );
};

export default Footer;