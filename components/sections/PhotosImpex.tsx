import React from "react";
import Grid, { GridLines } from "../Grid";
import styled from "styled-components";
import alle from "../../images/photos/alle.jpg";
import simon from "../../images/photos/simon.jpg";
import raphi from "../../images/photos/raphi.jpg";
import daniel from "../../images/photos/daniel.jpg";
import { rectangleKeyframes } from "../../styles/clip-path-keyframes";
import CompactArea from "../CompactArea";
import SectionSpace from "../SectionSpace";
import { AspectRatioContent, aspectRatioMixin } from "../../styles/aspect-ratio";

const StyledGrid = styled(Grid)`
    row-gap: ${(props) => props.theme.grid.gap.base};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        row-gap: ${(props) => props.theme.grid.gap.md};
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        row-gap: ${(props) => props.theme.grid.gap.lg};
    }
`;

export const StyledImg = styled.img`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const StyledAllImage = styled.div`
    grid-row: 1;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    ${(props) => aspectRatioMixin(props.theme.ratio.square)}

    animation: ${rectangleKeyframes} 9s infinite 0.7s;
    animation-timing-function: linear;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        ${(props) => aspectRatioMixin(props.theme.ratio.wide)}
        grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    }
`;

export const StyledSimonImage = styled.div`
    grid-row: 2;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    ${(props) => aspectRatioMixin(props.theme.ratio.square)}

    animation: ${rectangleKeyframes} 8.2s infinite 0.3s;
    animation-timing-function: linear;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        ${(props) => aspectRatioMixin(props.theme.ratio.high)}
        grid-column: ${GridLines.contentLeft} / ${GridLines.col6End};
    }
`;

export const StyledRaphiImage = styled.div`
    grid-row: 3;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    ${(props) => aspectRatioMixin(props.theme.ratio.square)}

    animation: ${rectangleKeyframes} 8.5s infinite 1.1s;
    animation-timing-function: linear;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        ${(props) => aspectRatioMixin(props.theme.ratio.high)}
        grid-row: 2;
        grid-column: ${GridLines.col7Start} / ${GridLines.contentRight};
    }
`;

export const StyledDanielImage = styled.div`
    grid-row: 4;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    ${(props) => aspectRatioMixin(props.theme.ratio.square)}

    transform: scaleX(-1);
    animation: ${rectangleKeyframes} 8s infinite;
    animation-timing-function: linear;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        ${(props) => aspectRatioMixin(props.theme.ratio.xWide)}

        grid-row: 3;
        grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    }
`;

export interface PhotosProps {}

export default function PhotosImpex(props: PhotosProps) {
    return (
        <>
            <Grid>
                <CompactArea>
                    <h2>Ubu @ImportExport</h2>
                    <p>
                        Ubu bei den <a href={"https://alternativefakten089.de/"}>Alternativen Fakten</a> im September 2022 im{" "}
                        <a href={"https://import-export.cc/"}>Import Export</a> München. Danke an Vanessa Mönius für die Fotos.
                    </p>
                </CompactArea>
            </Grid>
            <StyledGrid>
                <StyledAllImage>
                    <AspectRatioContent>
                        <StyledImg src={alle.src} />
                    </AspectRatioContent>
                </StyledAllImage>

                <StyledRaphiImage>
                    <AspectRatioContent>
                        <StyledImg src={raphi.src} />
                    </AspectRatioContent>
                </StyledRaphiImage>

                <StyledSimonImage>
                    <AspectRatioContent>
                        <StyledImg src={simon.src} />
                    </AspectRatioContent>
                </StyledSimonImage>

                <StyledDanielImage>
                    <AspectRatioContent>
                        <StyledImg src={daniel.src} />
                    </AspectRatioContent>
                </StyledDanielImage>
            </StyledGrid>
            <SectionSpace />
        </>
    );
}
