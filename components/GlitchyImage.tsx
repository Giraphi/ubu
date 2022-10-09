import React from "react";
import styled, { css } from "styled-components";
import { flash, glitch1, glitch2, glitch3 } from "../styles/glitch-keyframes";

const StyledGlitch = styled.div`
    position: relative;
    overflow: hidden;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const StyledImg = styled.div<{ numChild: number; variant: number }>`
    position: absolute;
    top: calc(-1 * 5px);
    left: calc(-1 * 10px);
    width: calc(100% + 10px * 2);
    height: calc(100% + 5px * 2);
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: cover;

    ${(props) =>
        props.numChild === 2 &&
        css`
            transform: translate3d(10px, 0, 0);
            animation: ${glitch1} 5s infinite linear alternate;
            animation-delay: -${props.variant * 2}s;
        `}

    ${(props) =>
        props.numChild === 3 &&
        css`
            transform: translate3d(-10px, 0, 0);
            animation: ${glitch2} 5s infinite linear alternate;
            animation-delay: -${props.variant * 2}s;
        `}

    ${(props) =>
        props.numChild === 4 &&
        css`
            transform: translate3d(0, -5px, 0) scale3d(-1, -1, 1);
            animation: ${glitch3} 6s infinite linear alternate;
            animation-delay: -${props.variant * 2}s;
        `}

    ${(props) =>
        props.numChild === 5 &&
        css`
            animation: ${flash} ${props.variant * 3}s steps(1, end) infinite;
            animation-delay: -${props.variant * 2}s;
        `}
`;

export interface GlitchyImageProps {
    src: string;
    variant: number;
    imagePosition?: string;
}

export default function GlitchyImage(props: GlitchyImageProps) {
    const imageStyle = { backgroundImage: `url(${props.src})`, backgroundPosition: props.imagePosition };

    return (
        <StyledGlitch>
            <StyledImg style={imageStyle} numChild={1} variant={props.variant} />
            {props.variant === 1 && <StyledImg style={imageStyle} numChild={2} variant={props.variant} />}
            {props.variant === 2 && <StyledImg style={imageStyle} numChild={3} variant={props.variant} />}
            {props.variant === 3 && <StyledImg style={imageStyle} numChild={4} variant={props.variant} />}
            <StyledImg style={imageStyle} numChild={5} variant={props.variant} />
        </StyledGlitch>
    );
}
