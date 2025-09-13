import Image from 'next/image'
import RocketLaunch from "../../public/assets/icons/RocketLaunch.png"
import Palette from "../../public/assets/icons/Palette.png"
import Lightning from "../../public/assets/icons/Lightning.png"
import CurrencyDollar from "../../public/assets/icons/CurrencyDollar.png"
import ArrowsClockwise from "../../public/assets/icons/ArrowsClockwise.png";
import Trophy from "../../public/assets/icons/Trophy.png";


const WhyBusiness = () => {
  return (
    <section className="w-[85%] md:w-[80%] mx-auto text-white text-center">
      {/* Title Container */}
      <div className="pb-12">
        <h1 className="text-4xl lg:text-5xl w-[330px] md:w-[500px] lg:w-full font-manrope font-medium pb-3 text-center mx-auto">Why Businesses <span className="text-[#1FFFA5]">Trust Us</span> With Their Designs</h1>

        <p className="text-sm md:text-lg text-[#F5F5F5] w-[330px] md:w-[600px] lg:w-full text-center mx-auto">
          We combine proven conversion frameworks with agency-level design to deliver results that matter.
        </p>
      </div>

      {/* Card Container */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-9'>
        {/* Card-1 */}
        <div className="p-6 bg-[#192420] rounded-lg">
          <Image src={RocketLaunch} alt="Rocket Launch" width={40} />

          {/* Text Container */}
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">Proven Conversion Framework</h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2]">Designs based on 100+ tested layouts that actually convert visitors into customers.</p>
          </div>
        </div>
        {/* Card-2 */}
        <div className="p-6 bg-[#192420] rounded-lg">
          <Image src={Palette} alt="Rocket Launch" width={40} />

          {/* Text Container */}
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">Agency Level Design</h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2]">Modern, premium, and tailored for your brand - without the agency price tag.</p>
          </div>
        </div>
        {/* Card-3 */}
        <div className="p-6 bg-[#192420] rounded-lg">
          <Image src={Lightning} alt="Rocket Launch" width={34} />

          {/* Text Container */}
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">5-day Guaranteed Delivery</h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2]">With a highly professional team, we deliver on time, everytime.</p>
          </div>
        </div>
        {/* Card-4 */}
        <div className="p-6 bg-[#192420] rounded-lg">
          <Image src={CurrencyDollar} alt="Rocket Launch" width={30} />

          {/* Text Container */}
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">Transparent Pricing</h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2]">No hidden fees, just clear value. What you see is what you pay.</p>
          </div>
        </div>
        {/* Card-5 */}
        <div className="p-6 bg-[#192420] rounded-lg">
          <Image src={ArrowsClockwise} alt="Rocket Launch" width={37} />

          {/* Text Container */}
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">Revisions Until You're Happy</h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2]">We keep working until it's right. Your satisfaction is guaranteed.</p>
          </div>
        </div>
        {/* Card-6 */}
        <div className="p-6 bg-[#192420] rounded-lg">
          <Image src={Trophy} alt="Rocket Launch" width={40} />

          {/* Text Container */}
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">Results That Speak</h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2]">Our pages consistently outperform industry averages for conversions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBusiness;