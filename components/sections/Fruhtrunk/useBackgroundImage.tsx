const MAX_STROKE = 80;

import { useMotionTemplate, useScroll, useSpring, useTransform } from "framer-motion";
import { MutableRefObject, RefObject } from "react";

export default function useBackgroundImage(ref: RefObject<HTMLDivElement>) {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const spring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const stroke = useTransform(spring, [0, 0.5, 1], [0, MAX_STROKE - 20, 0]);
    const rotate = useTransform(spring, [0, 1], [-180, 180]);
    const first = useTransform(() => (MAX_STROKE - stroke.get()) / 2);
    const second = useTransform(() => first.get() + stroke.get());

    return useMotionTemplate`repeating-linear-gradient(${rotate}deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) ${first}px, rgba(255,255,255,1) ${first}px, rgba(255,255,255,1) ${second}px, rgba(0,0,0,0) ${second}px, rgba(0,0,0,0) ${MAX_STROKE}px)`;
}
