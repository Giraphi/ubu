import React from "react";
import Grid, { GridLines } from "../Grid";
import CompactArea from "../CompactArea";
import styled from "styled-components";
import simon from "../../images/fotos-ruebezahl/ruebe-simon.jpg";
import daniel from "../../images/fotos-ruebezahl/ruebe-daniel.jpg";
import raphi from "../../images/fotos-ruebezahl/ruebe-raphi.jpg";
import { noiseKeyframes } from "../../styles/noise-keyframes";
import GlitchyImage from "../GlitchyImage";
import SectionSpace from "../SectionSpace";
import { AspectRatioContent, aspectRatioMixin } from "../../styles/aspect-ratio";
import ScrollTarget, { ScrollId } from "../ScrollTarget";

const StyledGrid = styled(Grid)`
    row-gap: ${(props) => props.theme.grid.gap.lg};
`;

const StyledRaphiImage = styled.div`
    grid-row: 1;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    ${(props) => aspectRatioMixin(props.theme.ratio.square)}
    overflow: hidden;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        grid-row: 1;
        ${(props) => aspectRatioMixin(props.theme.ratio.high)}
        grid-column: ${GridLines.contentLeft} / ${GridLines.col6End};
    }
`;

const StyledSimonImage = styled.div`
    grid-row: 2;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    ${(props) => aspectRatioMixin(props.theme.ratio.square)}
    overflow: hidden;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        ${(props) => aspectRatioMixin(props.theme.ratio.high)}
        grid-row: 1;
        grid-column: ${GridLines.col7Start} / ${GridLines.contentRight};
    }
`;

const StyledDanielImage = styled.div`
    grid-row: 3;
    overflow: hidden;
    ${(props) => aspectRatioMixin(props.theme.ratio.square)}
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        grid-row: 2;
        ${(props) => aspectRatioMixin(props.theme.ratio.xWide)}
    }
`;

export const StyledImg = styled.img<{ delay: number }>`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
`;

const StyledNoise = styled.div`
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200%;
    background: url("http://assets.iceable.com/img/noise-transparent.png");
    animation: ${noiseKeyframes} 0.2s infinite;
    visibility: visible;
    filter: contrast(2) brightness(2);
`;

export interface PhotosRuebeProps {}

export default function PhotosRuebe(props: PhotosRuebeProps) {
    return (
        <>
            <ScrollTarget id={ScrollId.ruebe} />
            <Grid>
                <CompactArea>
                    <h2>Ubu @Rübezahl</h2>
                    <p>
                        Ubu auf dem sehr besonderen und nachhaltigen{" "}
                        <a href={"https://www.youtube.com/watch?v=ylfAdSLbCS0"}>Rübezahl Festival</a> im August 2022.
                    </p>
                </CompactArea>
            </Grid>
            <StyledGrid>
                <StyledRaphiImage>
                    <AspectRatioContent>
                        <GlitchyImage src={raphi.src} variant={1} />
                        <StyledNoise />
                    </AspectRatioContent>
                </StyledRaphiImage>

                <StyledSimonImage>
                    <AspectRatioContent>
                        <GlitchyImage src={simon.src} variant={2} imagePosition={"58% 14%"} />
                        <StyledNoise />
                    </AspectRatioContent>
                </StyledSimonImage>

                <StyledDanielImage>
                    <AspectRatioContent>
                        <GlitchyImage src={daniel.src} variant={3} imagePosition={"19% 38%"} />
                        <StyledNoise />
                    </AspectRatioContent>
                </StyledDanielImage>
            </StyledGrid>
            <SectionSpace />
        </>
    );
}
