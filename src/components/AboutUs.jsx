import Image from "next/image";
import Star from "../../public/assets/icons/Fill Star.png"
import Sarah from "../../public/assets/images/Sarah Johnson.png"
import Mike from "../../public/assets/images/Mike Chen.png"
import Amanda from "../../public/assets/images/Amanda Rodriguez.png"
import David from "../../public/assets/images/David Lee.png"


const AboutUs = () => {
  return (
    <section>
      
{/* About Title Container */}
<div className="w-[90%] md:w-[88%] lg:w-[85%] mx-auto text-white text-left pb-12">
<h1 className="text-4xl lg:text-5xl font-manrope font-medium pb-3 w-[361px] md:w-full">What Our Clients Are Saying <span className="text-[#1FFFA5]">About Us</span>
</h1>

<p className="text-[#F5F5F5] text-sm md:text-lg w-[361px] md:w-full">
  Real feedback from real businesses who've seen real results.
</p>
</div>


{/* Feedback Card Container */}

<div className="flex gap-6 ml-[20px] md:ml-[46px] lg:ml-[7%] overflow-hidden">

{/* Card-1 */}
<div className="bg-[#192420] p-6 rounded-xl w-[380px] md:w-[400px] lg:w-[350px]">
    {/* Star Container */}
    <div className="flex gap-2">
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    </div>

    {/* Feedback Content */}
    <div>
    <p className="text-[#F5F5F5] text-xs md:text-lg w-[275px] pt-6 pb-9">"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!"</p>
    </div>

    {/* Image and Name Container */}
    <div className="flex items-center gap-3">
      <Image src={Sarah} alt="Sarah Johnson Logo" width={36} />

      <div className="text-[#F5F5F5] pb-[2px]">
        <h6 className="font-medium text-lg font-manrope">Sarah Johnson</h6>
        <p className="text-xs">SaaS Founder</p>
      </div>
    </div>

</div>
{/* Card-2 */}
<div className="bg-[#192420] p-6  rounded-xl md:w-[400px] lg:w-[350px]">
    {/* Star Container */}
    <div className="flex gap-2">
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    </div>

    {/* Feedback Content */}
    <div>
    <p className="text-[#F5F5F5] text-xs md:text-lg w-[300px] pt-6 pb-9">“Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before."</p>
    </div>

    {/* Image and Name Container */}
    <div className="flex items-center gap-3">
      <Image src={Mike} alt="Mike Chen Logo" width={36} />

      <div className="text-[#F5F5F5] pb-[2px]">
        <h6 className="font-medium text-lg font-manrope">Mike Chen</h6>
        <p className="text-xs">Fitness Coach</p>
      </div>
    </div>

</div>
{/* Card-3 */}
<div className="bg-[#192420] p-6  rounded-xl md:w-[400px] lg:w-[350px]">
    {/* Star Container */}
    <div className="flex gap-2">
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    </div>

    {/* Feedback Content */}
    <div>
    <p className="text-[#F5F5F5] text-xs md:text-lg w-[285px] pt-6 pb-9">"Best investment for my business. The ROI was immediate and substantial. Will definitely order again."</p>
    </div>

    {/* Image and Name Container */}
    <div className="flex items-center gap-3">
      <Image src={Amanda} alt="Amanda Rodriguez Logo" width={36} />

      <div className="text-[#F5F5F5] pb-[2px]">
        <h6 className="font-medium text-lg font-manrope">Amanda Rodriguez</h6>
        <p className="text-xs">E-Commerce Owner</p>
      </div>
    </div>

</div>
{/* Card-4 */}
<div className="bg-[#192420] p-6  rounded-xl md:w-[400px] lg:w-[350px]">
    {/* Star Container */}
    <div className="flex gap-2">
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    </div>

    {/* Feedback Content */}
    <div>
    <p className="text-[#F5F5F5] text-xs md:text-lg w-[275px] pt-6 pb-9">"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!"</p>
    </div>

    {/* Image and Name Container */}
    <div className="flex items-center gap-3">
      <Image src={David} alt="David Lee Logo" width={36} />

      <div className="text-[#F5F5F5] pb-[2px]">
        <h6 className="font-medium text-lg font-manrope">David Lee</h6>
        <p className="text-xs">SaaS Founder</p>
      </div>
    </div>

</div>
{/* Card-4 */}
<div className="bg-[#192420] p-6  rounded-xl md:w-[400px] lg:w-[350px]">
    {/* Star Container */}
    <div className="flex gap-2">
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    <Image src={Star} alt="Star" width={16}/>
    </div>

    {/* Feedback Content */}
    <div>
    <p className="text-[#F5F5F5] text-xs md:text-lg w-[275px] pt-6 pb-9">"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!"</p>
    </div>

    {/* Image and Name Container */}
    <div className="flex items-center gap-3">
      <Image src={David} alt="David Lee Logo" width={36} />

      <div className="text-[#F5F5F5] pb-[2px]">
        <h6 className="font-medium text-lg font-manrope">David Lee</h6>
        <p className="text-xs">SaaS Founder</p>
      </div>
    </div>

</div>

</div>


    </section>
  );
};

export default AboutUs;