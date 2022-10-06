import React from "react";
import Grid, { GridLines } from "../Grid";
import styled from "styled-components";
import alle from "../../images/photos/alle.jpg";
import simon from "../../images/photos/simon.jpg";
import raphi from "../../images/photos/raphi.jpg";
import daniel from "../../images/photos/daniel.jpg";
import { rectangleKeyframes, starKeyframes } from "../../styles/clip-paths";

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
    animation: ${rectangleKeyframes} 9s infinite 0.7s;
    animation-timing-function: linear;
    aspect-ratio: ${(props) => props.theme.ratio.square};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        aspect-ratio: ${(props) => props.theme.ratio.wide};
        grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
    }
`;

export const StyledSimonImage = styled.div`
    grid-row: 2;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    animation: ${rectangleKeyframes} 8.2s infinite 0.3s;
    animation-timing-function: linear;
    aspect-ratio: ${(props) => props.theme.ratio.square};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        aspect-ratio: ${(props) => props.theme.ratio.high};
        grid-column: ${GridLines.col3Start} / ${GridLines.col6End};
    }
`;

export const StyledRaphiImage = styled.div`
    grid-row: 3;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};

    animation: ${rectangleKeyframes} 8.5s infinite 1.1s;
    animation-timing-function: linear;
    aspect-ratio: ${(props) => props.theme.ratio.square};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        aspect-ratio: ${(props) => props.theme.ratio.high};
        grid-row: 2;
        grid-column: ${GridLines.col7Start} / ${GridLines.col10End};
    }
`;

export const StyledDanielImage = styled.div`
    grid-row: 4;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};

    transform: scaleX(-1);
    animation: ${rectangleKeyframes} 8s infinite;
    animation-timing-function: linear;
    aspect-ratio: ${(props) => props.theme.ratio.square};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        aspect-ratio: ${(props) => props.theme.ratio.wide * 1.5};
        grid-row: 3;
        grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
    }
`;

export interface PhotosProps {}

export default function Photos(props: PhotosProps) {
    return (
        <StyledGrid>
            <StyledAllImage>
                <StyledImg src={alle.src} />
            </StyledAllImage>

            <StyledRaphiImage>
                <StyledImg src={raphi.src} />
            </StyledRaphiImage>

            <StyledSimonImage>
                <StyledImg src={simon.src} />
            </StyledSimonImage>

            <StyledDanielImage>
                <StyledImg src={daniel.src} />
            </StyledDanielImage>
        </StyledGrid>
    );
}
