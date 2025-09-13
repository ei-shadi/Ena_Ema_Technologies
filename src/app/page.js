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
<section></section>

      {/* Why Business Section */}
      <section className="bg-[#151E1B] py-16 lg:py-[120px]">
        <WhyBusiness />
      </section>

{/* Case Studies Section */}
<section></section>

      {/* Choose Your Plan Section */}
      <section></section>

      {/* From Idea Section */}
      <section></section>

      {/* About Us Section */}
      <section></section>

      {/* Got Questions Section */}
      <section></section>

      {/* Ready To Turn Section */}
      <section className="">
        <ReadyToTurn />
      </section>
    </main>
  );
};

export default Home;
