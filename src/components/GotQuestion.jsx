import Image from "next/image";
import Dot from "../../public/assets/icons/Ellipse 5.png"

const GotQuestion = () => {
  return (
    <section>
      <h1 className="pb-12 w-[90%] mx-auto text-4xl text-white text-center lg:text-5xl font-medium font-manrope">Got Questions <span className="text-[#1FFFA5]">?</span> We’ve Got The Answers</h1>

      {/* Answer Container */}
      <div className=" w-[90%] md:w-[88%] lg:w-[60%] mx-auto flex flex-col gap-6">

        {/* Answer-1 */}
        <div className="p-6 bg-[#192420] rounded-xl ">
          <Image src={Dot} alt="Dot" width={12} />
          <h4 className="font-manrope text-white text-2xl font-bold py-6">How long does it take?</h4>
          <p className="text-[#B2B2B2] text-sm md:text-lg w-[313px] md:w-[568px] lg:w-full">5 days from start to finish - design, development, and deployment included.</p>
        </div>
        
        
        {/* Answer-2 */}
        <div className="p-6 bg-[#192420] rounded-xl ">
          <Image src={Dot} alt="Dot" width={12} />
          <h4 className="font-manrope text-white text-2xl font-bold py-6">Do you provide revisions?</h4>
          <p className="text-[#B2B2B2] text-sm md:text-lg w-[313px] md:w-[568px] lg:w-full">Yes, unlimited revisions until you're 100% satisfied with the final result.</p>
        </div>
        
        
        {/* Answer-3 */}
        <div className="p-6 bg-[#192420] rounded-xl ">
          <Image src={Dot} alt="Dot" width={12} />
          <h4 className="font-manrope text-white text-2xl font-bold py-6">What's the payment process?</h4>
          <p className="text-[#B2B2B2] text-sm md:text-lg w-[313px] md:w-[568px] lg:w-full">50% upfront to get started, 50% after final delivery and your approval.</p>
        </div>
        
        
        {/* Answer-4 */}
        <div className="p-6 bg-[#192420] rounded-xl ">
          <Image src={Dot} alt="Dot" width={12} />
          <h4 className="font-manrope text-white text-2xl font-bold py-6">Can you deploy on my hosting?</h4>
          <p className="text-[#B2B2B2] text-sm md:text-lg w-[313px] md:w-[568px] lg:w-full">Absolutely! Deployment is included in every package, on your hosting or ours.</p>
        </div>

        
        {/* Answer-5 */}
        <div className="p-6 bg-[#192420] rounded-xl ">
          <Image src={Dot} alt="Dot" width={12} />
          <h4 className="font-manrope text-white text-2xl font-bold py-6">Why are your prices so affordable compared to agencies?</h4>
          <p className="text-[#B2B2B2] text-sm md:text-lg w-[313px] md:w-[568px] lg:w-full">We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.</p>
        </div>
      </div>

    </section>
  );
};

export default GotQuestion;