import React from "react";
import Grid, { GridLines } from "../Grid";
import styled from "styled-components";
// import alle from "../../public/fotos-impex/alle.jpg";
// import alleWebp from "../../public/fotos-impex/alle.webp";
// import simon from "../../public/fotos-impex/simon.jpg";
// import simonWebp from "../../public/fotos-impex/simon.webp";
// import raphi from "../../public/fotos-impex/raphi.jpg";
// import raphiWebp from "../../public/fotos-impex/raphi.webp";
// import daniel from "../../public/fotos-impex/daniel.jpg";
// import danielWebp from "../../public/fotos-impex/daniel.webp";
import { rectangleKeyframes } from "../../styles/clip-path-keyframes";
import CompactArea from "../CompactArea";
import SectionSpace from "../SectionSpace";
import { AspectRatioContent, aspectRatioMixin } from "../../styles/aspect-ratio";
import ScrollTarget, { ScrollId } from "../ScrollTarget";

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
            <ScrollTarget id={ScrollId.impex} />
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
                        <picture>
                            {/*<source srcSet={"./fotos-impex/alle.webp"} />*/}
                            <StyledImg src={"./fotos-impex/alle.jpg"} />
                        </picture>
                    </AspectRatioContent>
                </StyledAllImage>

                <StyledRaphiImage>
                    <AspectRatioContent>
                        <picture>
                            {/*<source srcSet={"./fotos-impex/raphi.webp"} />*/}
                            <StyledImg src={"./fotos-impex/raphi.jpg"} />
                        </picture>
                    </AspectRatioContent>
                </StyledRaphiImage>

                <StyledSimonImage>
                    <AspectRatioContent>
                        <picture>
                            {/*<source srcSet={"./fotos-impex/simon.webp"} />*/}
                            <StyledImg src={"./fotos-impex/simon.jpg"} />
                        </picture>
                    </AspectRatioContent>
                </StyledSimonImage>

                <StyledDanielImage>
                    <AspectRatioContent>
                        <picture>
                            {/*<source srcSet={"./fotos-impex/daniel.webp"} />*/}
                            <StyledImg src={"./fotos-impex/daniel.jpg"} />
                        </picture>
                    </AspectRatioContent>
                </StyledDanielImage>
            </StyledGrid>
            <SectionSpace />
        </>
    );
}
