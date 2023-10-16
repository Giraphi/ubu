import React from "react";
import styled, { css } from "styled-components";
import { flash, glitch1, glitch2, glitch3 } from "../styles/glitch-keyframes";
import Image from "next/legacy/image";
import { ImageProps } from "next/dist/client/image";
import { imageLazyBoundary, imageRenditions } from "../imageRenditions";

const StyledGlitch = styled.div`
    position: relative;
    overflow: hidden;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const StyledImg = styled(Image)<{ $numChild: number; variant: number }>`
    position: absolute;
    top: calc(-1 * 5px);
    left: calc(-1 * 10px);
    width: calc(100% + 10px * 2);
    height: calc(100% + 5px * 2);

    ${(props) =>
        props.$numChild === 2 &&
        css`
            transform: translate3d(10px, 0, 0);
            animation: ${glitch1} 3s infinite linear alternate;
            animation-delay: -${props.variant * 2}s;
        `}

    ${(props) =>
        props.$numChild === 3 &&
        css`
            transform: translate3d(-10px, 0, 0);
            animation: ${glitch2} 4s infinite linear alternate;
            animation-delay: -${props.variant * 2}s;
        `}

    ${(props) =>
        props.$numChild === 4 &&
        css`
            transform: translate3d(0, -5px, 0) scale3d(-1, -1, 1);
            animation: ${glitch3} 3.5s infinite linear alternate;
            animation-delay: -${props.variant * 2}s;
        `}

    ${(props) =>
        props.$numChild === 5 &&
        css`
            animation: ${flash} ${props.variant * 3}s steps(1, end) infinite;
            animation-delay: -${props.variant * 2}s;
        `}
`;

export interface GlitchyImageProps {
    src: string;
    variant: number;
    imagePosition?: string;
    alt: string;
    sizes: string;
}

export default function GlitchyImage(props: GlitchyImageProps) {
    const imageProps = {
        src: props.src,
        layout: "fill",
        objectFit: "cover",
        objectPosition: props.imagePosition,
        alt: props.alt,
        quality: 40,
        sizes: props.sizes,
        lazyBoundary: imageLazyBoundary,
    } as ImageProps;

    return (
        <StyledGlitch>
            <StyledImg
                {...imageProps}
                $numChild={1}
                variant={props.variant}
            />
            {props.variant === 1 && (
                <StyledImg
                    {...imageProps}
                    $numChild={2}
                    variant={props.variant}
                />
            )}
            {props.variant === 2 && (
                <StyledImg
                    {...imageProps}
                    $numChild={3}
                    variant={props.variant}
                />
            )}
            {props.variant === 3 && (
                <StyledImg
                    {...imageProps}
                    $numChild={4}
                    variant={props.variant}
                />
            )}
            <StyledImg
                {...imageProps}
                $numChild={5}
                variant={props.variant}
            />
        </StyledGlitch>
    );
}
