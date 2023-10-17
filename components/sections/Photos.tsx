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
import Image from "next/legacy/image";
import { FormattedMessage } from "react-intl";
import { imageLazyBoundary, imageRenditions } from "../../imageRenditions";
import SectionHeadline from "../SectionHeadline";
import PicturePile from "../PicturePile";

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
        grid-column: ${GridLines.col3Start} / ${GridLines.col6End};
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
        grid-column: ${GridLines.col7Start} / ${GridLines.col10End};
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
        grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
    }
`;

export interface PhotosProps {}

export default function Photos(props: PhotosProps) {
    return (
        <>
            <ScrollTarget id={ScrollId.photos} />
            <Grid>
                <CompactArea>
                    <SectionHeadline>
                        <FormattedMessage id={"home.photo.headline"} />
                    </SectionHeadline>
                </CompactArea>
            </Grid>
            <StyledGrid>
                <CompactArea>
                    <p>
                        <FormattedMessage
                            id={"home.impex.text"}
                            values={{
                                faktenLink: (
                                    <a href={"https://alternativefakten089.de/"}>
                                        <FormattedMessage id={"home.impex.text.faktenLink"} />
                                    </a>
                                ),
                                impexLink: <a href={"https://import-export.cc/"}>Import Export</a>,
                            }}
                        />
                    </p>
                </CompactArea>
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

                <CompactArea className={"pb-4 pt-8"}>
                    <p>
                        <FormattedMessage id={"home.photo.more"} />
                    </p>
                </CompactArea>
                <PicturePile />
            </StyledGrid>
            <SectionSpace />
        </>
    );
}
