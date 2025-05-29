// import React, { useRef, useEffect, useState } from "react";

// export const InfiniteLoop = () => {
//     const brands = [
//         "/svg/Versace.svg",
//         "/svg/Zara.svg",
//         "/svg/Gucci.svg",
//         "/svg/Prada.svg",
//         "/svg/Calvin_Klein.svg",
//     ];

//     const containerRef = useRef(null);
//     const [duration, setDuration] = useState(40);

//     useEffect(() => {
//         if (!containerRef.current) return;
//         const totalWidth = containerRef.current.scrollWidth / 2;
//         const speed = 10; // pixels per second
//         setDuration(totalWidth / speed);
//     }, []);

//     return (
//         <div className="relative w-full overflow-hidden bg-black h-[100px]">
//             <div
//                 ref={containerRef}
//                 className="flex w-max  animate-scroll" // gap--4 property will add a little gltichy effect dont use that instead add a mr- to the image itself
//                 style={{ animationDuration: `${duration}s` }}
//             >
//                 {[...brands, ...brands].map((src, index) => (
//                     <div key={index}>
//                         <img src={src} alt={`brand-${index}`} className="h-[60px] mr-[50px]" /> 
//                         {/* //size of the images can be customized */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


import { animate, motion , MotionConfig, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";


export const InfiniteLoop = () => {
    const brands = [
        "/svg/Versace.svg",
        "/svg/Zara.svg",
        "/svg/Gucci.svg",
        "/svg/Prada.svg",
        "/svg/Calvin_Klein.svg",
    ];

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
    useEffect(() => {
        let finalPosition = -width / 2 - 8;
        let controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        });
        return controls.stop;
    }, [xTranslation, width]);
    return (
        
        <motion.div className="bg-black absolute left-0 overflow-x-visible w-max flex gap-4" ref={ref} style={{x: xTranslation}}>
           
                {[...brands, ...brands].map((item, index) => (
                    <div key={index}>
                        <img src={item} className="h-[70px] " />
                    </div>
                ))}
                
          
        </motion.div>
    );

}
