import React from "react";
import Grid, { GridLines } from "../Grid";
import styled from "styled-components";
import alle from "../../images/fotos-impex-original/alle.jpg";
import simon from "../../images/fotos-impex-original/simon.jpg";
import daniel from "../../images/fotos-fleisch/daniel.jpg";
import raphi from "../../images/fotos-impex-original/raphi.jpg";

import { rectangleKeyframes } from "../../styles/clip-path-keyframes";
import CompactArea from "../CompactArea";
import SectionSpace from "../SectionSpace";
import { AspectRatioContent, aspectRatioMixin } from "../../styles/aspect-ratio";
import ScrollTarget, { ScrollId } from "../ScrollTarget";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { imageLazyBoundary, imageRenditions } from "../../imageRenditions";

const StyledGrid = styled(Grid)`
    row-gap: ${(props) => props.theme.grid.gap.base};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        row-gap: ${(props) => props.theme.grid.gap.md};
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        row-gap: ${(props) => props.theme.grid.gap.lg};
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

export interface PhotosMembers {}

export default function PhotosMembers(props: PhotosMembers) {
    return (
        <>
            <ScrollTarget id={ScrollId.impex} />
            <Grid>
                <CompactArea>
                    <h2>
                        <FormattedMessage id={"home.photo.headline"} />
                    </h2>
                </CompactArea>
            </Grid>
            <StyledGrid>
                <StyledRaphiImage>
                    <AspectRatioContent>
                        <Image
                            src={raphi}
                            layout={"fill"}
                            quality={90}
                            objectFit={"cover"}
                            alt={"raphi"}
                            sizes={imageRenditions.half}
                            lazyBoundary={imageLazyBoundary}
                        />
                    </AspectRatioContent>
                </StyledRaphiImage>

                <StyledSimonImage>
                    <AspectRatioContent>
                        <Image
                            src={simon}
                            layout={"fill"}
                            quality={90}
                            objectFit={"cover"}
                            alt={"simon"}
                            sizes={imageRenditions.half}
                            lazyBoundary={imageLazyBoundary}
                        />
                    </AspectRatioContent>
                </StyledSimonImage>

                <StyledDanielImage>
                    <AspectRatioContent>
                        <Image
                            src={daniel}
                            layout={"fill"}
                            quality={70}
                            objectFit={"cover"}
                            alt={"alle"}
                            sizes={imageRenditions.full}
                            lazyBoundary={imageLazyBoundary}
                        />
                    </AspectRatioContent>
                </StyledDanielImage>
            </StyledGrid>
            <SectionSpace />
        </>
    );
}
