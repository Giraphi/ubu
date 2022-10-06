import React from "react";
import Grid, { GridLines } from "../Grid";
import styled from "styled-components";
import alle from "../../images/photos/alle.jpg";
import simon from "../../images/photos/simon.jpg";
import raphi from "../../images/photos/raphi.jpg";
import daniel from "../../images/photos/daniel.jpg";

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
    grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
    aspect-ratio: ${(props) => props.theme.ratio.wide};
`;

export const StyledSimonImage = styled.div`
    grid-row: 2;
    grid-column: ${GridLines.col3Start} / ${GridLines.col6End};
    aspect-ratio: ${(props) => props.theme.ratio.high};
`;

export const StyledRaphiImage = styled.div`
    grid-row: 2;
    grid-column: ${GridLines.col7Start} / ${GridLines.col10End};
    aspect-ratio: ${(props) => props.theme.ratio.high};
`;

export const StyledDanielImage = styled.div`
    grid-row: 3;
    grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
    aspect-ratio: ${(props) => props.theme.ratio.wide * 1.5};
    transform: scaleX(-1);
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
