"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "../../public/assets/images/Logo.svg";
import { PiSparkleBold } from "react-icons/pi";
import UserField from "../components/shared/UserField";

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.2, 
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="h-[100vh] xl:h-[90vh] w-full relative bg-[#151f1b] overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(31,255,165,0.13), transparent 70%), rgba(21,30,27,1)",
        }}
      />

      {/* Logo Animation */}
      <motion.div
        className="absolute top-[4%] md:top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={Logo}
            alt="Logo"
            className="w-[80px] h-[18px] md:w-[120px] md:h-[27px]"
          />
        </motion.div>
      </motion.div>

      {/* Other Content (after logo) */}
      <motion.div
        className="absolute z-10 top-[10%] md:top-[15%] left-1/2 -translate-x-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Headline and Description */}
        <div className="mb-12">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 bg-[#192420] px-4 py-2 rounded-full border-t-[1px] border-[#1FFFA5] w-[334px] mx-auto mb-6"
          >
            <PiSparkleBold className="w-[15px] h-[15px] text-[#1FFFA5]" />
            <p className="text-[#B2B2B2] text-xs">
              Trusted by 30+ startups & entrepreneurs worldwide
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[#F5F5F5] mx-auto w-[361px] md:w-[614px] lg:w-[1020px] text-[36px] md:text-[64px] lg:text-7xl text-center font-bold pb-4 font-manrope leading-tight"
          >
            Strategic Landing Pages That Convert From Just{" "}
            <span className="text-[#1FFFA5]">$200</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[#F5F5F5] text-xs md:text-lg text-center w-[370px] md:w-[614px] lg:max-w-[840px] mx-auto leading-relaxed"
          >
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, and launched
            in just 5 days.
          </motion.p>
        </div>

        {/* Input Field And Button */}
        <motion.div variants={itemVariants}>
          <UserField glowType="outside" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
