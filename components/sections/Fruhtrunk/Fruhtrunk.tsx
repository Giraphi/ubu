import { FormattedMessage } from "react-intl";
import CompactArea from "../../CompactArea";
import Grid from "../../Grid";
import ScrollTarget, { ScrollId } from "../../ScrollTarget";
import SectionHeadline from "../../SectionHeadline";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTime, useTransform } from "framer-motion";
import { fullGradient, zeroGradient } from "./util";
import useBackgroundImage from "./useBackgroundImage";
import { useDeviceStore } from "../../../context/useDeviceStore";

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

    const backgroundImage = useBackgroundImage(ref);

    const device = useDeviceStore();

    console.log(device);

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
