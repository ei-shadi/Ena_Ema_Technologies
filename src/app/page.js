import AboutUs from "@/components/AboutUs";
import CarouselCard from "@/components/CarouselCard";
import ChoosePlan from "@/components/Choose Plan/ChoosePlan";
import FromIdea from "@/components/FromIdea";
import GotQuestion from "@/components/GotQuestion";
import Hero from "@/components/Hero";
import ReadyToTurn from "@/components/ReadyToTurn";
import WhyBusiness from "@/components/WhyBusiness";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Carousel Card Section */}
      <section className="bg-[#151E1B] pt-3 md:pt-8 lg:pt-0">
        <CarouselCard />
      </section>

      {/* Why Business Section */}
      <section className="bg-[#151E1B] py-16 lg:py-[120px]">
        <WhyBusiness />
      </section>

      {/* Case Studies Section */}
      <section></section>

      {/* Choose Your Plan Section */}
      <section className="bg-[#0A0F0D] py-16 lg:py-[120px]">
        <ChoosePlan />
      </section>

      {/* From Idea Section */}
      <section className="bg-[#151E1B] py-16 lg:py-[120px]">
        <FromIdea />
      </section>

      {/* About Us Section */}
      <section className="bg-[#151E1B] py-16 lg:py-[120px]">
        <AboutUs />
      </section>

      {/* Got Questions Section */}
      <section className="bg-[#151E1B] py-16 lg:py-[120px]">
        <GotQuestion />
      </section>

      {/* Ready To Turn Section */}
      <section>
        <ReadyToTurn />
      </section>
    </main>
  );
};

export default Home;
