import { useState, useEffect, useRef } from "react";

interface CarrouselProps {
  images: string[],
  radius: number,
  speed: number
}

export default function Carousel3D({ images, radius, speed }: CarrouselProps) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const angle = 360 / images.length;

  const startAutoRotate = () => {
    stopAutoRotate();
    intervalRef.current = window.setInterval(
      () => setIndex(prev => prev + 1),
      speed
    );
  };

  const stopAutoRotate = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoRotate();
    return stopAutoRotate;
  });

  return (
    <>
      <div
        className="w-full flex flex-col items-center gap-20 bg-[#010e17] mt-[160px] mb-[250px] rounded-3xl"
      // onMouseEnter={stopAutoRotate}
      // onMouseLeave={startAutoRotate}
      >
        <div
          className="relative w-[260px] h-[360px] duration-700 "
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(1500px) rotateY(${index * angle}deg)`
          }}
        >
          {images.map((img, i) => {
            const rotation = i * angle;
            return (
              <div
                key={i}
                className="absolute w-full h-full rounded-lg overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `
                                    rotateY(${rotation}deg)
                                    translateZ(${radius}px)
                                `,
                  transition: "transform .10s",
                }}
              >
                <img
                  src={img}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>

  );
}
