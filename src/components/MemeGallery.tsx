import Image from "next/image";
import { MEME_DESCRIPTION, MEME_HEADER, MEMES } from "~/data";

const MemeGallery = () => {
  return (
    <section id="memes" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-cat-brown mb-4 font-comic">
            {MEME_HEADER}
          </h2>
          <p className="text-lg text-cat-brown-light">{MEME_DESCRIPTION}</p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          {MEMES.map((meme, index) => (
            <div
              key={index}
              className="p-4 group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={meme.src}
                  alt={meme.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemeGallery;
