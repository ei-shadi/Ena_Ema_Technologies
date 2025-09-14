import Image from "next/image";
import LargePhoto from "../../public/assets/images/LargePhoto.png";
import MediumPhoto1 from "../../public/assets/images/MediumPhoto1.png";
import MediumPhoto2 from "../../public/assets/images/MediumPhoto2.png";
import SmallPhoto1 from "../../public/assets/images/SmallPhoto1.png";
import SmallPhoto2 from "../../public/assets/images/SmallPhoto2.png";

const CarouselCard = () => {
  return (
    <section className="bg-[#151E1B]">
      {/* Large Device */}
      <div className="relative hidden lg:block">
        <Image
          src={LargePhoto}
          alt="Photo1"
          className="h-[490px] w-full object-cover "
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_70%,rgba(0,0,0,0.7)_100%)]"></div>
      </div>

      {/* Medium Device */}
      <div className="relative items-center gap-5 hidden md:flex lg:hidden">
        <Image
          src={MediumPhoto1}
          alt="Photo1"
          className="flex-1 h-[470px] object-cover rounded-lg"
        />
        <Image
          src={MediumPhoto2}
          alt="Photo2"
          className="object-cover"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_70%,rgba(0,0,0,0.7)_100%)]"></div>
      </div>

      {/* Small Device */}
      <div className="relative flex items-center gap-3 md:hidden">
        <Image
          src={SmallPhoto1}
          alt="Photo1"
          className="flex-1 h-[240px]"
        />
        <Image
          src={SmallPhoto2}
          alt="Photo2"
          className="object-cover"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_70%,rgba(0,0,0,0.7)_100%)]"></div>
      </div>
    </section>
  );
};

export default CarouselCard;
