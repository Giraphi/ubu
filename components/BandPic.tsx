import React from "react";
import Grid, { GridLines } from "./Grid";
import styled, { css, keyframes } from "styled-components";
import photo from "../images/fotos-galerie/UBUIMPERATOR_Auswahl-20.jpg";
import frame from "../images/frame.png";
import Image from "next/image";
import SectionSpace from "./SectionSpace";

const photoKeyframesStrong = keyframes`
    0% {
        transform: scale(0.83) translateX(1%);
    }
    50% {
        transform: scale(0.9) translateX(1%);
    }
    100% {
        transform: scale(0.83) translateX(1%);

    }
`;
const photoKeyframesLight = keyframes`
    0% {
        transform: scale(0.83) translateX(1%);
    }
    50% {
        transform: scale(0.87) translateX(1%);
    }
    100% {
        transform: scale(0.83) translateX(1%);

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
`;

const StyledContainer = styled.div`
    animation: ${photoKeyframesStrong} 5s infinite;
    animation-timing-function: ease-in-out;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        animation: ${photoKeyframesLight} 5s infinite;
    }
`;
// animation-name: ${photoKeyframesLight};

export interface BandPicProps {}

export default function BandPic(props: BandPicProps) {
    return (
        <>
            <Grid>
                <StyledArea>
                    <StyledContainer>
                        <Image src={photo} alt={"band photo"} />
                    </StyledContainer>
                </StyledArea>
                <StyledArea>
                    <Image src={frame} alt={"image frame"} />
                </StyledArea>
                {/*<StyledOverlay />*/}
                {/*<StyledArea>*/}
                {/*    <Image src={frame} layout={"fill"} objectFit={"contain"} />*/}
                {/*</StyledArea>*/}
            </Grid>
            <SectionSpace />
        </>
    );
}
