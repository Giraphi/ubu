import React from "react";
import ScrollTarget, { ScrollId } from "../ScrollTarget";
import Grid from "../Grid";
import CompactArea from "../CompactArea";
import SectionSpace from "../SectionSpace";
import { AspectRatioContent, aspectRatioMixin } from "../../styles/aspect-ratio";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import SectionHeadline from "../SectionHeadline";

const StyledVideoArea = styled.div`
    ${(props) => aspectRatioMixin(props.theme.ratio.youtube)}
`;

export interface VideoProps {}

export default function Video(props: VideoProps) {
    return (
        <>
            <ScrollTarget id={ScrollId.video} />
            <Grid>
                <CompactArea>
                    <SectionHeadline>Video</SectionHeadline>
                    <p className={"pb-8"}>
                        <FormattedMessage id={"home.video.text"} />
                    </p>
                    <StyledVideoArea>
                        <AspectRatioContent>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/j9NXuM5eqXM"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </AspectRatioContent>
                    </StyledVideoArea>
                </CompactArea>
            </Grid>
            <SectionSpace />
        </>
    );
}
