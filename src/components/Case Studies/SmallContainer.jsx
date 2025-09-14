import Image from "next/image";
import Check from "../../../public/assets/icons/FillCheck.png";
import Instant from "../../../public/assets/images/Instant.png";
import Learn from "../../../public/assets/images/Small 3.png";
import WeCan from "../../../public/assets/images/Small 1.png";


const SmallContainer = () => {
  return (
    <div className="relative flex flex-col gap-4 w-[90%] py-12 mx-auto md:hidden">

      {/* Card-1 */}
      <div className="bg-[#151E1B] p-3 border-2 border-[#2A3C36] rounded-xl">
        <Image src={WeCan} alt="Instant Image" className="h-[200px] w-[340px] mx-auto" />

        {/* Text Container */}
        <div className="flex flex-col gap-4 justify-between p-3">

          <h5 className="font-manrope font-bold text-2xl text-left">Flowpilot</h5>

          <div className="flex flex-col gap-2">

            {/* box-1 */}
            <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25]">
              <Image src={Check} alt="Check Icon" />
              <p className="text-[#B2B2B2] text-xs">
                20% high conversion than average in first week
              </p>
            </div>

            {/* box-2 */}
            <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25] max-w-[300px]">
              <Image src={Check} alt="Check Icon" />
              <p className="text-[#B2B2B2] text-xs">
                Clean and modern design with clear CTA
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Card-2 */}
      <div className="bg-[#151E1B] p-3 border-2 border-[#2A3C36] rounded-xl">
        <Image src={Instant} alt="Instant Image" className="h-[200px] w-[340px] mx-auto" />

        {/* Text Container */}
        <div className="flex flex-col gap-4 justify-between p-3">

          <h5 className="font-manrope font-bold text-2xl text-left">EliteClub</h5>

          <div className="flex flex-col gap-2">

            {/* box-1 */}
            <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25]">
              <Image src={Check} alt="Check Icon" />
              <p className="text-[#B2B2B2] text-xs">
                20% high conversion than average in first week
              </p>
            </div>

            {/* box-2 */}
            <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25] max-w-[300px]">
              <Image src={Check} alt="Check Icon" />
              <p className="text-[#B2B2B2] text-xs">
                Clean and modern design with clear CTA
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Card-3 */}
      <div className="bg-[#151E1B] p-3 border-2 border-[#2A3C36] rounded-xl">
        <Image src={Learn} alt="Instant Image" className="h-[200px] w-[340px] mx-auto" />

        {/* Text Container */}
        <div className="flex flex-col gap-4 justify-between p-3">

          <h5 className="font-manrope font-bold text-2xl text-left">GrowthSummit</h5>

          <div className="flex flex-col gap-2">

            {/* box-1 */}
            <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25]">
              <Image src={Check} alt="Check Icon" />
              <p className="text-[#B2B2B2] text-xs">
                20% high conversion than average in first week
              </p>
            </div>

            {/* box-2 */}
            <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-[#003D25] max-w-[300px]">
              <Image src={Check} alt="Check Icon" />
              <p className="text-[#B2B2B2] text-xs">
                Clean and modern design with clear CTA
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default SmallContainer;