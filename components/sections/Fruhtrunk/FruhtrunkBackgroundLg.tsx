import { motion } from "framer-motion";
import { MutableRefObject, ReactNode, RefObject } from "react";
import useBackgroundImage from "./useBackgroundImage";

export interface FruhtrunkBackgroundLgProps {
    children: ReactNode;
    scrollRef: RefObject<HTMLDivElement>;
}

export default function FruhtrunkBackgroundLg(props: FruhtrunkBackgroundLgProps) {
    const backgroundImage = useBackgroundImage(props.scrollRef);

    return (
        <motion.div
            className="pb-8 pt-3 md:pb-14 md:pt-7"
            style={{ backgroundImage }}
        >
            {props.children}
        </motion.div>
    );
}
