import Image from "next/image";
import { DESCRIPTION, MAIN_IMAGE, NAME, SHORT_DESCRIPTION } from "~/data";

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="michi-title animate-bounce-gentle">${NAME}</h1>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-8 border-cat-brown/20 animate-pulse-glow">
              <Image
                src={MAIN_IMAGE}
                alt="blacky"
                width={384}
                height={384}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold michi-card py-4 text-cat-brown mb-8  font-comic">
            {SHORT_DESCRIPTION}
          </h2>

          <div className="max-w-3xl mx-auto p-8">
            <p className="text-lg md:text-xl text-cat-brown/80 font-medium leading-relaxed">
              {DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
