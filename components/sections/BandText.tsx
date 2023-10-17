import React, { useEffect, useRef } from "react";
import SectionSpace from "../SectionSpace";
import Grid, { GridLines } from "../Grid";
import styled from "styled-components";
import Hexe from "../../images/figuren/hexe.svg";
import Hexe2 from "../../images/figuren/hexe_2.svg";
import Narr from "../../images/figuren/narr.svg";
import Kerze from "../../images/figuren/kerze.svg";
import Shaker from "../../images/figuren/shaker.svg";
import Figur from "../Figur";
import CompactArea from "../CompactArea";
import { useInView } from "framer-motion";
import ScrollTarget, { ScrollId } from "../ScrollTarget";
import { FormattedMessage } from "react-intl";
import SectionHeadline from "../SectionHeadline";

const StyledRotateFigure = styled(Figur)`
    transform: scaleX(-1);
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledVideo = styled.video`
    width: 100%;
`;

export interface TextProps {}

export default function BandText(props: TextProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isAllInView = useInView(videoRef, { amount: 0.8 });
    const isSomeInView = useInView(videoRef, { amount: "some" });

    useEffect(() => {
        if (!videoRef.current) {
            return;
        }

        if (!isSomeInView) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            return;
        }

        if (isAllInView) {
            videoRef.current.play();
        }
    }, [isAllInView, isSomeInView]);

    return (
        <>
            <ScrollTarget id={ScrollId.ueberUns} />
            <Grid>
                <CompactArea>
                    <SectionHeadline>
                        <FormattedMessage id={"home.about.title"} />
                    </SectionHeadline>
                    <p>
                        {/*UBU IMPERATOR ist ein 2022 gegründetes Krautrocktrio aus München mit Genreeinflüssen aus Noise, Experimental und*/}
                        {/*Progressive.*/}
                        <FormattedMessage id={"home.about.text1"} />
                    </p>
                    <Row>
                        <Figur>
                            <Hexe />
                        </Figur>
                        <Figur delay={1}>
                            <Hexe2 />
                        </Figur>
                        <StyledRotateFigure delay={2}>
                            <Hexe />
                        </StyledRotateFigure>
                    </Row>
                    <p>
                        <FormattedMessage id={"home.about.text2"} />
                    </p>
                    <Row>
                        <Figur delay={3}>
                            <Narr />
                        </Figur>
                        <Figur delay={1.5}>
                            <Kerze />
                        </Figur>
                        <Figur
                            scale={2}
                            delay={4}
                        >
                            <Shaker />
                        </Figur>
                    </Row>
                    <p className={"pb-8"}>
                        <FormattedMessage id={"home.about.text3"} />
                    </p>
                    <StyledVideo
                        ref={videoRef}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        autoPlay={true}
                    >
                        <source
                            src={"./video/eule.webm"}
                            type={"video/webm"}
                        />
                        <source
                            src={"./video/eule.mp4"}
                            type={"video/mp4"}
                        />
                    </StyledVideo>
                    <SectionSpace />
                </CompactArea>
            </Grid>
        </>
    );
}
