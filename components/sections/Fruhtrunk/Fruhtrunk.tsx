import { FormattedMessage } from "react-intl";
import CompactArea from "../../CompactArea";
import Grid from "../../Grid";
import ScrollTarget, { ScrollId } from "../../ScrollTarget";
import SectionHeadline from "../../SectionHeadline";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useBackgroundImage from "./useBackgroundImage";
import { useDeviceStore } from "../../../context/useDeviceStore";
import FruhtrunkBackground from "./FruhtrunkBackground";

export interface FruhtrunkProps {}

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
            <ScrollTarget id={ScrollId.releases} />
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
            <FruhtrunkBackground scrollRef={ref}>
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
            </FruhtrunkBackground>
            <div className="mb-8 md:mb-14" />
        </div>
    );
}
