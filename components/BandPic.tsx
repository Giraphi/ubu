import React from "react";
import Grid, { GridLines } from "./Grid";
import styled, { css, keyframes } from "styled-components";
import photo from "../images/fotos-galerie/UBUIMPERATOR_Auswahl-20.jpg";
import frame from "../images/frame.png";
import Image from "next/image";
import SectionSpace from "./SectionSpace";
import { AspectRatioContent, aspectRatioMixin } from "../styles/aspect-ratio";
import { imageRenditions } from "../imageRenditions";

const photoKeyframesStrong = keyframes`
    0% {
        transform: scale(0.83);
    }
    50% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(0.83);

    }
`;
const photoKeyframesLight = keyframes`
    0% {
        transform: scale(0.83);
    }
    50% {
        transform: scale(0.87);
    }
    100% {
        transform: scale(0.83);

    }
`;

const ImageAreaMixin = css`
    grid-row: 1;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
`;

const StyledArea = styled.div`
    ${ImageAreaMixin};
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => aspectRatioMixin(1.3)}
`;

const StyledContainer = styled.div`
    margin-top: 2%;
    margin-left: 2%;
    width: 100%;
    height: 100%;
    position: relative;
    animation: ${photoKeyframesStrong} 5s infinite;
    animation-timing-function: ease-in-out;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        animation: ${photoKeyframesLight} 5s infinite;
    }
`;

export interface BandPicProps {}

export default function BandPic(props: BandPicProps) {
    return (
        <>
            <Grid>
                <StyledArea>
                    <AspectRatioContent>
                        <StyledContainer>
                            <Image
                                src={photo}
                                alt={"band photo"}
                                quality={30}
                                loading={"eager"}
                                layout={"fill"}
                                objectFit={"cover"}
                                sizes={imageRenditions.full}
                            />
                        </StyledContainer>
                    </AspectRatioContent>
                </StyledArea>
                <StyledArea>
                    <AspectRatioContent>
                        <Image
                            loading={"eager"}
                            src={frame}
                            alt={"image frame"}
                            quality={50}
                            layout={"fill"}
                            objectFit={"cover"}
                            sizes={imageRenditions.full}
                        />
                    </AspectRatioContent>
                </StyledArea>
            </Grid>
            <SectionSpace />
        </>
    );
}
