import UserField from "./shared/UserField";

const ReadyToTurn = () => {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-[120px] text-white text-center"
      style={{
        background: `
          radial-gradient(ellipse 60% 80% at 0% 50%, rgba(31,255,165,0.1), transparent 70%),
          radial-gradient(ellipse 60% 80% at 100% 50%, rgba(31,255,165,0.08), transparent 70%),
          #0A0F0D
        `,
      }}
    >
      <div className="relative z-10 pb-12 w-[90%] md:w-[90%] mx-auto">
        {/* Small screens */}
        <div className="text-4xl font-bold font-manrope mx-auto pb-4 leading-tight md:hidden">
          <h1>Ready to Turn Visitors</h1>
          <h1>
            Into <span className="text-[#1FFFA5]">Real Customers?</span>
          </h1>
        </div>

        {/* Medium screens */}
        <div className="hidden md:block lg:hidden text-[64px] font-bold font-manrope mx-auto pb-4 leading-tight">
          <h1>Ready to Turn</h1>
          <h1>Visitors Into</h1>
          <h1 className="text-[#1FFFA5]">Real Customers?</h1>
        </div>

        {/* Large screens */}
        <div className="hidden lg:block text-7xl font-bold font-manrope mx-auto pb-4 leading-tight">
          <h1>Ready to Turn Visitors Into</h1>
          <h1 className="text-[#1FFFA5]">Real Customers?</h1>
        </div>

        <p className="text-base lg:text-lg text-[#F5F5F5] md:w-[450px] lg:w-[500px] mx-auto">
          Don't settle for an average page. Get a premium conversion focused landing page that pays for itself.
        </p>
      </div>

      {/* Input field + button */}
      <UserField glowType="inset" 
      />
    </section>
  );
};

export default ReadyToTurn;
