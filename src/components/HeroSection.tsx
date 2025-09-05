import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CAROUSEL_DOTS, CAROUSEL_IMAGES, CAROUSEL_SLIDE_INTERVAL, DESCRIPTION, NAME, SHORT_DESCRIPTION } from "~/data";

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
          <HeroCarousel images={CAROUSEL_IMAGES} slideInterval={CAROUSEL_SLIDE_INTERVAL} dots={CAROUSEL_DOTS} />
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

const HeroCarousel = ({images, dots = false, slideInterval = 2000}: {images: string[], dots?: boolean, slideInterval?: number}) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const mouseStartX = useRef(0);
  const mouseEndX = useRef(0);
  const isDragging = useRef(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 2s
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [index]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, slideInterval);
  };

  const stopAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // ---------------- Touch Handlers ----------------
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  // ---------------- Mouse Drag Handlers ----------------
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    mouseEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    const diff = mouseStartX.current - mouseEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    isDragging.current = false;
  };

  // ---------------- Scroll Wheel Handler ----------------
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const scrollDirection = useRef<"next" | "prev" | null>(null);

  const handleWheel = (e: React.WheelEvent) => {
    stopAutoSlide();

    // save last direction
    if (e.deltaX > 0) scrollDirection.current = "next";
    else if (e.deltaX < 0) scrollDirection.current = "prev";

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    // after stops scrolling, fire once
    scrollTimeout.current = setTimeout(() => {
      if (scrollDirection.current === "next") nextSlide();
      else if (scrollDirection.current === "prev") prevSlide();

      scrollDirection.current = null; // reset
      startAutoSlide(); // resume auto
    }, 200);
  };

  return (
    <div className="flex gap-4 w-full justify-center">
      {/* Prev Image */}
      <div className="w-1/4 relative opacity-60 scale-90 transition-all duration-500">
        <Image
          src={images[index - 1 !== -1 ? index - 1 : images.length - 1]}
          alt="prev"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div
        className="relative w-full md:w-1/2 lg:w-1/3 h-80 md:h-96 overflow-hidden rounded-3xl border-8 border-cat-brown/20 select-none flex items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        {/* Images wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="min-w-full h-full relative">
              <Image
                src={src}
                alt={`carousel-${i}`}
                width={500}
                height={500}
                className="object-cover pointer-events-none"
                priority
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        {dots && <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-cat-brown scale-110" : "bg-cat-brown/30"
              }`}
            />
          ))}
        </div>}
      </div>
      {/* Next Image */}
      <div className="w-1/4 h-full relative opacity-60 scale-90 transition-all duration-500">
        <Image
          src={images[index + 1 !== images.length ? index + 1 : 0]}
          alt="next"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};
