import { ReactNode, RefObject } from "react";
import Lines from "../../../images/lines.svg";
import { motion, useScroll, useSpring, useTime, useTransform } from "framer-motion";

export interface FruhtrunkBackgroundSmProps {
    children: ReactNode;
    scrollRef: RefObject<HTMLDivElement>;
}

export default function FruhtrunkBackgroundSm(props: FruhtrunkBackgroundSmProps) {
    const { scrollYProgress } = useScroll({
        target: props.scrollRef,
        offset: ["start end", "end start"],
    });

    // const time = useTime();
    // const rotate = useTransform(
    //     time,
    //     [0, 40000], // For every 4 seconds...
    //     [0, 3600], // ...rotate 360deg
    //     { clamp: false },
    // );

    const angle = useTransform(scrollYProgress, [0, 1], [0, 360]);

    const rotate = useSpring(angle, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="relative">
            <div className="absolute left-0 top-0 flex size-full items-center justify-center overflow-hidden">
                <motion.div style={{ rotate }}>
                    <Lines
                        style={{
                            position: "absolute",
                            height: "150vh",
                            width: "auto",
                            right: "50%",
                            transform: "translateX(50%) translateY(-50%) rotate(45deg)",
                            top: "50%",
                        }}
                    />
                </motion.div>
            </div>
            <div className="relative z-10 pb-8 pt-3">{props.children}</div>
        </div>
    );
}
