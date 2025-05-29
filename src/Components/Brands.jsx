import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Brands = () => {
  const brands = [
    "/svg/Versace.svg",
    "/svg/Zara.svg",
    "/svg/Gucci.svg",
    "/svg/Prada.svg",
    "/svg/Calvin_Klein.svg",
  ];

  const ref = useRef(null);
  const [baseX, setBaseX] = useState(0);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Measure container width and check screen size for responsiveness
  useEffect(() => {
    const measureWidth = () => {
      if (ref.current) {
        // Get the width of one complete set (5 brands)
        const singleSetWidth = ref.current.scrollWidth / 2; // We have 2 sets
        setWidth(singleSetWidth);
      }
      setIsMobile(window.innerWidth < 768);
    };

    measureWidth();
    window.addEventListener('resize', measureWidth);

    return () => window.removeEventListener('resize', measureWidth);
  }, []);

  // Continuous animation using useAnimationFrame
  useAnimationFrame((time, delta) => {
    if (width === 0) return;
    
    // Speed: pixels per second
    const speed = isMobile ? 30 : 50;
    
    // Move left continuously
    const moveBy = (delta / 1000) * speed;
    
    setBaseX(prev => {
      const newX = prev - moveBy;
      // Reset when we've moved one full set width
      return newX <= -width ? 0 : newX;
    });
  });

  return (
    <div className="w-full overflow-hidden bg-black py-6 sm:py-8 md:py-10">
      <motion.div
        className="flex w-max"
        ref={ref}
        style={{ x: baseX }}
      >
        {/* Create 2 identical sets for seamless looping */}
        {[...brands, ...brands].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-14"
          >
            <div className="relative">
              <img
                src={item}
                alt={`Brand ${(index % brands.length) + 1}`}
                className="h-6 w-auto sm:h-8 md:h-10 lg:h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div
                className="hidden text-white text-xs sm:text-sm md:text-base font-light tracking-wider"
                style={{ display: 'none' }}
              >
                {item.split('/').pop().split('.')[0].replace('_', ' ')}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};