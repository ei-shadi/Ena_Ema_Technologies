import Image from "next/image";
import User from "../../public/assets/icons/User.png"
import Palette from "../../public/assets/icons/Palette.png"
import RocketLaunch from "../../public/assets/icons/RocketLaunch.png"


const FromIdea = () => {
  return (
    <section className=" text-[#F5F5F5] text-center">
      
      {/* From Idea Title Container */}
<div className="pb-12 w-[90%] md:w-[88%] lg:w-[70%] mx-auto">
<h1 className="text-4xl lg:text-5xl w-[330px] md:w-[550px] lg:w-full mx-auto font-medium font-manrope pb-3">From Idea to Live Landing Page in <span className="text-[#1FFFA5]">Just 5 Days</span></h1>
<p className="text-sm md:text-lg w-[330px] md:w-[430px] lg:w-full mx-auto">Our streamlined process ensures fast delivery without compromising quality.</p>
</div>


{/* From Idea Card Container */}
<div className="flex flex-col lg:flex-row justify-center items-center gap-9 lg:gap-6 md:w-[88%] lg:w-full max-w-[75%] mx-auto">

{/* Card-1 */}
<div className="w-[361px] md:w-[450px] lg:w-[350px] p-9 bg-[#192420] rounded-lg relative">
    {/* badge */}
    <div className="w-[70px] absolute -top-3 left-1/2 -translate-x-1/2">
      <p className="border-[#1FFFA5] border-[1px] py-[2px] text-[#1FFFA5] rounded-full text-xs">Day 1</p>
    </div>

{/* avatar */}
<div className="bg-[#003D25] rounded-full w-[84px] h-[84px] mx-auto mb-9 flex items-center justify-center">
<Image src={User} alt="User" width={30} className=""/>
</div>

{/* description */}
<div>
  <h5 className="text-xl font-medium font-manrope pb-2">Book Your Project</h5>
  <p className="text-[#B2B2B2] text-sm w-[300px] md:w-[350px] lg:w-[232px] mx-auto">Fill out a short form and we'll get started immediately.</p>
</div>

</div>


{/* Card-2 */}
<div className="w-[361px] md:w-[450px] lg:w-[350px] p-9 bg-[#192420] rounded-lg relative">
    {/* badge */}
    <div className="w-[70px] absolute -top-3 left-1/2 -translate-x-1/2">
      <p className="border-[#1FFFA5] border-[1px] py-[2px] text-[#1FFFA5] rounded-full text-xs">Day 2 - 4</p>
    </div>

{/* avatar */}
<div className="bg-[#003D25] rounded-full w-[84px] h-[84px] mx-auto mb-9 flex items-center justify-center">
<Image src={Palette} alt="User" width={30} className=""/>
</div>

{/* description */}
<div>
  <h5 className="text-xl font-medium font-manrope pb-2">Design & Development</h5>
  <p className="text-[#B2B2B2] text-sm md:w-[350px] lg:w-[232px] mx-auto">Unlimited revisions until perfect. You're involved every step.</p>
</div>

</div>


{/* Card-3 */}
<div className="w-[361px] md:w-[450px] lg:w-[350px] p-9 bg-[#192420] rounded-lg relative">
    {/* badge */}
    <div className="w-[70px] absolute -top-3 left-1/2 -translate-x-1/2">
      <p className="border-[#1FFFA5] border-[1px] py-[2px] text-[#1FFFA5] rounded-full text-xs">Day 5</p>
    </div>

{/* avatar */}
<div className="bg-[#003D25] rounded-full w-[84px] h-[84px] mx-auto mb-9 flex items-center justify-center">
<Image src={RocketLaunch} alt="User" width={30} className=""/>
</div>

{/* description */}
<div>
  <h5 className="text-xl font-medium font-manrope pb-2">Launch</h5>
  <p className="text-[#B2B2B2] text-sm md:w-[330px] lg:w-[232px] mx-auto">Fully deployed on your hosting and ready to convert visitors.</p>
</div>

</div>

</div>


    </section>
  );
};

export default FromIdea;