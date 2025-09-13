import Hero from "@/components/Hero";
import WhyBusiness from "@/components/WhyBusiness";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Why Business Section */}
      <section className="bg-[#151E1B] py-16 lg:py-[120px]">
        <WhyBusiness />
      </section>
    </main>
  );
};

export default Home;
