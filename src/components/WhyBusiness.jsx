"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import RocketLaunch from "../../public/assets/icons/RocketLaunch.png";
import Palette from "../../public/assets/icons/Palette.png";
import Lightning from "../../public/assets/icons/Lightning.png";
import CurrencyDollar from "../../public/assets/icons/CurrencyDollar.png";
import ArrowsClockwise from "../../public/assets/icons/ArrowsClockwise.png";
import Trophy from "../../public/assets/icons/Trophy.png";

// parent container for stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// title animation (like logo slide)
const titleVariants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const WhyBusiness = () => {
  return (
    <section className="w-[90%] md:w-[88%] lg:w-[85%] mx-auto text-[#F5F5F5] text-center">
      {/* Title Container */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="pb-12"
      >
        <motion.h1
          variants={titleVariants}
          className="text-4xl lg:text-5xl w-[330px] md:w-[500px] lg:w-full font-manrope font-medium pb-3 text-center mx-auto"
        >
          Why Businesses <span className="text-[#1FFFA5]">Trust Us</span> With
          Their Designs
        </motion.h1>

        <motion.p
          variants={titleVariants}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-sm md:text-lg text-[#F5F5F5] w-[330px] md:w-[600px] lg:w-full text-center mx-auto"
        >
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </motion.p>
      </motion.div>

      {/* Card Container with animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-9"
      >
        {/* Card-1 */}
        <motion.div variants={cardVariants} className="p-6 bg-[#192420] rounded-lg">
          <Image src={RocketLaunch} alt="Rocket Launch" width={40} />
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">
              Proven Conversion Framework
            </h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2] md:w-[152px] lg:w-full max-w-[328px]">
              Designs based on 100+ tested layouts that actually convert
              visitors into customers.
            </p>
          </div>
        </motion.div>

        {/* Card-2 */}
        <motion.div variants={cardVariants} className="p-6 bg-[#192420] rounded-lg">
          <Image src={Palette} alt="Palette" width={40} />
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">
              Agency Level Design
            </h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2] md:w-[152px] lg:w-full max-w-[328px]">
              Modern, premium, and tailored for your brand - without the agency
              price tag.
            </p>
          </div>
        </motion.div>

        {/* Card-3 */}
        <motion.div variants={cardVariants} className="p-6 bg-[#192420] rounded-lg">
          <Image src={Lightning} alt="Lightning" width={34} />
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">
              5-day Guaranteed Delivery
            </h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2] w-[310px] md:w-[152px] lg:w-full max-w-[328px]">
              With a highly professional team, we deliver on time, everytime.
            </p>
          </div>
        </motion.div>

        {/* Card-4 */}
        <motion.div variants={cardVariants} className="p-6 bg-[#192420] rounded-lg">
          <Image src={CurrencyDollar} alt="Currency Dollar" width={30} />
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">
              Transparent Pricing
            </h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2] md:w-[152px] lg:w-full max-w-[328px]">
              No hidden fees, just clear value. What you see is what you pay.
            </p>
          </div>
        </motion.div>

        {/* Card-5 */}
        <motion.div variants={cardVariants} className="p-6 bg-[#192420] rounded-lg">
          <Image src={ArrowsClockwise} alt="Arrows Clockwise" width={37} />
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">
              Revisions Until You're Happy
            </h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2] w-[310px] md:w-[152px] lg:w-full max-w-[328px]">
              We keep working until it's right. Your satisfaction is guaranteed.
            </p>
          </div>
        </motion.div>

        {/* Card-6 */}
        <motion.div variants={cardVariants} className="p-6 bg-[#192420] rounded-lg">
          <Image src={Trophy} alt="Trophy" width={40} />
          <div className="text-left">
            <h4 className="text-lg font-medium font-manrope text-[#F5F5F5] pt-9 pb-3">
              Results That Speak
            </h4>
            <p className="text-sm md:text-xs lg:text-sm text-[#B2B2B2] md:w-[152px] lg:w-full max-w-[328px]">
              Our pages consistently outperform industry averages for
              conversions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyBusiness;
