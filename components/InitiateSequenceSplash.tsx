import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const InitiateSequenceSplash = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  // Use useInView to detect when the user has scrolled to this section
  const isInView = useInView(containerRef, {
    amount: 0.5,
    once: true
  });

  useEffect(() => {
    if (isInView) {
      setTriggered(true);
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[60vh] flex items-center justify-center bg-[#050a07] overflow-hidden z-30"
    >
      {/* Background with fast cut strobe effect when triggered */}
      {triggered && (
        <motion.div
          className="absolute inset-0 bg-primary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0, 0.3, 0] }}
          transition={{ duration: 0.5, times: [0, 0.1, 0.3, 0.4, 1] }}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {triggered && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, ease: "circOut" }}
          >
            <h2
              className="text-6xl md:text-8xl font-display font-bold uppercase italic tracking-widest text-transparent splash-stroke-text text-center"
            >
              INITIATE
              <br />
              SEQUENCE...
            </h2>

            <motion.div
              className="h-1 w-0 bg-primary mx-auto mt-4"
              animate={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </div>

      {/* Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[size:100%_2px,3px_100%]"></div>

      <style>{`
        .splash-stroke-text {
          -webkit-text-stroke: 2px var(--color-primary);
        }
      `}</style>
    </section>
  );
};

export default InitiateSequenceSplash;
