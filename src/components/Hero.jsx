import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const emotions = [
    { name: "Surprise: 😲", path: "M0,5 Q20,0 40,5 T80,5 Q90,10 100,5" },
    { name: "Anger: 😡", path: "M0,5 Q15,4 30,6 T60,5 Q80,4 100,5" },
    { name: "Curiosity: 🧐", path: "M0,5 Q15,0 30,5 Q45,10 60,5 T100,5" },
    { name: "Sadness: 😢", path: "M0,5 Q10,10 20,5 T40,5 Q60,0 80,5 T100,5" },
    { name: "Disappointment: 😞", path: "M0,5 Q10,0 30,5 Q50,10 70,5 T100,5" },
];

const Hero = () => {
    const pathRef = useRef(null);
    const titleRef = useRef(null);
    const [currentEmotion, setCurrentEmotion] = useState(emotions[0]);
    const emotionIndex = useRef(0);

    useEffect(() => {
        const path = pathRef.current;
        const title = titleRef.current;

        // Title animation
        gsap.fromTo(
            title,
            { opacity: 0, y: -50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power2.out" }
        );

        const timeline = gsap.timeline({
            repeat: -1,
            defaults: { duration: 3, ease: "none" },
        });

        const animatePath = () => {
            const currentPath = currentEmotion.path;
            path.setAttribute("d", currentPath);

            const pathLength = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
                stroke: "#5D9CEC",
                strokeWidth: 2,
                fill: "none",
            });

            timeline.to(path, {
                strokeDashoffset: 0,
                onComplete: () => {
                    emotionIndex.current = (emotionIndex.current + 1) % emotions.length;
                    setCurrentEmotion(emotions[emotionIndex.current]);
                },
            });
        };

        animatePath();
        return () => timeline.kill();
    }, [currentEmotion]);

    return (
        <div id="home" className="relative w-screen h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
            {/* Dynamic Title */}
            <div
                ref={titleRef}
                className="absolute top-1/4 text-center text-5xl md:text-7xl font-bold leading-snug z-10"
            >
                <span className="text-gray-800">How</span>{" "}
                <span className="text-black">emotion</span>{" "}
                <span className="text-gray-800">fluctuates</span>
                <br />
                <span className="text-gray-600">through wikispeedia</span>
            </div>

            {/* Emotion Text */}
            <div className="absolute text-4xl md:text-5xl font-bold text-black z-10 mt-[10rem]">
                {currentEmotion.name}
            </div>

            {/* SVG Path */}
            <svg
                className="absolute top-[60%] left-0 w-full h-[50px] z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
            >
                <path ref={pathRef} />
            </svg>
        </div>
    );
};

export default Hero;
