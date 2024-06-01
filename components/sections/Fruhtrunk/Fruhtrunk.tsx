import { FormattedMessage } from "react-intl";
import CompactArea from "../../CompactArea";
import Grid from "../../Grid";
import ScrollTarget, { ScrollId } from "../../ScrollTarget";
import SectionHeadline from "../../SectionHeadline";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTime, useTransform } from "framer-motion";
import { fullGradient, zeroGradient } from "./util";

export interface FruhtrunkProps {}

{
    /* <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1282827850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://ubuimperator.bandcamp.com/album/fruhtrunk">Fruhtrunk von Ubu Imperator</a></iframe> */
}

const MAX_STROKE = 80;
// const stroke = 30;
// const lines = `repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) ${(maxStroke - stroke) / 2}px, rgba(255,255,255,1) ${(maxStroke - stroke) / 2}px, rgba(255,255,255,1) ${stroke}px, rgba(0,0,0,0) ${stroke}px, rgba(0,0,0,0) ${maxStroke})`;

export default function Fruhtrunk(props: FruhtrunkProps) {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

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

    const backgroundImage = useMotionTemplate`repeating-linear-gradient(${rotate}deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) ${first}px, rgba(255,255,255,1) ${first}px, rgba(255,255,255,1) ${second}px, rgba(0,0,0,0) ${second}px, rgba(0,0,0,0) ${MAX_STROKE}px)`;

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    return (
        <div ref={ref}>
            <ScrollTarget id={ScrollId.fruhtrunk} />
            <Grid>
                <CompactArea>
                    <SectionHeadline>Release - Fruhtrunk</SectionHeadline>
                    <p className="mb-2 md:mb-4">
                        <FormattedMessage id={"home.fruhtrunk.text1"}></FormattedMessage>
                    </p>
                    <p className="mb-3 md:mb-7">
                        <FormattedMessage id={"home.fruhtrunk.text2"}></FormattedMessage>
                    </p>
                </CompactArea>
            </Grid>
            <motion.div
                className="pb-8 pt-3 md:pb-14 md:pt-7"
                style={{ backgroundImage }}
            >
                <div className="flex justify-center">
                    {!isFirstRender && (
                        <iframe
                            className="h-[538px] w-[300px] border-0 md:h-[638px] md:w-[400px]"
                            title={"bandcamp"}
                            src="https://bandcamp.com/EmbeddedPlayer/album=1282827850/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
                            seamless
                        >
                            <a href="https://ubuimperator.bandcamp.com/album/ubudemo">Fruhtrunk</a>
                        </iframe>
                    )}
                </div>
            </motion.div>
            <div className="mb-8 md:mb-14" />
        </div>
    );
}
