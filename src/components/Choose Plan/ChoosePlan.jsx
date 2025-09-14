import Image from "next/image";
import Dot from "../../../public/assets/icons/Ellipse 5.png"
import Button from "../shared/Button";
import Vector from "../../../public/assets/icons/Vector.png"
import Arrow from "../../../public/assets/icons/ArrowRight.png"
import Lightning from "../../../public/assets/icons/Lightning.png"
import "./ChoosePlan.css";


const ChoosePlan = () => {
  return (
    <section className="w-[90%] md:w-[88%] lg:w-[85%] mx-auto text-[#F5F5F5] text-center flex flex-col gap-12">

      {/* Choose Plan Title Container */}
      <div className="text-left ">
        <h1 className="w-[381px] md:w-full leading-tight font-medium font-manrope text-4xl lg:text-5xl pb-3">Simple, Transparent Pricing — <span className="text-[#1FFFA5]">Choose Your Plan</span></h1>
        <p className="w-[360px] md:w-full text-sm md:text-lg">No hidden fees, no surprises. Just premium landing pages at unbeatable prices.</p>
      </div>

      {/* Card Container */}
      <div className="relative flex flex-col xl:flex-row justify-center items-center gap-12">

        {/* Card-1 */}
        <div className="bg-[#192420] w-full xl:w-[400px] h-[460px] p-9 rounded-2xl flex flex-col">
          {/* title */}
          <div>
            <div className="font-manrope font-bold flex justify-between text-2xl pb-2">
              <h3>Basic</h3>
              <h3 className="text-[#1FFFA5]">$200</h3>
            </div>
            <p className="text-sm text-left">Perfect for solopreneurs</p>
          </div>

          {/* divider */}
          <div className="border-t-[1px] border-[#2A3C36] my-12"></div>

          {/* Bullet Point */}
          <div className="text-[#B2B2B2] flex flex-col gap-3">

            {/* Point-1 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">1 Landing Page (Design + Development)</p>
            </div>

            {/* Point-2 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Hosting Deployment</p>
            </div>

            {/* Point-3 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">5-Day Delivery</p>
            </div>

            {/* Point-4 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Basic Support</p>
            </div>

          </div>

          {/* Button → mt-auto pushes it to the bottom */}
          <div className="mt-auto">
            <Button
              bgColor="bg-[#003D25]"
              textColor="text-[#00E58A]"
              defaultIcon={Vector}
              hoverIcon={Arrow}
              hoverBgColor="hover:bg-[#1FFFA5]"
              hoverTextColor="hover:text-[#002013]"
              shadowColor="shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            >
              Start My Project
            </Button>
          </div>
        </div>

        {/* Card-2 */}
        <div className="relative bg-[#192420] w-full xl:w-[400px] h-[460px] p-9 rounded-2xl flex flex-col border-[2px] border-[#1FFFA5]">

          {/* Badge */}
          <div className="absolute -top-4 left-20 -translate-x-1/2 bg-[#192420] border border-[#1FFFA5] rounded-full px-3 py-1.5 text-sm font-medium text-[#1FFFA5]">
            Most popular
          </div>
          {/* title */}
          <div>
            <div className="font-manrope font-bold flex justify-between text-2xl pb-2">
              <h3>Standard</h3>
              <h3 className="text-[#1FFFA5]">$300</h3>
            </div>
            <p className="text-sm text-left">Best balance of value & features</p>
          </div>

          {/* divider */}
          <div className="border-t-[1px] border-[#2A3C36] my-12"></div>

          {/* Bullet Point */}
          <div className="text-[#B2B2B2] flex flex-col gap-3">

            {/* Point-1 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Everything in Basic</p>
            </div>

            {/* Point-2 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Extra Custom Section</p>
            </div>

            {/* Point-3 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Free Hosting Setup</p>
            </div>

            {/* Point-4 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Free Consultation Call</p>
            </div>

            {/* Point-5 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Priority Support</p>
            </div>
          </div>

          {/* Button → mt-auto pushes it to the bottom */}
          <div className="mt-auto">
            <Button>
              Start My Project
            </Button>
          </div>
        </div>

        {/* Card-3 */}
        <div className="bg-[#192420] w-full xl:w-[400px] h-[460px] p-9 rounded-2xl flex flex-col">
          {/* title */}
          <div>
            <div className="font-manrope font-bold flex justify-between text-2xl pb-2">
              <h3>Premium</h3>
              <h3 className="text-[#1FFFA5]">$500</h3>
            </div>
            <p className="text-sm text-left">For brands & agencies</p>
          </div>

          {/* divider */}
          <div className="border-t-[1px] border-[#2A3C36] my-12"></div>

          {/* Bullet Point */}
          <div className="text-[#B2B2B2] flex flex-col gap-3">

            {/* Point-1 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Everything in Standard</p>
            </div>

            {/* Point-2 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Advanced Animations</p>
            </div>

            {/* Point-3 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Priority Delivery (3 Days)</p>
            </div>

            {/* Point-4 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">6 Months Free Support</p>
            </div>

            {/* Point-5 */}
            <div className="flex items-center gap-[14px]">
              <Image src={Dot} alt="Dot" width={6} />
              <p className="text-xs text-left">Performance Optimization</p>
            </div>
          </div>

          {/* Button → mt-auto pushes it to the bottom */}
          <div className="mt-auto">
            <Button
              bgColor="bg-[#003D25]"
              textColor="text-[#00E58A]"
              defaultIcon={Vector}
              hoverIcon={Arrow}
              hoverBgColor="hover:bg-[#1FFFA5]"
              hoverTextColor="hover:text-[#002013]"
              shadowColor="shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            >
              Start My Project
            </Button>
          </div>
        </div>

        {/* Card-4 */}
        <div className="hidden show">

          <div className="relative bg-[#192420] w-full xl:w-[400px] h-[460px] p-9 rounded-2xl flex flex-col border-[2px] border-[#1FFFA5]">

            {/* Badge */}
            <div className="absolute -top-4 left-20 -translate-x-1/2 bg-[#192420] border border-[#1FFFA5] rounded-full px-3 py-1.5 text-sm font-medium text-[#1FFFA5]">
              Enterprise Plan
            </div>
            {/* title */}
            <div>
              <div className="font-manrope font-bold flex justify-between text-2xl pb-2">
                <h3>Enterprise</h3>
                <h3 className="text-[#1FFFA5] text-sm">Custom Pricing</h3>
              </div>
              <p className="text-sm text-left">For enterprises & agencies</p>
            </div>

            {/* divider */}
            <div className="border-t-[1px] border-[#2A3C36] my-12"></div>

            {/* Bullet Point */}
            <div className="text-[#B2B2B2] flex flex-col gap-3">

              {/* Point-1 */}
              <div className="flex items-center gap-[14px]">
                <Image src={Dot} alt="Dot" width={6} />
                <p className="text-xs text-left">Everything in Premium</p>
              </div>

              {/* Point-2 */}
              <div className="flex items-center gap-[14px]">
                <Image src={Dot} alt="Dot" width={6} />
                <p className="text-xs text-left">Unlimited Landing Pages</p>
              </div>

              {/* Point-3 */}
              <div className="flex items-center gap-[14px]">
                <Image src={Dot} alt="Dot" width={6} />
                <p className="text-xs text-left">Fully Custom Design & Animations</p>
              </div>

              {/* Point-4 */}
              <div className="flex items-center gap-[14px]">
                <Image src={Dot} alt="Dot" width={6} />
                <p className="text-xs text-left">Dedicated Account Manager</p>
              </div>

              {/* Point-5 */}
              <div className="flex items-center gap-[14px]">
                <Image src={Dot} alt="Dot" width={6} />
                <p className="text-xs text-left">Long-term Support & Maintenance</p>
              </div>
            </div>

            {/* Button → mt-auto pushes it to the bottom */}
            <div className="mt-auto">
              <Button>
                Start My Project
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Limited Container */}
      <div className="flex items-center gap-5">
        <Image src={Lightning} alt="Lightning Icon" width={26} />

        <div className="text-left">
          <h4 className="font-manrope font-bold text-2xl">Limited Availability</h4>
          <p className="text-[#B2B2B2] text-sm w-[309px] md:w-full">We only onboard 5 new clients per month. 2 spots left for this month — secure yours today.</p>
        </div>
      </div>

      {/* Special Offers Container  */}
      <div className="bg-[#192420] py-6 px md:p-12 rounded-2xl ">
        {/* Title Container */}
        <div>
          <h1 className="font-manrope mx-auto md:w-full font-bold text-2xl md:text-4xl lg:text-5xl pb-3">Special Offer For Early Clients</h1>

          <p className="text-sm md:text-lg w-[313px] mx-auto md:w-full">Get 10% OFF + Free Hosting Setup when you book this week.</p>
        </div>

        {/* Button Container */}
        <div className="w-[267px] mx-auto mt-6 md:mt-12">
          <Button>
            Claim my 10% discount
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;