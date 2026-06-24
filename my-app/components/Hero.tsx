"use client";

import {motion, useScroll, useTransform, MotionValue} from 'framer-motion';
import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
    const { scrollYProgress } = useScroll();

    const filter = useTransform(
        scrollYProgress,
        [0, 0.4],
        ["blur(0px)", "blur(12px)"]
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 0.4],
        [1, 1.1]
    );

    return (

        <main>
            <section className="relative h-dvh w-full overflow-hidden bg-black">
                <motion.div style={{filter, scale}} className='absolute inset-0 h-full w-full will-change-transform'>
                    <video autoPlay muted loop playsInline className='h-full w-full object-cover opacity-70'>
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </motion.div>

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
                    <h1 className="text-7xl font-extrabold tracking-[0.2em] md:text-9xl text-black">
                        RE/UP
                    </h1>
                </div>

                <div className='absolute bottom-10 left-0 w-full z-20 flex flex-col items-center text-white gap-2'>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-300 px-6 text-center">scroll down to experience sustainability</p>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: [0, 12, 0] }} // Keyframes: Starts at 0, moves down 12px, returns to 0 
                        transition={{ opacity: { duration: 1 }, y: {duration: 2, repeat: Infinity, ease: "easeInOut"} }} // Fades in once on load
                        className="mt-10 relative z-30 flex justify-center w-full" >
                        <BsArrowDown className="text-3xl text-gray-300 hover:text-white transition-colors" />
                    </motion.div>
                </div>
            </section>
        </main>

    )

}

export default Hero;