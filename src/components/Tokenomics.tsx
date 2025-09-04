import Image from "next/image";
import { MAIN_IMAGE } from "~/data";

type Props = {};

const Tokenomics = (props: Props) => {
  return (
    <section className="relative py-4">
      <div className="container mx-auto px-4 text-center">
        {/* Main Title */}
        <div className="mb-20">
          <h1 className="michi-title text-5xl md:text-7xl">Tokenomics</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cat-brown/20 animate-pulse-glow">
              <Image
                src={MAIN_IMAGE}
                alt="blacky"
                width={384}
                height={384}
                priority
                className="w-40 h-40 object-cover"
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="md:text-3xl text-2xl font-black py-4 text-cat-brown">
                Total Supply
              </h2>

              <p className="text-4xl text-cat-brown/80 font-bold leading-relaxed">
                559,343,847
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cat-brown/20 animate-pulse-glow">
              <Image
                src={MAIN_IMAGE}
                alt="blacky"
                width={384}
                height={384}
                priority
                className="w-40 h-40 object-cover"
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="md:text-3xl text-2xl font-black py-4 text-cat-brown">
                LP Burned
              </h2>

              <p className="text-4xl text-cat-brown/80 font-bold leading-relaxed">
                100%
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cat-brown/20 animate-pulse-glow">
              <Image
                src={MAIN_IMAGE}
                alt="blacky"
                width={384}
                height={384}
                priority
                className="w-40 h-40 object-cover"
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="md:text-3xl text-2xl font-black py-4 text-cat-brown">
                Tax
              </h2>

              <p className="text-4xl text-cat-brown/80 font-bold leading-relaxed">
                0%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
